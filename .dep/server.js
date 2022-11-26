require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(3000, () => {
      console.log('Listening on port 3000');
    })
  })
  .catch((error) => {
    console.log(error)
  });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const annsRouter = require('./routes/anns');
app.use('/anns', annsRouter);