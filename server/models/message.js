'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 5000,
      trim: true
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  { timestamps: true }
);

const Message = mongoose.model('Message', schema);

module.exports = Message;
