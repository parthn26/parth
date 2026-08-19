const express = require('express')
const app = express();
const connectDB = require('./config/db')


require('dotenv').config();
connectDB();



app.get('/',((req,res)=>{
    res.send("this is server side");
}));

app.get("/About", (req, res) =>{
res.send({message:"this is my About page"});

});
const port= process.env.PORT;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});