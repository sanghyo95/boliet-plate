const express = require('express');
const app = express();
const port = 52273;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { User } = require('./models/User');
const config = require('./config/key');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(config.mongoURI,{
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify: false
}).then(()=>console.log('MongoDB connected....'))
.catch(err => console.log(err));


app.get('/',(req,res)=> res.send('안녕 안녕'));

app.post('/register',(req,res)=>{
    // 회원가입 필요 정보 datebase에 넣는 부분
    const user = new User(req.body);

    user.save((err,userInfo)=>{
        if(err) return res.json({ success : false, err})
        return res.status(200).json({
            success: true
        }); 
    });
});
app.listen(port,()=>console.log(`Example app listening on port ${port} !`));