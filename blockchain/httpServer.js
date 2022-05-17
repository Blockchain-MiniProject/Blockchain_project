import express from 'express'; 
import bodyParser from 'body-parser';
import cors from 'cors';
import { getBlocks, createBlock } from './block.js';
import { connectionToPeer, getPeers, mineBlock, initConnection } from './p2pServer.js';

// 초기화 함수
const initHttpServer = (myHttpPort) => {
    const app = express();    
    app.use(express.urlencoded({extended:true}))
    app.use(bodyParser.json());
    app.use(cors({
        origin:true,
        credentials:true
    }))

    app.get('/', (req, res) => {        
        res.send('Hello, World!');
        // res.send(connectionToPeer(req.body.data));
    })

    app.get('/blocks', (req, res) => {
        res.send(getBlocks());
    })

    app.post('/createblock', (req, res) => {
        res.send(createBlock(req.body.data));        
    })
    
    app.post('/mineBlock', (req, res) => {
        res.send(mineBlock(req.body.data));
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

    app.listen(myHttpPort, () => {
        console.log('listening httpServer Port : ', myHttpPort);
    })
}

export { initHttpServer }