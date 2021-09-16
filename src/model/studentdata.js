const mon=require("mongoose");

const studentSchema=new mon.Schema({
    name:{
        type:String,
     
    },
    email:{
        type:String,
        unique:[true,"Email is already created"]
    },
    phone:{
        type:Number,
        minlength:11,
        maxlength:12,
       
    },
    program:{
        type:String,
     
    }
})

const Studata = new mon.model("Studata",studentSchema);

module.exports = Studata;