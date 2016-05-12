exports.setup = function(app,pizza) {

  // app.get('/pizza',pizza.pizzaCount);
  var db = app.get('db')

  console.log('Router DB ' + db);
  app.get('/pizza',pizza.pizzaCount);
  app.get('/pizza/:num',pizza.pizzaItem);
}
