const express=require('express')
const router=express.Router()

let mysql = require('mysql');
let config = require('./config.js');

let connection = mysql.createConnection(config);

var sql = "INSERT INTO user (user_id, phone_num, first_name, last_name, pass_salt) VALUES ?";


router.post("/",(req,res)=>{
    res.send("User route is displaying data")
    const body = req.body
    let arr = [
        [11, body['phoneNum'], body['firstName'], body['lastName'], 'abefg']
    ]
    connection.query(sql, [arr], function(err) {
        if (err) throw err;
        connection.end();
    });
})
module.exports=router;