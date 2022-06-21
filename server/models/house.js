'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    purpose: {
      type: String,
      enum: ['rent', 'sell'],
      required: true
    },
    type: {
      type: String,
      enum: ['detached-house', 'apartment'],
      required: true
    },
    size: {
      type: Number,
      required: true,
      min: 0
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    bedrooms: {
      type: Number,
      required: true,
      min: 0
    },
    position: {
      type: {
        type: String,
        default: 'Point'
      },
      coordinates: [Number]
    },
    listed: {
      type: Boolean,
      required: true
    },
    description: {
      type: String,
      maxLength: 5000,
      trim: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    pictures: [
      {
        type: String
      }
    ]
  },
  { timestamps: true }
);

const House = mongoose.model('House', schema);

module.exports = House;
