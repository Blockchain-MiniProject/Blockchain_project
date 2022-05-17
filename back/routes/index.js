import express from "express";
import * as MainController from "../controllers/main.controller.js"
import * as WalletController from "../controllers/wallet.controller.js"

const router = express.Router();

router.get('/', (req, res) => {
    res.send('back data 보내기 성공')
})

router.get("/blocks", MainController.getBlock)
router.post("/addPeer", MainController.addPeer)
router.post("/mineBlock", MainController.mineBlock)

router.post("/createUser",WalletController.createUser)
router.get("/loginGet", WalletController.loginClick)
router.get("/myInfo", WalletController.myInfo)


export default router;