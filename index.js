const express = require('express')
const validar = require('./middlewares/middleware')
const app = express()
const port = 3005

//middleware
app.use(express.static('assets/img'))

app.get('/', (req, res) => res.send('Hello World desde repo clonado!'))
app.get('/about', (req, res) => res.json({message: 'About Page'}))
app.get('/contact', (req, res) => res.send('Contact Page'))

app.get("/tiempo", validar, (req, res) => {
  res.send("TE FELICITO ESTE ES UNA PRUEBA DE MIDDLEWARES");
}); 


app.get('/saludo',  (req, res) => {
    res.send('usuario autorizado')
})

app.get('/mascota', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/paisaje', (req, res) => {
  res.sendFile(__dirname + '/paisaje.html')
})

app.get('*', (req, res) => res.send('<h1>404 Page</h1>'))


app.listen(port, () => console.log(`servidor levantado en port http://localhost:${port}`))

