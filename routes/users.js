var express = require('express');

const db = require('../models');


var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.api.findAll({ limit: 10 }).then(function(rows) {
        res.render('user', { rows: rows });
    });
});

module.exports = router;
