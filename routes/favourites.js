const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', async (req, res) => {
  try {
    const favourites = await db.query('SELECT * FROM favourites');
    res.render('favourites', { favourites });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching favourites');
  }
});

router.post('/', async (req, res) => {
  const { title, year, type, poster } = req.body;
  try {
    await db.query('INSERT INTO favourites (title, year, type, poster) VALUES (?, ?, ?, ?)', [title, year, type, poster]);
    res.redirect('/favourites');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving favourite');
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await db.query('DELETE FROM favourites WHERE id = ?', [id]);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error removing favourite');
  }
});

module.exports = router;
