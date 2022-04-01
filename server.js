import express from 'express';
import router from './routes/index.js'

const app = express ()
app.use('/api',router);

app.use(express.static('public'))
     
const PORT = 8080;
  const server = app.listen(PORT, ()=>{ 
     console.log(`escuchando del puerto ${server.address().port}`)
})

server.on('error', error => { 
     console.log(`Error : ${error}`)
})