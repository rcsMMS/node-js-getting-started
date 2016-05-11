var express = require('express');
var app = express();

var router = require(__dirname + '/models/routes.js')

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/',function(request,response) {
  var obj = {message: {name: 'Test Person',rank:'Corporal'}}

  response.send(obj)
})

app.use('/pizza',router)

pg.defaults.ssl = true;
pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});


app.listen(app.get('port'), function() {
  //routes.setup(app)
  console.log('Node app is running on port', app.get('port'));
});
