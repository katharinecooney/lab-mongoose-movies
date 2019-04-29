const express = require('express');
const router = express.Router();
const Celebrity = require('../models/CelebrityModel');

router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then((allCelebritiesFromDB) => res.render('celebrities/index', {allCelebritiesFromDB}))
    .catch((error) => {console.log(error)});
});

// 'ID details'
router.get('/:id', (req, res, next) => {
  const { celebId } = req.params;

  Celebrity.findById(celebId)

    .then( (celeb) => res.render('celebrities/show', {celeb}))
    .catch( (err) => console.log(err));
})

module.exports = router;