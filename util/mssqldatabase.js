const mssql = require('mssql');



const pool = new mssql.ConnectionPool({
    user: 'sa',
    password: 'Optix@123',
    server: 'PUNHJW250076L\SQLEXPRESS', 
    database: 'node-learn',
    options: {
        enableArithAbort: true,
        encrypt: true
      }
});

//mssql.ConnectionPool()

module.exports = pool;