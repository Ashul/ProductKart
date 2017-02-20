var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://anshull:anshul@ds147789.mlab.com:47789/mytasklist', ['products'])

//Get All products
router.get('/products', function(req, res, next){
    db.products.find(function(err, products){
        if(err){
            res.send(err);
        }
        else{
            res.json(products);
        }
    });
});

//get Single product
router.get('/product/:id', function(req, res, next){
    db.products.findOne({_id:mongojs.ObjectId(req.params.id)}, function(err, product){
        if(err){
            res.send(err);
        }
        else{
            res.json(product);
        }
    });
});

//Save Data
router.post('/product', function(req, res, next){
    var product = req.body;
    if(!product.title || !(product.isDone + '')){
        res.status(400);
        res.json({
           "error":"Bad Data" 
        });
    }else{
        db.product.save('product', function(err, product){
            if(err){
                res.send(err);
            }
                res.json(product);
             });
            }
});

//Delete products
router.delete('/product', function(req, res, next){
    db.product.remove({_id:mongojs.ObjectId(req.params.id)}, function(err, product){
        if(err){
            res.send(err);
        }
        else{
            res.json(product);
        }
    });
});

//Update products
router.put('/product', function(req, res, next){
    var product = req.body;
    var updProduct = {};
    if(product.isDone){
        updProduct.isDone = product.isDone;
    }
    if(product.title){
        updProduct.title = product.title;
    }
    if(!updProduct){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    }
    else{
      db.product.update({_id:mongojs.ObjectId(req.params.id)},updProduct, {}, function(err, product){
          if(err){
              res.send(err);
          }
              res.json(product);
      });  
    }
});



module.exports = router;