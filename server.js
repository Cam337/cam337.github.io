// Node.js + Express server backend for Triton Melee Website
//
// Developers:
//   Brian Vu
//   Cameron Lee
//   Jeremy Pham
//   Jessica Lee
//
// https://github.com/Cam337/TritonMelee

// Prerequisites - first run:
//   npm install
//
// which will look in package.json and install all dependencies
// (e.g., express, firebase)
//
// To start the server, run:
//   node server.js
//
// and open the frontend webpage at http://localhost:3000/
//
//
// [optional] you can use nodemon to automatically restart your Node.js
// server whenever your backend files change. https://nodemon.io/
//
// Install globally using:
//
// sudo npm install -g nodemon
//
// and then start the server using:
//   nodemon server.js


// require dependencies
const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

// initialize app
const app = express();

// set filepath for views (templated html)
app.set('views', path.join(__dirname, '/views'));

// set template engine to 'handlebars'
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

// set file path for static files
app.use(express.static(path.join(__dirname, '/static_files/')));

// put all of your static files (e.g. CSS, JS) in static_files/
app.use(express.static('static_files'));

// HOMEPAGE
app.get('/', (req, res) => {
  console.log('GET homepage');
  res.render('homepage');
});

// start the server at URL: http://localhost:3000/
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});
