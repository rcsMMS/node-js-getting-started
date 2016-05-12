var express = require('express');
var app = express();
var pg = require('pg');
var controllers = require('./models')
var routes = require('./routes')

routes.setup(app,controllers.pizza);

// require('./models')

pg.defaults.ssl = true;
pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err;

  app.set('db',client);
  var db = app.get('db')
  console.log('App DB ' + db);
  console.log('Connected to postgres! Getting schemas...');
});

app.set('port', (process.env.PORT || 5000));

app.get('/',function(req,res) {
  res.send('Hi there!')
})

app.listen(app.get('port'), function() {
  //routes.setup(app)
  console.log('Node app is running on port', app.get('port'));
});
