const express   = require('express');
const router    = express.Router();
const db        = require('./../models/fb.js');

router.get('/', (req, res) => {
    let menuFood = db.collection('menu-food');

    let allContent = [];

    menuFood.get()
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
                "message": "Menu Food List",
                "data": allContent
            });
        })
        .catch(err => {
            res.send(`ERR ${err}`)
        })
})

module.exports = router;