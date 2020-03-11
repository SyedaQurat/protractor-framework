describe('Scenario: Google search', function () {

    var sql = require('../specs/dbConnection');
    var logger = require('../specs/log.js')("Successful database search");


    fit('It should within database ', function () {

        sql.connectDB();
        logger.logLevelInfo("connectDB")

        sql.queryExecution();
        logger.logLevelInfo("queryExecution")

    });

});
