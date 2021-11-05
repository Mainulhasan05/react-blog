const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(require('./routes/route'));
const PORT=8000;
// app.use(require('./routes/route'));
require('./database/db.js');



app.listen(PORT,()=>{
    console.log('server is running at '+PORT);
})

