import { Router } from 'express';
import { collection } from './../models/fb.js';
const router  = Router();

router.get('/', (req, res) => {
  let gallery = collection('gallery');

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

export default router;