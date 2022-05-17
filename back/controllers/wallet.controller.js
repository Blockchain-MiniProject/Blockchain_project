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
    res.send({privatekey,publickey})
    // try {
    //     const sql = `INSERT INTO userinfo('email','password','address','balance') VALUES("id","pwd","address",0);`
    //     const [result] = await pool.query(sql); //await 안하면 pending
    //     console.log(result);
    // }
    // catch (e) {
    //     throw e;
    // }
}
