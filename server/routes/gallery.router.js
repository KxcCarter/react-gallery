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

  //   console.log(req.params);
  //   const galleryId = req.params.id;
  //   for (const galleryItem of galleryItems) {
  //     if (galleryItem.id == galleryId) {
  //       galleryItem.likes += 1;
  //     }
  //   }
  //   res.sendStatus(200);
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

module.exports = router;
