const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const searchRoute = require('./routes/search');
const favouritesRoute = require('./routes/favourites');

const app = express();
const PORT =  3000;

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/search', searchRoute);
app.use('/favourites', favouritesRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
