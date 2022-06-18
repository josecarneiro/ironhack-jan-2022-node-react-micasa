'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  house: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'House',
    required: true
  }
});

const Bookmark = mongoose.model('Bookmark', schema);

module.exports = Bookmark;
