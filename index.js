// ================> MONGO DB + EXPRESS <====================

const mongoose =require('mongoose')
const express=require('express')
const app=express()

mongoUrl='mongodb+srv://pkarulkarthi:Arul@cluster0.jhxp0v3.mongodb.net/';

mongoose.connection.on('connected',()=>console.log('Connected'))    //emitters is used here

mongoose.connect(mongoUrl);
app.listen(7070)
app.use(express.json());


const studentSchema=mongoose.Schema({
    "first_name":String,
    "last_name":String,
    "age":Number,
})

const studentModel=mongoose.model('student',studentSchema);

// Finding a element SORT/MULTI SORT
// app.get('/student',(req,res)=>{
//     return studentModel.find({"_id": new mongoose.Types.ObjectId(req.query.id)})
//     // return studentModel.find({"first_name": req.query.first_name})
//     .then(result=>{
//         res.send(JSON.stringify(result))
//     })

// })

app.get('/student',(req,res)=>{
    return studentModel.find()
    // .sort({"age":-1}) single value
    // .sort({"age":-1 , "first_name":1})

    // skip and limit operation
    .sort({"age":-1}).skip(1).limit(1) //gives the second largest age only 
    .then(result=>{
        res.send(JSON.stringify(result))
    })

})

// add
app.post('/student',(req,res)=>{
    return new studentModel(req.body).save().then(result=>{ 
        res.send(result.toObject())
    })

})

// update 
app.put('/student',(req,res)=>{
    const filter = {"_id":new mongoose.Types.ObjectId(req.query.id)}
    const update = {first_name:req.body.first_name}
    return studentModel.findOneAndUpdate(filter,update)
    .then(result=>{
        return res.end(JSON.stringify(result))
    })
})

// delete operation
 app.delete('/student',(req,res)=>{
    const del = {"_id" : new mongoose.Types.ObjectId(req.query.id)}    
    // const deletename = {first_name:req.body.first_name}
    return studentModel.deleteOne(del)
    .then(result=>{
        return res.end(JSON.stringify(result))
    })
 })

// app.delete('/student',(req,res)=>{
//     const del={"first_name":req.query.first_name}
//     return studentModel.deleteOne(del)
//     .then(result=>{
//         return res.end(JSON.stringify(result))
//     })
// }) 
//also delete


// pagenate
// app.get('/student/pagenate',(req,res)=>{
//     /*
//     we need certain parameters like sort type , which page we need to access , what should be printed
//      */ 
//     const sort= {} ;
//     sort[req.body.sortby]= req.body.orderby;
//     return studentModel.find({})
//     .sort(`${res.body.sortby}:${req.body.orderby}`)
//     .skip((req.body.page-1)*req.body.limit)
//     .limit(req.body.limit)
//     .then(result=>{
//         res.send(JSON.stringify(result))
//     })

// })