const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
  const query = `UPDATE gallery SET likes = likes + 1 WHERE id = $1;`;
  const id = req.params.id;

  pool
    .query(query, [id])
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
  const query = `SELECT * FROM gallery ORDER BY id ASC;`;

  pool
    .query(query)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
}); // END GET Route

// POST route
router.post('/', (req, res) => {
  const query = `INSERT INTO gallery (path, description) VALUES ($1, $2);`;
  const path = req.body.path;
  const description = req.body.description;

  pool
    .query(query, [path, description])
    .then((dbRes) => {
      console.log('in POST:', dbRes);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('POST error:', err);
      res.sendStatus(500);
    });
}); // END POST route

// DELETE route
router.delete('/:id', (req, res) => {
  const query = `DELETE FROM gallery WHERE id = $1;`;
  const id = req.params.id;

  pool
    .query(query, [id])
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('DELETE error:', err);
      res.sendStatus(500);
    });
});

module.exports = router;
