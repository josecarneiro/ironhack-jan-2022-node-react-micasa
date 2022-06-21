'use strict';

const ImageKit = require('imagekit');
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

router.get('/imagekit-authentication', (req, res, next) => {
  const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_API_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_API_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
  });

  const authenticationParameters = imagekit.getAuthenticationParameters();

  res.json(authenticationParameters);
});

module.exports = router;
