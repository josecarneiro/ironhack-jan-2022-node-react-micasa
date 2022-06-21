'use strict';

const express = require('express');
const House = require('../models/house');
const User = require('../models/user');

const router = express.Router();

// - GET - / - Lists houses and profiles. ({ houses: [], profiles: [] })
router.get('/', (req, res, next) => {
  let houses;
  House.find()
    .limit(10)
    .sort({ createdAt: -1 })
    .then((documents) => {
      houses = documents;
      return User.find().limit(10).sort({ createdAt: -1 });
    })
    .then((profiles) => {
      res.json({ houses, profiles });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
