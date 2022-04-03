import express from 'express';
import router from './routes/index.js'
import bodyParser from 'body-parser'

const app = express ()

app.use(express.json())
app.use('/api',router);
app.use('/static',express.static('public'))


     
const PORT = 8081

;
  const server = app.listen(PORT, ()=>{ 
     console.log(`escuchando del puerto ${server.address().port}`)
})

server.on('error', error => { 
     console.log(`Error : ${error}`)
})