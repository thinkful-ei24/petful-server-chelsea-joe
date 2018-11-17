'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fetch = require('node-fetch');

const { PORT, CLIENT_ORIGIN, PETFINDER_API_KEY} = require('./config');
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
  fetch(`http://api.petfinder.com/pet.getRandom?format=json&key=${PETFINDER_API_KEY}&output=full&animal=cat`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(dogData => {
    Cat.enqueue({
      imageURL: dogData.petfinder.pet.media.photos.photo[2].$t,
      imageDescription: dogData.petfinder.pet.breeds.breed.$t,
      name: dogData.petfinder.pet.name.$t,
      sex: dogData.petfinder.pet.sex.$t,
      age: dogData.petfinder.pet.age.$t,
      breed: dogData.petfinder.pet.breeds.breed.$t,
      story: dogData.petfinder.pet.description.$t,
    })

    return;
  })
  .then(() => res.json(Cat.peek()))
  .catch((err) => new Error(err.message));
});

//Dog
app.get('/api/dog', (req, res) => {
  fetch(`http://api.petfinder.com/pet.getRandom?format=json&key=${PETFINDER_API_KEY}&output=full&animal=dog`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(dogData => {
    Dog.enqueue({
      imageURL: dogData.petfinder.pet.media.photos.photo[2].$t,
      imageDescription: dogData.petfinder.pet.breeds.breed.$t,
      name: dogData.petfinder.pet.name.$t,
      sex: dogData.petfinder.pet.sex.$t,
      age: dogData.petfinder.pet.age.$t,
      breed: dogData.petfinder.pet.breeds.breed.$t,
      story: dogData.petfinder.pet.description.$t,
    })

    return;
  })
  .then(() => res.json(Dog.peek()))
  .catch((err) => new Error(err.message));
  // return res.json(Dog.peek());
});

//DELETE Endpoint
app.delete('/api/cat', (req, res) => {
  Cat.dequeue();
  return res.json('Cat Adopted!');
})

app.delete('/api/dog', (req, res) => {
  Dog.dequeue();
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
