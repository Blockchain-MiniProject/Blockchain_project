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
    console.log("trying to getBlock");
    // blockchain에서 blocks[] 받아와서 DB에 넣고 프론트에 던져주자
    const result = await axios.get("http://localhost:3010/blocks")
    res.send(result.data)
}


export const mineBlock = async (req,res) => {
    const result = await axios.post("http://localhost:3010/mineBlock",{data:"sieun"})
    res.send(result.data)
}

export const dbBlocks = async (req,res)=> {
    try {
        const sql = `SELECT * FROM blocks`
        const [result] = await pool.query(sql); 

        res.send("dbBlock이야")
    }
    catch (e) {
        throw e;
    }
}