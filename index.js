 
    // connect with mongoose
    // const mongoose=require('mongoose');
    // mongoose.connect("mongodb://localhost:27017/e-com");
    // const ProductSchema= new mongoose.Schema({            //putting restriction
    //     brand:String,
    //     price:Number
    // });
     
    // insert the data
    // const insert=async ()=>{
    // const productsModel=mongoose.model('products',ProductSchema);
    // let data=new productsModel({
    //     brand:"motorola"
    //   });
    // let result=await  data.save();
    // console.log(result)
    // } 
    // insert();

    //update the data
    // const updateInDb=async ()=>{
    // const product=mongoose.model('products',ProductSchema);
    // let data= await product.updateOne({price:1500},{$set:{brand: "Redmi"}})
    // console.log(data);
    // }
    // updateInDb();

    //delete the data
    // const deleteInDb=async ()=>{
    // const product=mongoose.model('products',ProductSchema);
    // let data= await product.updateOne({brand:"motorola"} )
    // console.log(data);
    // }
    // deleteInDb()

    //read the data 
    // const findInDb=async ()=>{
    // const product=mongoose.model('products',ProductSchema);
    // let data= await product.find( )
    // console.log(data);
    // }
    // findInDb();