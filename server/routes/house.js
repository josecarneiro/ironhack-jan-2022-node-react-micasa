'use strict';

const express = require('express');
const Bookmark = require('../models/bookmark');
const House = require('./../models/house');
const routeGuard = require('./../middleware/route-guard');

const router = new express.Router();

// - GET - '/house/search' - Allows user to search for houses.
router.get('/search', (req, res, next) => {
  const {
    purpose,
    type,
    minimumSize,
    maximumPrice,
    minimumBedrooms,
    lat,
    lng,
    distance // distance around center in degrees, max: 180
  } = req.query;
  House.find({
    purpose,
    type,
    size: { $gte: minimumSize },
    bedrooms: { $gte: minimumBedrooms },
    price: { $lte: maximumPrice }
  })
    .circle('position', { center: [lng, lat], radius: distance })
    .then((houses) => {
      res.json({ houses });
    })
    .catch((error) => {
      next(error);
    });
});

// - GET - '/house/:id' - Loads single house.
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  House.findById(id)
    .populate('owner')
    .then((house) => {
      res.json({ house });
    })
    .catch((error) => {
      next(error);
    });
});

// - PATCH - '/house/:id' - Allows user to edit house they own.
router.patch('/:id', routeGuard, (req, res, next) => {
  const { id } = req.params;
  const {
    purpose,
    type,
    size,
    price,
    bedrooms,
    listed,
    description,
    position,
    pictures
  } = req.body;
  const owner = req.user._id;
  House.findOneAndUpdate(
    { _id: id, owner },
    {
      purpose,
      type,
      size,
      price,
      bedrooms,
      listed,
      description,
      position
    },
    { new: true }
  )
    .then((house) => {
      res.json({ house });
    })
    .catch((error) => {
      next(error);
    });
});

// - DELETE - '/house/:id' - Allows user to delete house they own.
router.delete('/:id', routeGuard, (req, res, next) => {
  const { id } = req.params;
  const owner = req.user._id;
  House.findOneAndDelete({ _id: id, owner })
    .then(() => {
      res.json({});
    })
    .catch((error) => {
      next(error);
    });
});

// - POST - '/house' - Add a new house.
router.post('/', routeGuard, (req, res, next) => {
  const {
    purpose,
    type,
    size,
    price,
    bedrooms,
    listed,
    description,
    position,
    pictures
  } = req.body;
  const owner = req.user._id;
  House.create({
    purpose,
    type,
    size,
    price,
    bedrooms,
    listed,
    description,
    owner,
    position,
    pictures
  })
    .then((house) => {
      res.json({ house });
    })
    .catch((error) => {
      next(error);
    });
});

// - GET - '/house/bookmarked' - List all houses an authenticated user has bookmarked.
router.get('/bookmarked', routeGuard, (req, res, next) => {
  const userId = req.user._id;
  Bookmark.find({ user: userId })
    .populate('house')
    .then((bookmarks) => {
      const houses = bookmarks.map((bookmark) => bookmark.house);
      res.json({ houses });
    })
    .catch((error) => {
      next(error);
    });
});

// - POST - '/house/:id/bookmark' - Set bookmark for this house on this users profile.
router.post('/:id/bookmark', routeGuard, (req, res, next) => {
  const { id } = req.params;
  const userId = req.user._id;
  /* Avoids creating a duplicate bookmark */
  Bookmark.findOne({ house: id, user: userId })
    .then((house) => {
      if (!house) {
        return Bookmark.create({ house: id, user: userId });
      }
    })
    .then(() => {
      res.json({});
    })
    .catch((error) => {
      next(error);
    });
});

// - DELETE - '/house/:id/bookmark' - Unset bookmark for this house on this users profile.
router.delete('/:id/bookmark', routeGuard, (req, res, next) => {
  const { id } = req.params;
  const userId = req.user._id;
  Bookmark.findOneAndDelete({ house: id, user: userId })
    .then(() => {
      res.json({});
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
