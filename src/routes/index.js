const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Amo Spa API - Develop by Webfeat Team');
});

module.exports = router;