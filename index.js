const express = require('express')
const app = express()
const port = 3005


app.get("/tiempo", (req, res) => {
  res.send("usuario autorizado");
}); 
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/about', (req, res) => res.json({message: 'About Page'}))
app.get('/contact', (req, res) => res.send('Contact Page'))


app.use('/tiempo', (req, res, next) => {
    
    const Auth = req.header('Authorization')
    Auth
        ? next()
        : res.send('usuario No autorizado')
   
})

app.get('/saludo',  (req, res) => {
    res.send('usuario autorizado')
})


app.listen(port, () => console.log(`servidor levantado en port http://localhost:${port}`))

