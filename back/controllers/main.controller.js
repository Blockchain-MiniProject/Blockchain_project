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
    // console.log("trying to getBlock");
    const result = await axios.get("http://localhost:3010/blocks")
    res.json(result.data.reverse())
}


export const mineBlock = async (req,res) => {
    const address = req.body.address;
    // const result = await axios.post("http://localhost:3010/mineBlock",{data:address})
    const mineResult = await axios.post("http://localhost:3010/mineBlock",{data:"sieun"})
    // block db에 { {...block}, miner:address로 저장}
    const {index, data, timestamp, hash, previousHash, difficulty, nonce} = mineResult.data;
    const vars = [index, data, timestamp, hash, previousHash, difficulty, nonce]
    console.log(vars)

    try {
        const sql = "INSERT INTO blocks(`index`, data, timestamp, hash, previousHash, difficulty, nonce, miner) VALUES(?,?,?,?,?,?,?,'asdsad');"
        const [result] = await pool.query(sql,vars);
        console.log(result);
    }
    catch (e) {
        throw e;
    }


    // userinfo에서 address 일치하는 곳에 balance 50 추가
    res.send(mineResult.data)
}