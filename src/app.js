const express=require("express");
const app=express();
require("./db/conn");
const port =process.env.PORT || 8000;
const Studata=require("./model/studentdata");
app.use(express.json());
app.post("/insertdata",async (req,res)=>{
    try{
        const result=new Studata(req.body);
        const resl=await result.save();
        res.send(resl);
        console.log(resl);
    }catch(err){
        console.log(err);
    }
})

app.get("/insertdata",async(req,res)=>{
    try{
        const result=await Studata.find();
        res.send(result);

    }catch(err){
        console.log(err)
    }
})
app.get("/insertdata/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
     const result=await Studata.findById(_id)
     res.send(result);
    }catch(err){
        console.log(err)
    }
})
app.patch("/insertdata/:id",async(req,res)=>{
try{
    const _id=req.params.id;
 const reslut=await Studata.findByIdAndUpdate(_id,req.body,{
     new:true
 });
 res.send(reslut);
}catch(err){
    console.log(err)
}
})

app.delete("/insertdata/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
    const result=await Studata.findByIdAndDelete(_id);
    res.send(result)
    }catch(err){
        console.log(err)
    }
})

app.listen(port,()=>{
    console.log("server is running")
})



