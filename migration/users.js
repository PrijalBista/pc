var con = require('connection');

let sql="CREATE TABLE users(
	uid int AUTO_INCREMENT PRIMARY KEY,
    username varchar(256) NOT null,
    password varchar(512) NOt null,
    email varchar(256),
    fname varchar(100),
    lname varchar(100),
    address varchar(100),
    joined date
);"	