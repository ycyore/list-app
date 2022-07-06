const mysql = require('mysql2');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'risa',
  password: 'password',
  database: 'lisuto_apuri'
});

connection.connect(function(error){
  if(error)
  {
    throw error;
  }
  else
  {
    console.log('MySQL Database is connected Successfully');
  }
});

module.exports = connection;
