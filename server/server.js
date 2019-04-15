const path = require('path');
const express = require('express');


const PublicPath= path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app= express();

app.use(express.static(PublicPath));

app.listen(3000,()=>{
  console.log(`server is up on port ${port}`);
})

//console.log(PublicPath);
