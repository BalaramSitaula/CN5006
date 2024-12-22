const BookScheme= new mongoose.Schema({
    booktitle:{
        type:String,
        required:true 
        },
        PubYear:Number,
        author:String,
        Topic:String, 
        formate:String
        
        })
        let mongoose= require('mongoose') //to work without error
       
const BooksScheme= new mongoose.Schema({
 booktitle:{
    type:String, 
    required:true 
    },
    PubYear:Number, 
    author:String, 
    Topic:String, 
    formate:String
    }) 
    module.exports= mongoose.model('bookmodel',BookScheme,'BookCollection2')