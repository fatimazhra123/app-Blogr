
const mongoose = require("mongoose");

const GategorieSchema = new mongoose.Schema({
   
name:{
    type:String,
    require:true
}



    
    });

module.exports=mongoose.model("Gategorie",GategorieSchema)