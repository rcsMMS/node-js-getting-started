exports.setup = function(app,pizza) {

  // app.get('/pizza',pizza.pizzaCount);
  app.get('/pizza',function(req,res) {
    var db = app.get('db')
    console.log('Router DB' + db);
    pizza.pizzaCnt(req,res);
  })
  app.get('/pizza/:num',function(req,res){
    var db = app.get('db')
    console.log('Router DB' + db);
    pizza.pizzaItem(req,res);
  });
}
