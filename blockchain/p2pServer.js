import WebSocket from 'ws'
import { WebSocketServer } from 'ws'; 
import { getBlocks, getLatestBlock, createBlock, addblock, replaceBlockchain } from './block.js'

const MessageType = {

    QUERY_LATEST : 0,
    QUERY_ALL : 1,
    RESPONSE_BLOCKCHAIN : 2
}

const sockets = []; 

const getPeers = () => {
    return sockets;
}

const initP2PServer = (p2pPort) => {
    const server = new WebSocketServer({port:p2pPort})
    server.on('connection', (ws) => {
        initConnection(ws); 
    })
    console.log('listening P2PServer Port : ', p2pPort);
}

const initConnection = (ws) => {
    sockets.push(ws);
    initMessageHandler(ws);
    write(ws, queryAllMessage());    
}

const connectionToPeer = (newPeer) => { 
    console.log(newPeer)
    const ws = new WebSocket(newPeer) 
    ws.on('open', () => { initConnection(ws); console.log('Connect peer : ', newPeer ); })
    ws.on('error', () => { console.log('Fail to Connection peer : ', newPeer); })    
}

const initMessageHandler = (ws) => {
    ws.on('message', (data) => {
        const message = JSON.parse(data);

        switch(message.type)
        {            
            case MessageType.QUERY_LATEST:
                break;
            case MessageType.QUERY_ALL:
                write(ws, responseAllMessage());
                break;                
            case MessageType.RESPONSE_BLOCKCHAIN:
                console.log(ws._socket.remoteAddress, ' : ', message.data);
                handleBlockchainResponse(message.data);
                break;
        }
    })
}

const handleBlockchainResponse = (receiveBlockchain) => {
    const newBlocks = JSON.parse(receiveBlockchain)
    const latestNewBlock = newBlocks[newBlocks.length - 1];
    console.log('받아온 마지막 블록 : ', latestNewBlock)
    const latestMyBlock = getLatestBlock();    
    console.log('내 마지막 블록 : ', latestMyBlock)
    
    
    if(latestNewBlock.index > latestMyBlock.index)
    {    
        if (latestNewBlock.previousHash === latestMyBlock.hash)
        {
            if (addblock(latestNewBlock, latestMyBlock)) 
            {   
                broadcasting(responseLatestMessage());
            } 
        }
        
        else if(newBlocks.length === 1)
        {
            broadcasting(queryAllMessage());
        }
        else
        {
            replaceBlockchain(newBlocks);            
        }        
    }    
}

const queryLatestMessage = () => {
    return ({ 
            "type" : MessageType.QUERY_LATEST, 
            "data" : null })
}

const queryAllMessage = () => {
    return ({ 
            "type" : MessageType.QUERY_ALL, 
            "data" : null })
}

const responseLatestMessage = () => {
    return ({
            "type" : MessageType.RESPONSE_BLOCKCHAIN, 
            "data" : JSON.stringify([getLatestBlock()]) }) 
}

const responseAllMessage = () => {
    return ({
            "type" : MessageType.RESPONSE_BLOCKCHAIN, 
            "data" : JSON.stringify(getBlocks()) })
}

const write = (ws, message) => {
    console.log('write()', ws._socket.remoteAddress, ' : ', message);
    ws.send(JSON.stringify(message)) 
}


const broadcasting = (message) => {
    sockets.forEach( (socket) => {
        write(socket, message);
    });
}

const mineBlock = (blockdata) => {
    const newBlock = createBlock(blockdata);
    if(addblock(newBlock, getLatestBlock()))
    {
        broadcasting(responseLatestMessage());
    }
    return "채굴됐어용"
}

export { initP2PServer, connectionToPeer, getPeers, broadcasting, mineBlock}
