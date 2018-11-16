'use strict';
const Queue = require('./queue');

const Cat = new Queue();

Cat.enqueue({
  imageURL:
    'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  imageDescription:
    'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
});
Cat.enqueue(
  {
    imageURL:
      'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription:
      'Orange cat that likes lasagna',
    name: 'Garfield',
    sex: 'Male',
    age: 27,
    breed: 'Orange Cat',
    story: 'Owner got tired of his eating habits'
  });
Cat.enqueue({
  imageURL:
    'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  imageDescription:
    'White siamese with good business taste',
  name: 'Princess Twinkle Toes',
  sex: 'Female',
  age: 1,
  breed: 'Siamese',
  story: 'Ex strip club owner'
});


module.exports = Cat;
