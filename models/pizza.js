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
var model = {one:{type:'Hawaii'},two:{type:'Salami'},three:{type:'Funghi'}}

exports.pizzaCount = function(req,res) {
    var keys = []
    // console.log('Have pgclient ' + pgclient)
    for (var key in model) {
      keys.push(key)
    }

    res.send(keys);
};

exports.pizzaItem = function(req,res) {
  if (model.hasOwnProperty(req.params.num)) {
    res.send(model[req.params.num])
  }
  else {
    res.status(404)
    res.send()
  }
}

console.log('Got some pizza' + exports.pizzaCount);