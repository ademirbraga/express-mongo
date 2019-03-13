# NodeJS/Express + MongoDB

This is an REST API using the NodeJS Express Framework and MongoDB

### Tech
This API uses a number of open source projects to work properly:

* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [Mongoose] - Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js
* [Mocha] - Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser
* [Chai] - Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework
* [SuperTest] - Supertest is a library made specifically for testing nodejs http servers, and tape is an assertion library that we'll use to setup our testing structure
* [nodemon] - Nodemon is a utility that will monitor for any changes in your source and automatically restart your server

### Installation

This API requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd express-mongo
$ npm install -d
$ npm start
```

### Docker
This API is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd express-mongo
docker build -t ademirbraga/express-mongo.
```
This will create the express-mongo image and pull in the necessary dependencies. 

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart="always" <youruser>/express-mongo
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:3000
```

