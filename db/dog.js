'use strict';
const Queue = require('./queue');

const DogList = [
  {
    imageURL:
      'https://imgur.com/YLkMx9d.jpg',
    imageDescription:
      'A smiling golden-brown winnie dog listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Winnie Dog',
    story: 'Owner Passed away'
  },
  {
    imageURL:
      'https://imgur.com/wJHGeYI.jpg',
    imageDescription:
      'A big gray pug',
    name: 'Poseidon',
    sex: 'Male',
    age: 3,
    breed: 'Pug',
    story: 'Ex security guard'
  },
  {
    imageURL:
      'https://imgur.com/t8JjeOn.jpg',
    imageDescription:
      'A smiling handsome overweight chihuahua',
    name: 'Honey Boo Boo',
    sex: 'Female',
    age: 2,
    breed: 'English Chihuahua',
    story: 'pageant dog'
  }
];

const Dog = new Queue();

for(let doggo of DogList) {
  Dog.enqueue(doggo);
}

module.exports = Dog;
