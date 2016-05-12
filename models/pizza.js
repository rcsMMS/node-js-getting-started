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
    // var keys = []
    // console.log('Have pgclient ' + pgclient)
    // for (var key in model) {
    //   keys.push(key)
    // }

    db
    .query('SELECT id FROM pizza;',function(err,result){
      if(err){
        res.status = 404;
        res.send();
      }

      var result = result.rows.map(function(value) {
          return value['id'];
      })

      res.send(result);
    })
    // .on('row', function(row) {
    //   console.log(JSON.stringify(row));
    // });

    // res.send(keys);
};

exports.pizzaItem = function(req,res,db) {
  // if (model.hasOwnProperty(req.params.num)) {
  //   res.send(model[req.params.num])
  // }
  // else {
  //   res.status(404)
  //   res.send()
  // }
  db
  .query('SELECT id,type,price FROM pizza WHERE id=$1;',[req.params.num],function(err,result){
    if(err){
      res.status = 404;
      res.send();
    }

    // var result = result.rows.map(function(value) {
    //     return value['id'];
    // })

    if (result.rows.length == 1) {
      res.send(result.rows);
    }
    else {
      res.status = 404;
      res.send();
    }

  })
}

// console.log('Got some pizza' + exports.pizzaCount);
