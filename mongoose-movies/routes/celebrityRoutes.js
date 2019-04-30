const express = require('express');
const router = express.Router();
const Celebrity = require('../models/CelebrityModel');

//*************** SEE ALL CELEBRITIES ****************//

router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then((allCelebritiesFromDB) => res.render('celebrities/index', {allCelebritiesFromDB}))
    .catch((error) => {console.log(error)});
});


//*************** GET DETAILS FOR ONE CELEB ****************//

router.get('/:id', (req, res, next) => {
  console.log(req.params.id);
  Celebrity.findById(req.params.id)
    .then( celeb => res.render('celebrities/show', {celeb}))
    .catch( (err) => console.log(err));
});

// QUESTION 1! WHY DOES THE CODE NOT WORK WHEN WE DECONSTRUCT REQ.PARAMS.ID? 

// router.get('/:id', (req, res, next) => {
//   console.log(req.params.id)
//   const { celebId } = req.params.id;
//   Celebrity.findById(celebId)
//     .then( celeb => res.render('celebrities/show', {celeb}))
//     .catch( (err) => console.log(err));
// })

//*************** GET FORM TO ADD NEW CELEB ****************//

// QUESTION 2! WHY WON'T THIS WORK!? I THINK IT IS A PROBLEM WITH THE PATH BECAUSE I TRIED TO CONSOLE.LOG A MESSAGE AND IT DOESN'T WORK.

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

//*************** ADD NEW CELEBRITY ****************//

router.post('/celebrities', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({name, occupation, catchPhrase});
  newCelebrity.save()
    .then(celebrity => res.redirect('/celebrities'))
    .catch(error => res.redirect('/new'));
});

module.exports = router;