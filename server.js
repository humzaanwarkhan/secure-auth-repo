const express = require('express');
const app = express();
const testRoute = require('./src/routes/test.route.js');
const healthRoute = require('./src/routes/health.route.js')
const authRoute = require('./src/routes/auth.route.js')
const profileRoute = require('./src/routes/profile.route.js')
require("dotenv").config();



const port = 3000;

app.get('/', (req, res)=>{
    res.send("hello! This is home...")
});

app.use(express.json());

app.use(testRoute);
app.use(healthRoute);
app.use(authRoute);
app.use(profileRoute);

app.listen(port, ()=>{
    console.log(`server is listening at port ${port}`)
})