import mysql from"mysql2/promise"; // 이렇게 써줘야 promise로 반환한다

export default mysql.createPool({
    host:"127.0.0.1", //"localhost"
    port:3306,
    user:"root",
    password:"1234",
    database:"test"
});