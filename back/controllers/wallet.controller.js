import pool from "../db.js"
import ecdsa from 'elliptic'

const ec = new ecdsa.ec('secp256k1');

const createPrivateKey = () => {
    const keyPair = ec.genKeyPair();
    const privateKey = keyPair.getPrivate();
    
    return privateKey.toString(16)
}

const createPublickey  = (privateKey) => {
    const publicKey = ec.keyFromPrivate(privateKey, 'hex')  
    return publicKey.getPublic().encode('hex')
}


export const createUser = async (req,res) => {
    const {email, password} = req.body;
    console.log("email : ",email,"password: ",password)
    const privatekey = createPrivateKey();
    const publickey = createPublickey(privatekey);
    console.log(publickey);
    try {
        const sql = "INSERT INTO userinfo(email,password,privatekey,address,balance) VALUES(?,?,?,?,0);"
        const [result] = await pool.query(sql,[email,password,privatekey,publickey]);
        console.log(result);    
    }
    catch (e) {
        throw e;
    }
    res.send("회원가입 완료")

    
}

// 형식이 백에서 쓰는 코드다
// 
export const loginClick = async (req,res) => {
    // 변수 이메일
    // console.log(req.query)
    const {email,password} = req.query

    console.log("email : ",email,"password: ",password)
    // console.log("email : ",email,"password: ",pwd)
    try {
        const sql = "select * from userinfo where email = ? and password = ?;"
        const [result] = await pool.query(sql,[email,password]); 
        if(result.length===0){
        //   console.log("이메일 비밀번호 불일치")
          // 메세지를보
          res.send('er')
        }
        else{
          res.send(result[0].address)
        }
    }
    catch (e) {
        throw e;
    }
  }

  export const myInfo = async (req,res) => {
    const {address} = req.query

    console.log("address : ",address)
    try {
        const sql = `select * from userinfo where address = "${address}";`
        const [[result]] = await pool.query(sql); 
        res.send(result)
    }
    catch (e) {
        throw e;
    }
  }

