 
 
const mongoose=require('mongoose');
const main= async()=>{
    await mongoose.connect("mongodb://localhost:27017/e-com");
    const ProductSchema= new mongoose.Schema({
        brand:String
    });



    const productsModel=mongoose.model('products',ProductSchema);
    let data=new productsModel({brand:"motorola"});
    let result=await data.save();
    console.log(result)
}
main();