import axios from "axios";

export const addPeer = (req,res) => {
    console.log(req.body);
    // console.log(req.body)
    // axios.post()
    res.send("peer연결 완료");
}


export const getBlock = (req,res) => {
    console.log("trying to getBlock");
    // blockchain에서 blocks[] 받아와서 DB에 넣고 프론트에 던져주자
    res.send("db에 넣기 완료")
}
