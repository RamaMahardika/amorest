const express   = require('express');
const router    = express.Router();
const db        = require('./../models/fb.js');

router.get('/', (req, res) => {
    let reviews = db.collection('reviews');

    let allContent = [];

    reviews.get()
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
                "message": "Reviews List",
                "data": allContent
            });
        })
        .catch(err => {
            res.send(`ERR ${err}`)
        })
});

module.exports = router;