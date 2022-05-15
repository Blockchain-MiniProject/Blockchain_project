import express from 'express'; 
import bodyParser from 'body-parser';
import cors from 'cors';
import { getBlocks, createBlock } from './block.js';
import { connectionToPeer, getPeers, mineBlock } from './p2pServer.js';

// 초기화 함수
const initHttpServer = (myHttpPoryt) => {
    const app = express();    
    app.use(express.urlencoded({extended:true}))
    app.use(bodyParser.json());
    app.use(cors({
        origin:true,
        credentials:true
    }))

    app.get('/', (req, res) => {        
        res.send('Hello, World!');
    })

    app.get('/blocks', (req, res) => {
        res.send(getBlocks());
    })

    app.post('/createblock', (req, res) => {
        res.send(createBlock(req.body.data));        
    })
    
    app.post('/mineBlock', async (req, res) => {
        for(let i=0; i<100; i++){
            const minedBlock = await mineBlock(req.body.data)
            console.log(minedBlock,i)
        }
        res.send("10번 채굴됨?")
    })

    app.post('/peers', (req, res) => {
        res.send(getPeers())
    })

    app.post('/addPeer', (req, res) => {
        console.log('/addPeer : ', req.body.message);
        res.send(connectionToPeer(req.body.data));
    })

    app.post('/allblocks', (req, res) => {
        res.send(queryAllMessage(req.body.data))
    })

    app.use('/latestblock', (req, res) => {
        res.send(queryLatestMessage(req.body.data))
    })

    app.listen(myHttpPoryt, () => {
        console.log('listening httpServer Port : ', myHttpPoryt);
    })
}

export { initHttpServer }