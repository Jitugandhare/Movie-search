const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const searchRoute = require('./routes/search');
const favouritesRoute = require('./routes/favourites');
const mysql=require('mysql');

const app = express();
const PORT = 3000;




app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.use('/search', searchRoute);
app.use('/favourites', favouritesRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
