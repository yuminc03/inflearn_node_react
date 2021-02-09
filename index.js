const express = require('express')
const app = express()
const port = 5000 //back server
const bodyParser = require('body-parser');

const config = require('./config/key')
const {User} = require("./models/User");

//application/x-www-form-urlencoded (x-www-form-urlencoded타입을 분석해서 가져옴)
app.use(bodyParser.urlencoded({extended: true}));

//application/json (json타입으로 된 걸 분석해서 가져옴)
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('안녕하세요! node와 React를 배워봅시다')
})

app.post('/register', (req, res) => {
  //회원가입할 때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터베이스에 넣는다.

  
  const user = new User(req.body)
  //bodyParser가 있기 때문에 req.body로 클라이언트에 보낸 정보를 받아줌
  user.save((err, userInfo) =>{//정보들이 user모델에 저장됨
    if(err) return res.json({ success: false, err})
    //에러가 있을 때는 json형식으로 전달하고 에러메세지도 전달
    return res.status(200).json({
      success: true//res.status(200)는 성공했다는 뜻, json형식으로 전달
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})