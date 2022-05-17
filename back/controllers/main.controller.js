import axios from "axios";
import pool from "../db.js"

export const addPeer = async (req,res) => {
    console.log(req.body.peer);
    const ip = `ws://${req.body.peer}:6020`
    console.log(ip)
    const result = await axios.post("http://localhost:3010/addPeer",{data:ip})
    res.send("peer연결 완료");
}


export const getBlock = async (req,res) => {
    const result = await axios.get("http://localhost:3010/blocks")
    res.json(result.data.reverse())
}


export const mineBlock = async (req,res) => {

    const {id,address} = req.body;
    const mineResult = await axios.post("http://localhost:3010/mineBlock",{data:id})
    // block db에 { {...block}, miner:address로 저장}
    const {index, data, timestamp, hash, previousHash, difficulty, nonce} = mineResult.data;
    const vars = [index, data, timestamp, hash, previousHash, difficulty, nonce, address]
    console.log(vars)

    try {
        const sql = "INSERT INTO blocks(`index`, data, timestamp, hash, previousHash, difficulty, nonce, miner) VALUES(?,?,?,?,?,?,?,?);"
        const [result] = await pool.query(sql,vars);
        console.log(result);
    }
    catch (e) {
        throw e;
    }

    // userinfo에서 address 일치하는 곳에 balance 50 추가

    try {
        const sql = `UPDATE userinfo SET balance=balance+50 WHERE address = "${address}";`
        const [result] = await pool.query(sql,vars);
    }
    catch (e) {
        throw e;
    }

    res.send(mineResult.data)
}