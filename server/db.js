import mysql from("mysql2/promise"); // 이렇게 써줘야 promise로 반환한다

const pool = mysql.createPool({
    host:"127.0.0.1", //"localhost"
    port:3306,
    user:"root",
    password:"1234",
    database:"blocks"
});


async function select() {
    try {
        const sql = `SELECT * FROM board`
        const [result] = await pool.query(sql); //await 안하면 pending
        //query getconnection 이랑 release까지 한번에
        console.log(result);
    }
    catch (e) {
        throw e;
    }
    // finally {
    //     console.log("무조건 실행");
    // }
}

module.exports = pool;