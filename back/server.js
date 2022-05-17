import express from "express";
const app = express();
import router from "./routes/index.js"
import cors from "cors"
import axios from "axios"

axios.post("http://localhost:3500/addPeer",{peer:"49.50.172.129"})

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(router)

app.listen(3500,console.log("server listening to http://localhost:3500"))
