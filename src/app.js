const express = require('express');
const app = express();


// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers','Origin,Content-Type,X-Requested-With,Accept,Authorization');
  next();
}

app.use(allowCrossDomain);
app.use(express.json());

// Routes
app.use(require('./routes'));


// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Servidor en el puerto ${app.get('port')}`);
});
