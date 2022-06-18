'use strict';

const express = require('express');
const User = require('../models/user');

const router = new express.Router();

router.get('/search', (req, res, next) => {
  User.find()
    .then((users) => {
      res.json({ profiles: users });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
