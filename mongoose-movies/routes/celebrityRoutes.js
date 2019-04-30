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
  console.log(req.params.id);
  Celebrity.findById(req.params.id)
    .then( celeb => res.render('celebrities/show', {celeb}))
    .catch( (err) => console.log(err));
});

// QUESTION! WHY DOES THE CODE NOT WORK WHEN WE DECONSTRUCT REQ.PARAMS.ID? 
// router.get('/:id', (req, res, next) => {
//   console.log(req.params.id)
//   const { celebId } = req.params.id;
//   Celebrity.findById(celebId)
//     .then( celeb => res.render('celebrities/show', {celeb}))
//     .catch( (err) => console.log(err));
// })




router.get('/new', (req, res, next) => {
  res.render('/celebrities/new');
});

router.post('/celebrities', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({name, occupation, catchPhrase});
  newCelebrity.save()
    .then(celebrity => res.redirect('/celebrities'))
    .catch(error => res.redirect('/new'));
});

module.exports = router;