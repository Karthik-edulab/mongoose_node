const express=require('express');
require('./mongoose');
const products=require('./products');

const app=express();
app.use(express.json());

//post method

app.post("/create",async (req,res)=>{
let data=new products(req.body);
let result=await data.save();
res.send(result);
});

//get method
app.get("/list",async(req,res)=>{
    let data=await products.find();
    res.send(data)
})

//delete method
app.delete("/delete/:_id",async(req,res)=>{
    let data=await products.deleteOne(req.params);
    res.send(data);
})

//put method
app.put("/update/:_id",async(req,res)=>{
    let data=await products.updateOne(req.params,{$set:req.body});
    res.send(data);
})
app.listen(6300);