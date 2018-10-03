import { Router } from 'express';
import { collection } from './../models/fb.js';
const router    = Router();

router.get('/', (req, res) => {
    let menuFood = collection('menu-food');

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

export default router;