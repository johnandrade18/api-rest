const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();


// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('app.js'));
app.use(express.json());
app.use(cors)

// Routes
app.use(require('./routes'));


// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Servidor en el puerto ${app.get('port')}`);
});


