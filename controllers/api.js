var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router = express.Router();
var moment = require('moment');
var models = require('../models');
var multer = require('multer');
var customer = models.tbl_customer;







//insert method call
router.post('/insert', jsonParser, function(req, res) {
    console.log(req.body)
    customer.create(req.body).then(function(results) {
        if (results) {
            res.json({ success: true, message: "product Inserted" });
        } else {
            res.json({ success: false, message: "product not Inserted" });
        }
    }).catch(function(err) {
        console.log(err)
        res.json({ success: false, message: "product not Inserted" });
    });



})
router.get('/details/:id', function(req, res) {

    customer.findOne({
        where: {
            user_id: req.params.id
        }
    }).then(function(results) {
        if (results) {
            res.json(results);
        } else {
            res.json(null);
        }
    }).catch(function(err) {
        console.error('[' + moment().format('DD/MM/YYYY hh:mm:ss a') + '] ' + err.stack || err.message);
        res.json({
            success: false,
            message: 'Record(s) not found.'
        });
    });
});

router.get('/readAll', function(req, res) {


    customer.findAll({
        where: {

        }



    }).then(function(results) {
        if (results) {
            res.json(results);
        } else {
            res.json([]);
        }
    }).catch(function(err) {
        console.error('[' + moment().format('DD/MM/YYYY hh:mm:ss a') + '] ' + err.stack || err.message);
        res.json({
            success: false,
            message: 'Record(s) not found.'
        });
    });
});



//update method call
router.put('/update/:user_id', jsonParser, function(req, res) {
    console.log(req.body)
    customer.update(req.body, { where: { user_id: req.params.user_id } }).then(function(results) {
        if (results) {
            res.json({ success: true, message: "product updated" });
        } else {
            res.json({ success: false, message: "product is not updated" });
        }
    }).catch(function(err) {
        console.log(err)
        res.json({ success: false, message: "product is not updated" });
    });

})

//detete method call
router.delete('/delete/:user_id', jsonParser, function(req, res) {
    console.log("detail is deleted succesfully.!")

    customer.destroy({
        where: {
            user_id: req.params.user_id
        }
    }).then(function(results) {
        if (results) {
            res.json({ success: true, message: "product deleted" });
        } else {
            res.json({ success: false, message: "product is not deleted" });
        }
    }).catch(function(err) {
        console.log(err)
        res.json({ success: false, message: "product is not deleted" });
    });

})


module.exports = router;