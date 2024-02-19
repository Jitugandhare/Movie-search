const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('search.html', { root: './views' });
});

router.post('/results', async (req, res) => {
    try {
      const searchTerm = req.body.searchTerm;
      const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=17a05fed`);
      const movies = response.data.Search;
      res.render('search-results', { movies }); 
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching data');
    }
  });
  


module.exports = router;
