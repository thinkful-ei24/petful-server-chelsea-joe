'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, CLIENT_ORIGIN } = require('./config');
//const { dbConnect } = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');

//cat mock db data
const Cat = require('./db/cat');
//dog mock db data
const Dog = require('./db/dog');

const app = express();

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

//GET Endpoint

//Cat
app.get('/api/cat', (req, res) => {
  return res.json(Cat[0]);
});

//Dog
app.get('/api/dog', (req, res) => {
  return res.json(Dog[0]);
});

//DELETE Endpoint
app.delete('/api/cat', (req, res) => {
  Cat.shift();
  return res.json('Cat Adopted!');
})

app.delete('/api/dog', (req, res) => {
  Dog.shift();
  return res.json('Dog Adopted');
})

//RUN SERVER
function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  // dbConnect();
  runServer();
}

module.exports = { app };
