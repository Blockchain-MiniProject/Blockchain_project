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
        const sql = `INSERT INTO userinfo(email,password,privatekey,address,balance) SELECT ?,?,?,?,0 FROM DUAL WHERE NOT EXISTS (SELECT * FROM userinfo WHERE email = '${email}') ;`
        const [result] = await pool.query(sql,[email,password,privatekey,publickey]);
        console.log(result.affectedRows) //쿼리가 영향 준 row 수
        if(result.affectedRows){
            console.log("db에 존재하지 않는 email, 가입 완료")
            res.send(true)
        }
        else{
            console.log("db에 이미 존재하는 email")
            res.send(false)
        }
    }
    catch (e) {
        throw e;
    }

    
}

export const loginClick = async (req,res) => {
    // 변수 이메일
    // console.log(req.query)
    const {email,password} = req.query

    console.log("email : ",email,"password: ",password)
    try {
        const sql = "select * from userinfo where email = ? and password = ?;"
        const [result] = await pool.query(sql,[email,password]); 
        if(result.length===0){
          res.send('error')
        }
        else{
          res.send(result[0])
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
        const iSql = `select * from userinfo where address = "${address}";`
        const [[infoResult]] = await pool.query(iSql); 

        const bSql = `select * from blocks where miner = "${address}";`
        const [blockResult] = await pool.query(bSql)


        res.send([infoResult,blockResult])
    }
    catch (e) {
        throw e;
    }
  }

