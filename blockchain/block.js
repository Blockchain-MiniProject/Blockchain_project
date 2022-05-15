import random from 'random';
import CryptoJS from 'crypto-js' // 모듈이 없다고 나오면 npm install 

const BLOCK_GENERATION_INTERVAL = 10;              // SECOND 
const DIFFICULTY_ADJUSTMENT_INTERVAL = 10;         // generate block count

class Block {
    constructor(index, data, timestamp, hash, previousHash, difficulty, nonce)
    {
        this.index = index;
        this.data = data;
        this.timestamp = timestamp;
        this.hash = hash;
        this.previousHash = previousHash;
        this.difficulty = difficulty;
        this.nonce = nonce;
    }
}

const getBlocks = () => {
    return blocks;
}

const getLatestBlock = () => {
    return blocks[blocks.length - 1];
}

const calculateHash = (index, data, timestamp, previousHash, difficulty, nonce) => {    
    return CryptoJS.SHA256((index + data + timestamp + previousHash + difficulty + nonce).toString()).toString();    
}

const createGenesisBlock = () => {
    const genesisBlock = new Block(0, 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks', 0 /* new Date().getTime() / 1000 */, 0, 0, 2, 0);

    genesisBlock.hash = calculateHash(genesisBlock.index, genesisBlock.data, genesisBlock.timestamp, genesisBlock.previousHash, genesisBlock.difficulty, genesisBlock.nonce);

    return genesisBlock;
}

const createBlock = (blockdata) => {
    const previousBlock = blocks[blocks.length - 1];
    const nextIndex = previousBlock.index + 1;
    const nextTimestamp = new Date().getTime() / 1000;
    const nextDifficulty = getDifficulty();
    const nextNonce = findNonce(nextIndex, blockdata, nextTimestamp, previousBlock.hash, nextDifficulty);
    const nextHash = calculateHash(nextIndex, blockdata, nextTimestamp, previousBlock.hash, nextDifficulty, nextNonce);
    
    const newBlock = new Block(nextIndex, blockdata, nextTimestamp, nextHash, previousBlock.hash, nextDifficulty, nextNonce);

    
    return newBlock;
}        

const addblock = (newBlock, previousBlock) => {
    if (isValidNewBlock(newBlock, previousBlock)) {        
        blocks.push(newBlock);
        return true;        
    }
    return false;
}


const isValidBlockStructure = (newBlock) => {
    if (typeof (newBlock.index) === 'number' 
     && typeof (newBlock.data) === 'string' 
     && typeof (newBlock.timestamp) === 'number' 
     && typeof (newBlock.hash) === 'string' 
     && typeof (newBlock.previousHash) === 'string' 
     && typeof (newBlock.difficulty) === 'number' 
     && typeof (newBlock.nonce) === 'number') {
        return true;
    }
    return false;
}

const isValidNewBlock = (newBlock, previousBlock) => {
    if (newBlock.index !== previousBlock.index + 1)
    {
        console.log('invalid index');
        return false;
    }
    else if (newBlock.previousHash !== previousBlock.hash) 
    {
        console.log('invalid previous hash');
        return false;
    }
    else if(isValidBlockStructure(newBlock) == false) {
        console.log('invalid previous structure')
        return false;
    }

    return true;
}

const hashMatchDifficulty = (hash, difficulty) => {
    const binaryHash = hexToBinary(hash);
    const requiredPrefix = '0'.repeat(difficulty);

    return binaryHash.startsWith(requiredPrefix);
}

const hexToBinary = (hex) => {
    const lookupTable = {
        '0' : '0000', '1' : '0001', '2' : '0010', '3' : '0011', 
        '4' : '0100', '5' : '0101', '6' : '0110', '7' : '0111',
        '8' : '1000', '9' : '1001', 'a' : '1010', 'b' : '1011',
        'c' : '1100', 'd' : '1101', 'e' : '1110', 'f' : '1111'
    }
    
    let binary = '';
    for(let i =0; i < hex.length; i++)
    {
        if(lookupTable[hex[i]]) {
            binary += lookupTable[hex[i]]
        }
        else {
            console.log('invalid hex : ', hex);
            return null;
        }
    }

    return binary;
} 
const isValidBlockchain = (receiveBlockchain) => {
    
    if (JSON.stringify(receiveBlockchain[0]) !== JSON.stringify(getBlocks()[0])) {
         console.log('같은 제네시스 블록이 아님');
        console.log(receiveBlockchain[0]);
        console.log('-------------------------')
        console.log(getBlocks()[0]);
        return false;
    }      
    
    for(let i = 1; i < receiveBlockchain.length; i++)
    {
        if(isValidNewBlock(receiveBlockchain[i], receiveBlockchain[i - 1]) == false)
        {
            console.log(i - 1, '번 블록과 ', i, '번 블록이 문제');
            console.log(receiveBlockchain[i - 1]);
            console.log(receiveBlockchain[i]);
            return false;
        }      
    }
    console.log('블록체인 확인 완료')
    return true;
}

const findNonce = (index, data, timestamp, previousHash, difficulty) => {
    let nonce = 0;

    while(true)
    {
        let hash = calculateHash(index, data, timestamp, previousHash, difficulty, nonce);

        if (hashMatchDifficulty(hash, difficulty)) {
            return nonce;
        }
        nonce++;
    }
    
}

const replaceBlockchain = (receiveBlockchain) => {
    console.log(receiveBlockchain);
    if (isValidBlockchain(receiveBlockchain))
    {
        
        if (receiveBlockchain.length > blocks.length)
        {
            console.log('받은 블록체인의 길이가 길다');
            blocks = receiveBlockchain;
        }
        else if(receiveBlockchain.length == blocks.length && random.boolean())
        {
            console.log('받은 블록체인의 길이가 같다');
            blocks = receiveBlockchain;            
        }
    }
    else{
        console.log('받은 블록체인에 문제가 있음');
    }
}

const getAdjustmentDifficulty = () => {    
    const prevAdjustedBlock = blocks[blocks.length - DIFFICULTY_ADJUSTMENT_INTERVAL ];
    const latestBlock = getLatestBlock();
    const elapsedTime = latestBlock.timestamp - prevAdjustedBlock.timestamp;
    const expectedTime = DIFFICULTY_ADJUSTMENT_INTERVAL * BLOCK_GENERATION_INTERVAL;

    if (elapsedTime > expectedTime * 2)
    {
        return prevAdjustedBlock.difficulty - 1;
    }
    else if (elapsedTime < expectedTime / 2)
    {        
        return prevAdjustedBlock.difficulty + 1;
    }
    else
    {
        return prevAdjustedBlock.difficulty;
    }

}

const getDifficulty = () => {
    const latestBlock = getLatestBlock();
    
    if (latestBlock.index % DIFFICULTY_ADJUSTMENT_INTERVAL === 0 &&
        latestBlock.index !==0 ) {
            return getAdjustmentDifficulty()
        }

    return latestBlock.difficulty;
}

let blocks = [createGenesisBlock()];

export { getBlocks, getLatestBlock, createBlock, addblock, isValidNewBlock, replaceBlockchain };
