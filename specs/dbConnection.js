/*created by Syeda Quratulain Asad*/


const sqlConnect = function() {
  this.connectDB = () => {
    //Import mysql
    var mysql = require("mysql")

    // Creation of connection with database
    console.log("Creation of connection with database")

    this.connection = mysql.createConnection({
      host: "hostname",
      port: "port-number",
      user: "username",
      password: "pwd",
      database: "name of db"
    })
    //Connection with your database
    console.log("Connection with your database")
    this.connection.connect()
  }

  this.queryExecution = successHandler => {
    //Execute your query
    console.log("Execute your query")
    var sql = "The SQL Query"
    this.connection.query(sql, function(err, rows) {
      if (err) {
        console.log(err)
      } else {
        Object.keys(rows).forEach(function(items) {
          var row = rows[items]
          successHandler(row)
        })
      }
    })
  }
}

module.exports = new sqlConnect()
