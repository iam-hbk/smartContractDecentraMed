const express = require('express')
const app = express()
const port = 5002
const bodyParser = require('body-parser');
const Web3 = require('web3');
const Provider = require('@truffle/hdwallet-provider');
const MyContract = require('./artifacts/contracts/decentraMedContract.sol/decentraMedContract.json');

const address = "0x71bE63f3384f5fb98995898A86B02Fb2426c5788";
const provider = new Provider(["0x701b615bbdfb9de65240bc28bd21bbc0d996645a3dd57e7b12bc2bdf6f192c82"], "http://127.0.0.1:8545/"); 
const web3 = new Web3(provider);
const myContract = new web3.eth.Contract( MyContract.abi,"0x5FbDB2315678afecb367f032d93F642f64180aa3");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/addRecord", async function(req,res){
    const tokenID = await myContract.methods.addRecord(req.body.address, req.body.url).send({from:address})
    return res.status(200).json({ 
        tokenID: tokenID.events.Transfer.returnValues.tokenId
    });;
})

app.use("/getMetaData/:tokenID", async function(req,res){
    const metaData = await myContract.methods.tokenURI(req.params.tokenID).call()
    return res.status(200).json({ 
        metadata: metaData
    });;
})

app.listen(port, () => {
    console.log(`Node Todo API is running on port: ${port}`)
})