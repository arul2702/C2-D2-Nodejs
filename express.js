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

// EXCEPTION HANDLING
const express = require('express')
const app=express()
app.get('/hee',(req,res)=>{
    try{
        if(req.query.id==1){
            throw new Error('Cannot handle 0')
        }else{
            res.end("Welcome")
        }
    }catch{
        if(err instanceof Error){
            res.end('Unhandled Exception')
        }
    }
})