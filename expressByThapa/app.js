const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/about',(req,res)=>
{
 res.send('Hello World From About Page')   
})
 
app.listen(3000, ()=>{
    console.log("listenig the port at 8000");
});