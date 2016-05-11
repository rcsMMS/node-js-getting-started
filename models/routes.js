
var express = require('express');
var router = express.Router();
const COUNT = 5

var model = {one:{type:'Hawaii'},two:{type:'Salami'},three:{type:'Funghi'}}

router.get('/',function(req,res){
  var pizzaCnt = {itemCount:COUNT};

  var keys = []
  console.log('Have pgclient ' + pgclient)
  for (var key in model) {
    keys.push(key)
  }

  res.send(keys);
})

router.get('/:num',function(req,res){
  if (model.hasOwnProperty(req.params.num)) {
    res.send(model[req.params.num])
  }
  else {
    res.status(404)
  }
})

module.exports = router
