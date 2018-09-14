const express = require('express');
const router = express.Router();
const db = require('./../models/fb');

router.get('/', (req, res) => {

  const content = db.collection('content');
  
  let allContent = [];

  content.get()
    .then(snapshot => {
      checkData(snapshot);
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

  function checkData(data) {
    if(data.empty) {
      return res.status(404).send({
        "status": 404,
        "status_respond": "404 Not Found",
        "message": "Data not found"
      })        
    }
  }

});

module.exports = router;