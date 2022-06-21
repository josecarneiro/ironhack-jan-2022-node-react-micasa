'use strict';

const express = require('express');
const Message = require('../models/message');
const routeGuard = require('./../middleware/route-guard');

const router = new express.Router();

// - GET - '/message/list' - List all message threads of an authenticated user.
router.get('/message/list', routeGuard, (req, res, next) => {
  const authenticatedUserId = req.user._id;
  Message.find({
    $or: [{ sender: authenticatedUserId }, { receiver: authenticatedUserId }]
  })
    .then((messages) => {
      const messagesOtherUserIds = messages
        .map((message) => {
          return String(message.sender) === String(authenticatedUserId)
            ? message.receiver
            : message.sender;
        })
        .reduce((acc, id, index, original) => {
          if (original.indexOf(id) === index) {
            return [...acc, id];
          } else {
            return acc;
          }
        });
      return User.find({ _id: { $in: messagesOtherUserIds } });
    })
    .then((profiles) => {
      /* Respond with user objects for users with whom we've been messaging */
      res.json({ profiles });
    })
    .catch((error) => {
      next(error);
    });
});

// - GET - '/message/:id' - List all messages between authenticated user and user of id param.
router.get('/message/:id', routeGuard, (req, res, next) => {
  const authenticatedUserId = req.user._id;
  const otherUserId = req.params.id;
  Message.find({
    $or: [
      { sender: authenticatedUserId, receiver: otherUserId },
      { sender: otherUserId, receiver: authenticatedUserId }
    ]
  })
    .sort({ createdAt: -1 })
    .then((messages) => {
      res.json({ messages });
    })
    .catch((error) => {
      next(error);
    });
});

// - POST - '/message/:id' - Send message between authenticated user and user of id param.
router.post('/message/:id', routeGuard, (req, res, next) => {
  const sender = req.user._id;
  const receiver = req.params.id;
  const { content } = req.body;
  Message.create({
    sender,
    receiver,
    content
  })
    .then((message) => {
      res.json({ message });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
