var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://anshull:anshul@ds147789.mlab.com:47789/mytasklist', ['productdetails'])

//Get All products
router.get('/productdetails', function(req, res, next){
    db.productdetails.find(function(err, Heroes){
        if(err){
            res.send(err);
        }
        else{
            res.json(Heroes);
        }
    });
});



module.exports = router;