const express = require('express');
const router  = express.Router();
const db      = require('./../models/fb.js');

router.get('/', (req, res) => {
  let gallery = db.collection('gallery');

  let allContent = [];

  gallery.get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        allContent.push({
          docId: doc.id,
          data: doc.data()
        });
      });
      res.status(200).send({
        "status": 200,
        "status_respond": "ok",
        "message": "gallery",
        "data": allContent
      });
    })
    .catch(err => {
      res.send(`ERR ${err}`);
    });
});

module.exports = router;