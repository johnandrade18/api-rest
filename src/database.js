const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'bsyzll8pch6ecobdlisd-mysql.services.clever-cloud.com',
    user: 'ufkpvsur3zxvoymb',
    password: 'LCuKKENm8oxiYjh05Gw2',
    database: 'bsyzll8pch6ecobdlisd',
    multipleStatements: true
  });

  mysqlConnection.connect(function (error) {
    if (error) {
      console.error(error);
      return;
    } else {
      console.log('base de datos conectada');
    }
  });
  
  module.exports = mysqlConnection;
  