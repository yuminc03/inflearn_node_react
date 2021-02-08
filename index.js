const express = require('express')
const app = express()
const port = 5000 //back server

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://lia:Yumin03@node-react01.ynxcp.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕, React?')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})