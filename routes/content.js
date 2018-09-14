const express = require('express');
const router = express.Router();
const db = require('./../models/fb');

const content = db.collection('content');

router.get('/', (req, res) => {
  let allContent = [];
  content.get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        allContent.push({
          docId: doc.id,
          data: doc.data()
        });
      });
      res.status(200).send({
        "status": 200,
        "status_respond": "Ok",
        "message": "Content List",
        "data": allContent
      });
    })
    .catch(err => {
      res.send(`ERR ${err}`);
    });  
});

module.exports = router;