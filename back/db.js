import mysql from"mysql2/promise"; 

const pool = mysql.createPool({
    host:"34.64.165.60", //"localhost"
    port:3306,
    user:"sungjin",
    password:"1234",
    database:"wallet"
});

export default pool;