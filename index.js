const express = require('express');
const authRoute = require('./routes/authRoute');
const cors = require('cors');
const app = express();
const blogRoute = require('./routes/blogRoute')

//middleware
app.use(express.json());
app.use(cors());
//Route
app.use("/",authRoute.route);
app.use("/",blogRoute.route);



app.listen(8080,()=>{
    console.log("server started")
})
