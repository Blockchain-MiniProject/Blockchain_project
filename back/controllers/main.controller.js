import axios from "axios";

export const addPeer = async (req,res) => {
    console.log(req.body.peer);
    const ip = `ws://${req.body.peer}:6020`
    console.log(ip)
    const result = await axios.post("http://localhost:3010/addPeer",{data:ip})
    res.send("peer연결 완료");
}


export const getBlock = async (req,res) => {
    console.log("trying to getBlock");
    const result = await axios.get("http://localhost:3010/blocks")
    res.send(result.data)
}


export const mineBlock = async (req,res) => {
    const result = await axios.post("http://localhost:3010/mineBlock",{data:"sieun"})
    res.send(result.data)
}