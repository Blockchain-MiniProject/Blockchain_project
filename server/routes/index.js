import express from "express";
import * as MainController from "../controllers/main.controller.js"

const router = express.Router();

router.get('/', (req, res) => {
    res.send('back data 보내기 성공')
})

router.get("/blocks", MainController.getBlock)
router.post("/blocks", MainController.getBlock)

router.post("/addPeer", MainController.addPeer)

export default router;