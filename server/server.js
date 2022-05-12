const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json());;

app.get('/', (req, res) => {
  res.send('back data 보내기 성공')
})

app.post('/addpeer', (req, res) => {
  req.body;
  console.log(req.body);
})

app.listen(3500, () => {
    console.log('서버 시작')
})
