// app.get('/',function(req,res){
//   var pizzaCnt = {itemCount:COUNT};
//
//   var keys = []
//   // console.log('Have pgclient ' + pgclient)
//   for (var key in model) {
//     keys.push(key)
//   }
//
//   res.send(keys);
// })
//
// app.get('/:num',function(req,res){
//   if (model.hasOwnProperty(req.params.num)) {
//     res.send(model[req.params.num])
//   }
//   else {
//     res.status(404)
//   }
// })
//var model = {one:{type:'Hawaii'},two:{type:'Salami'},three:{type:'Funghi'}}

exports.pizzaCount = function(req,res,db) {
    var keys = []
    // console.log('Have pgclient ' + pgclient)
    for (var key in model) {
      keys.push(key)
    }

    db
    .query('SELECT id FROM pizza;',function(err,result){
      if(err){
        res.status = 404;
        res.send();
      }

      res.send(result.rows);
    })
    // .on('row', function(row) {
    //   console.log(JSON.stringify(row));
    // });

    // res.send(keys);
};

exports.pizzaItem = function(req,res,db) {
  if (model.hasOwnProperty(req.params.num)) {
    res.send(model[req.params.num])
  }
  else {
    res.status(404)
    res.send()
  }
}

// console.log('Got some pizza' + exports.pizzaCount);
