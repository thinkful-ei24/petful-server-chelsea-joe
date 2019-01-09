# Petdrop API

The petdrop api is quite simple, powered by a queue data structure and the petfinder API

# Instructions

## GET

/api/cat & /api/dog

returns a random call by making a fetch request to the petfinder API https://www.petfinder.com/developers/api-key , it then enqueues the pet into the dog or cat queue and shows you the first pet in line.

## DELETE

/api/cat & /api/dog

dequeues the first pet in line and then goes on place the following pet as the first in the queue

# API

All of the pet information is collected by using the petfinder API

https://www.petfinder.com/developers/api-key

# Stack

* Nodejs
* MongoDB
* Mongoose
* Express
