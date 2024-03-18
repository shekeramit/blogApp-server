const express = require('express');
const useRoute = require('./routes/route');
const cors = require('cors');
const app = express();

//middleware
app.use(express.json());
app.use(cors());
//Route
app.use("/",useRoute.route);

app.listen(8080,()=>{
    console.log("server started")
})
