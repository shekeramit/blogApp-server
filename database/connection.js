const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blogs'
})
db.connect((err)=>{
    if(err){
        console.log("error")
    }
    else{
        console.log("db connected")
    }
});
module.exports = db;