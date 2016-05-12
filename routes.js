exports.setup = function(app,pizza) {

  // app.get('/pizza',pizza.pizzaCount);
  var db = app.get('db')

  console.log('Router ' + db);
  app.get('/pizza',pizza.pizzaCount);
  app.get('/pizza/:num',pizza.pizzaItem);
}
