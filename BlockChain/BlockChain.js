const SHA256 = require('crypto-js/sha256')

const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

class Block{
     constructor(date,data,previousHash=''){
        this.date=date;
        this.data=data;
        this.previousHash=previousHash;
        this.hash=this.calculateHash();
        this.nounce=0
     }

     calculateHash(){
        return SHA256(this.index+this.previousHash+this.timestamp+JSON.stringify(this.data)+this.nounce).toString();
     }

     mineBlock(difficulty){

        console.log('Block Mining Started...')

        while(this.hash.substring(0,difficulty) !== Array(difficulty +1).join("0")){
            this.nounce++;
            this.hash=this.calculateHash()
        }

        console.log('Block Mining Completed...')
        console.log(this.hash)
     }
}

class BlockChain{
    constructor(chain){
        this.chain=chain
        this.difficulty=4
    }

    getLatestBlock(){
        return this.chain[this.chain.length-1]
    }

    addBlock(newBlock){
        newBlock.previousHash=this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty)
        this.chain.push(newBlock)
        return newBlock

    }

    isChainValid(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false
            }
            if (currentBlock.previousHash !== previousBlock.hash){
                return false
            }
        }
        return true;
    }
}

const a = new BlockChain([{
    date: '01/01/2017',
    data: 'Genisis Block',
    previousHash: '0',
    hash: 'ab556136fa63f197ecf5a14579ce562836d87241e4b8d796ec1d217507ab096d',
    nounce: 0
  }])
const b = a.addBlock(new Block(date,{data:''}))
const c = a.addBlock(new Block(date,{data:'qqq'}))
console.log(b)



module.exports.Block =Block
module.exports.BlockChain =BlockChain





