eg: // My microservice!
var express = require('express');
var request = require('request');
var mysql = require('mysql');
var connection = connectToDatabase('129.157.179.180', 'Captain', 'welcome1', 'deathstar');

var app = express();

app.use(express.static('public'));
console.log('Exact name: ' + process.env.ORA_INSTANCE_NAME);
runGetRequest();
runGetRequest1();
runGetRequest2();
runGetRequest3();
runGetRequest4();
runGetRequest5();
runGetRequest6();
runGetRequest7();
runGetRequest8();
runGetRequest9();
//runDatabaseQuery();

// Does a GET request to ip.jsontest.com
function runGetRequest() {
    
    //sample URL.
    var url = "http://129.157.179.180:3000/fighters/45/0/green/brit642";
    request(url, function(error, response, body) {
        if(!error) {
            console.log(body);
        } else {
            console.log(error);
        }
    });
};

function runGetRequest1() {
    
    //sample URL.
    var url = "http://129.157.179.180:3000/fighters/45/1/green/brit642";
    request(url, function(error, response, body) {
        if(!error) {
            console.log(body);
        } else {
            console.log(error);
        }
    });
};

function runGetRequest2() {
    
    //sample URL.
    var url = "http://129.157.179.180:3000/fighters/45/2/green/brit642";
    request(url, function(error, response, body) {
        if(!error) {
            console.log(body);
        } else {
            console.log(error);
        }
    });
};

function runGetRequest3() {
    
    //sample URL.
    var url = "http://129.157.179.180:3000/fighters/45/3/green/brit642";
    request(url, function(error, response, body) {
        if(!error) {
            console.log(body);
        } else {
            console.log(error);
        }
    });
};

function runGetRequest4() {
    
    //sample URL.
    var url = "http://129.157.179.180:3000/fighters/45/4/green/brit642";
    request(url, function(error, response, body) {
        if(!error) {
            console.log(body);
        } else {
            console.log(error);
        }
    });
};

function runGetRequest5() {
    
    //sample URL.
    var url = "http://129.157.179.180:3000/fighters/45/5/green/brit642";
    request(url, function(error, response, body) {
        if(!error) {
            console.log(body);
        } else {
            console.log(error);
        }
    });
};

function runGetRequest6() {
    
    //sample URL.
    var url = "http://129.157.179.180:3000/fighters/45/6/green/brit642";
    request(url, function(error, response, body) {
        if(!error) {
            console.log(body);
        } else {
            console.log(error);
        }
    });
};

function runGetRequest7() {
    
    //sample URL.
    var url = "http://129.157.179.180:3000/fighters/45/7/green/brit642";
    request(url, function(error, response, body) {
        if(!error) {
            console.log(body);
        } else {
            console.log(error);
        }
    });
};

function runGetRequest8() {
    
    //sample URL.
    var url = "http://129.157.179.180:3000/fighters/45/8/green/brit642";
    request(url, function(error, response, body) {
        if(!error) {
            console.log(body);
        } else {
            console.log(error);
        }
    });
};

function runGetRequest9() {
    
    //sample URL.
    var url = "http://129.157.179.180:3000/fighters/45/9/green/brit642";
    request(url, function(error, response, body) {
        if(!error) {
            console.log(body);
        } else {
            console.log(error);
        }
    });
};


//Executes a SQL query
function runDatabaseQuery() {
    connection.query("SELECT * FROM SampleTable", function(error, rows, fields) {
        if(!error) {
            console.log(rows);
        } else {
            console.log(error);
        }
    });
};

// Returns a connection object to the database.
 function connectToDatabase(host, user, password, database) {
     var connectionJson = {
         host: "129.157.179.180",
         user: "Captain",
         password: "welcome1",
         database: "deathstar",
         timezone: 'utc'
     };
     return mysql.createConnection(connectionJson);
};

module.exports = app;
