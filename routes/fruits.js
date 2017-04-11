var express = require('express');
var router = express.Router();
var knex = require('../knex')

/* GET home page. */
router.get('/', function(req, res, next) {

  knex('fruits')
    .then((fruitsFromKnex) => {
      res.render('fruits', { fruits: fruitsFromKnex });
    })
});

module.exports = router;
