/*created by Syeda Quratulain Asad*/


var locate = require('../specs/locator.js');

const sqlConnect = function() {

    this.connectDB = () => {
        console.log('abcd : ', locate.getSearchTitle());

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


    this.queryExecution = () => {
        //Execute your query
        // var sql = 'INSERT INTO test_table (id, title, results, seconds) values (1)'
        var sql = `INSERT INTO test_table (id, title, results, seconds) values (1, 'abcd', ${locate.getSearchTitle()})`
        this.connection.query(sql)
    }
}
module.exports = new sqlConnect()
