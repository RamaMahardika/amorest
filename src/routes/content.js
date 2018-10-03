import { Router } from 'express';
import { collection } from './../models/fb';
const router = Router();

router.get('/', (req, res) => {

  const content = collection('content');

  let allContent = [];

  content.get()
    .then(snapshot => {
      if (snapshot.empty) {
        return res.status(404).send({
          "status": 404,
          "status_respond": "404 Not Found",
          "message": "Data not found"
        })
      }
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

export default router;