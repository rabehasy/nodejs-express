var express = require('express');

const db = require('../param/models');


var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.api.findAll({ limit: 10 }).then( rows => {
        res.render('user', { rows: rows });
    });
});

module.exports = router;
