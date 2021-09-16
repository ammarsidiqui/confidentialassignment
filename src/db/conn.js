const mon =require("mongoose");

mon.connect("mongodb://localhost:27017/students")
.then(()=>{console.log("connection successfull")})
.catch((err)=>{
    console.log(err)
});
