var express = require('express');
var router = express.Router();

const celebrityRouter = require('./celebrityRoutes');
router.use('/celebrities', celebrityRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});





module.exports = router;
