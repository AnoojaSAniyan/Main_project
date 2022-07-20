const SHA256 = require('crypto-js/sha256')
const Record = require ('../models/record')

const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

class Block{
     constructor(date,user,data,previousHash=''){
        this.date=date;
        this.user=user;
        this.data=data;
        this.previousHash=previousHash;
        this.hash=this.calculateHash();
        this.nounce=0
     }

     calculateHash(){
        return SHA256(this.date+this.user+this.previousHash+JSON.stringify(this.data)+this.nounce).toString();
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
        return newBlock

    }

    isChainValid(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            
            if (currentBlock.previousHash !== previousBlock.hash){
                return false
            }
        }
        return true;
    }
}


const post_medical_record = async(req,res)=>{
    const chain = await Record.find({})
    const medBlock = new BlockChain(chain)
    const user = req.cookies.user;
    const newBlock = medBlock.addBlock(new Block(date,user,req.body))

    let st_data=JSON.stringify(newBlock)

    Record.create(JSON.parse(st_data)).then((resp)=>{
        console.log(resp)
        console.log('New Block Added Sucessfully.')
        res.render('messege',{messege:'New Block Added Sucessfully',desc:`Hash Value Of New Block : ${resp.hash}`})
    }).catch((err)=>{
        console.log(err)
        res.render('messege',{messege:'Block Adding Failed !!!',desc:`${err}`})
    })
}

const get_view_blocks = (req,res)=>
{
    Record.find().select('hash previousHash').then((result)=>{
        console.log(result)
        res.render('view_blocks',{data:result})
    }).catch((err)=>{
        console.log(err)
    })
}


const verify_blocks = async(req,res)=>{
    const chain = await Record.find({})
    const medBlock = new BlockChain(chain)
    const result = await medBlock.isChainValid()
    console.log(result)
    res.send(result)

}

module.exports={
    post_medical_record,
    get_view_blocks,
    verify_blocks
}