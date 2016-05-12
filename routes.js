exports.setup = function(app,pizza) {

  app.get('/pizza',pizza.pizzaCount);
  app.get('/pizza/:num',pizza.pizzaItem);
}
