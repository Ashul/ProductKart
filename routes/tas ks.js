var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://anshull:anshul@ds147789.mlab.com:47789/mytasklist', ['tasks'])

//Get All Tasks
router.get('/tasks', function(req, res, next){
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        else{
            res.json(tasks);
        }
    });
});

//get Single task
router.get('/task/:id', function(req, res, next){
    db.tasks.findOne({_id:mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        else{
            res.json(task);
        }
    });
});

//Save Data
router.post('/task', function(req, res, next){
    var task = req.body;
    if(!task.title || !(task.isDone + '')){
        res.status(400);
        res.json({
           "error":"Bad Data" 
        });
    }else{
        db.task.save('task', function(err, task){
            if(err){
                res.send(err);
            }
                res.json(task);
             });
            }
});

//Delete Tasks
router.delete('/task', function(req, res, next){
    db.task.remove({_id:mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        else{
            res.json(task);
        }
    });
});

//Update tasks
router.put('/task', function(req, res, next){
    var task = req.body;
    var updTask = {};
    if(task.isDone){
        updTask.isDone = task.isDone;
    }
    if(task.title){
        updTask.title = task.title;
    }
    if(!updTask){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    }
    else{
      db.task.update({_id:mongojs.ObjectId(req.params.id)},updTask, {}, function(err, task){
          if(err){
              res.send(err);
          }
              res.json(task);
      });  
    }
});



module.exports = router;