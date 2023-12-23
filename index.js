// const express=require('express');
// const app=express();  //express object

// app.listen(8080);
// app.use(express.json());

// app.get('/v1/student',(req,res) =>{
//     console.log('Hello World');
//     console.log(req.query.id);
//     console.log(req.query.name);
//     console.log(req.query.place);
//     res.send('{msg:\'hello\'}');
// })

// app.post('/v1/student',(req,res)=>{
//     console.log('Posted');
//     res.send(`<h1>Successfully Posted...:)</h1>`);
//     console.log(req.query.id);
//     console.log(req.body.name);

// })

// app.put('/v1/student',(req,res)=>{
//     console.log('Put onserver');
//     // console.log(req.query.id)
//     res.send(req.body);
// })


// app.route('/v1/student')
// .post((req,res)=>{
//     res.end('{msg:\'hello\'}')
// })

//curl 127.0.0.1:8080   ->can use this instead of the postman 



/*
Api's for
1)Profile get   Get/v1/profile
2)Profile Update    Put...
3)Getting Attendance    Get
4)Posting todays attendance     Put
5)Getting fees details
 */

// app.get('/v1/student/profile',(req,res)=>{
//     console.log("Getting Profile");
//     res.send(`<h1>${req.query.id}</h1>`);
//     console.log(req.query.name)
// })

// app.put('/v1/student/profile',(req,res,next)=>{
//     console.log("put profile")
//     next()
//     res.end()
// },(req,res)=>{
//     console.log('2nd func')
//     res.end()
// })

// const mongoose=require('mongoose');
// const express=require('express');

// const app=express();


// const mongourl="mongodb+srv://pkarulkarthi:Arul@cluster0.jhxp0v3.mongodb.net/teaching";

// mongoose.connection.on('connected',()=>console.log('connected'))

// mongoose.connect(mongourl);

// app.listen(7070);
// // app.use(express.json());
// const studentschema = mongoose.Schema({
//     "firstname":String,
//     'lastname':String,
//     'rollno': Number
// })

// const studentmodel = mongoose.model('student',studentschema) 

// app.get('/student',(req,res)=>{
//     return studentmodel.findOne({})
//     .then(result=>{
//         res.send(JSON.stringify(result))
//     })
// })

// app.post('/student', (req, res) => {
//     const newStudent = new studentmodel({...req.body});

//     newStudent.save()
//         .then(result => {
//             res.send(JSON.stringify(result.toObject()));
//         })
        
// });


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

// Finding a element 
// app.get('/student',(req,res)=>{
//     return studentModel.find({"_id": new mongoose.Types.ObjectId(req.query.id)})
//     // return studentModel.find({"first_name": req.query.first_name})
//     .then(result=>{
//         res.send(JSON.stringify(result))
//     })

// })
// iygvuyuyt

app.get('/student',(req,res)=>{
    return studentModel.find()
    .sort({"age":-1})
    .then(result=>{
        res.send(JSON.stringify(result))
    })

})

app.post('/student',(req,res)=>{
    return new studentModel(req.body).save().then(result=>{ 
        res.send(result.toObject())
    })

})
app.put('/student',(req,res)=>{
    const filter = {"_id":new mongoose.Types.ObjectId(req.query.id)}
    const update = {first_name:req.body.first_name}
    return studentModel.findOneAndUpdate(filter,update)
    .then(result=>{
        return res.end(JSON.stringify(result))
    })
})

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

