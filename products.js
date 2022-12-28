  //created schema & model for collection('products')

const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
brand:String,
model:String,
price:Number,
category:String
});
module.exports=mongoose.model('products',productSchema);