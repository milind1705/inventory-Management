require('dotenv').config();

const express = require('express');
const mongose = require('mongoose');
const port = process.env.PORT || 3000;
const app = express();
//import files
const adminRoute = require('./routes/adminRoute');
const customerRoute = require('./routes/customerRoute');
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//mongoose initialization
mongose.connect(process.env.MONGO_URL, {
    
})
mongose.connection.once('open', ()=>{
    console.log('connected to database ..')
});
//routing 
app.use('/admin', adminRoute)
app.use('/customer', customerRoute)
//listning
app.listen(port, () => {
    console.log(`server is runnig on port ${port}`)
})