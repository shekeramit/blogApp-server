const express = require('express');
const useRoute = require('./routes/route');
const cors = require('cors');
const app = express();
const blogRoute = require('./routes/blogRoute')

//middleware
app.use(express.json());
app.use(cors());
//Route
app.use("/",useRoute.route);
app.use("/",blogRoute.route)

app.listen(8080,()=>{
    console.log("server started")
})
