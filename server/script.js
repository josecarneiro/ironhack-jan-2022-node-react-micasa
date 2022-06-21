'use strict';

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    House.create([]);
  })
  .catch((error) => {
    console.error(
      `There was an error connecting the database to URI "${MONGODB_URI}"`
    );
    debug(error);
    process.exit(1);
  });
