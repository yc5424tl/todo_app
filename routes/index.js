let express = require('express');
let router = express.Router();
let Task = require('../models/task');

router.get('/', function(req, res, next) {
  Task.find({completed: false})
    .then((docs) => {
      res.render('index', {title: 'Incomplete tasks', tasks: docs});
    })
    .catch((err) => {
      next(err);
    });
});


router.post('/add', function(req, res, next) {

  if(req.body.text) {
    let t = new Task({text: req.body.text, completed: false});
    t.save().then((newTask) => {
      console.log('The new task created is ', newTask);
      res.redirect('/');
    })
      .catch((err) => {
      next(err);
    });
  }
  else {
    res.redirect('/');
  }
});

router.post('/done', function(req, res, next) {

  Task.findByIdAndUpdate( req.body._id, {completed: true})
    .then( (originalTask) => {
      if (originalTask) {
        res.redirect('/');
      } else {
        let err = new Error('Not Found');
        err.status = 404;
        next(err);
      }
    })
    .catch( (err) => {
      next(err);
    });
});

router.get('/completed', function(req, res, next){
  Task.find( {completed:true} )
    .then( (docs) => {
      res.render('completed_tasks', {tasks:docs});
    }).catch( (err) => {
      next(err);
    });
});

module.exports = router;
