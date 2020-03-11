/*created by Syeda Quratulain Asad*/


var locate = require('../specs/locator.js');

const sqlConnect = function() {

  this.connectDB = () => {
    //Import mysql
    var mysql = require("mysql")

    // Creation of connection with database
    this.connection = mysql.createConnection({
      host: "localhost",
      port: "3306",
      user: "root",
      password: "root",
      database: "googleinfo"
    })

    //Connection with your database
    this.connection.connect()
  }


  this.queryExecution = successHandler => {
    //Execute your query
    var sql = 'INSERT INTO test_table (id, title, results, seconds) values (1)';
  }
}

module.exports = new sqlConnect()
