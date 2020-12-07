const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "ixnzh1cxch6rtdrx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "k8e9jswbnuj24ewg",
    password: "fkvm76yrdsfsevts",
    database: "n3byl7jtrabijay4"
});

module.exports = pool;
