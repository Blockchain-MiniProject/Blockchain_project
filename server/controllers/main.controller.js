import axios from "axios";

export const addPeer = (req,res) => {
    console.log(req.body.peer);
    const ip = `ws://${req.body.peer}:3010`
    console.log(ip)
    // axios.post("http://localhost:3010/addPeer",ip)
    res.send("peer연결 완료");
}


export const getBlock = async (req,res) => {
    console.log("trying to getBlock");
    // blockchain에서 blocks[] 받아와서 DB에 넣고 프론트에 던져주자
    const result = await axios.get("http://localhost:3010/blocks")
    res.send(result.data)
}
