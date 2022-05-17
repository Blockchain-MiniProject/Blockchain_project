import mysql from"mysql2/promise"; 

const pool = mysql.createPool({
    host:"49.50.172.129", //"localhost"
    port:3306,
    user:"root",
    password:"Sun13",
    database:"wallet"
});

export default pool;