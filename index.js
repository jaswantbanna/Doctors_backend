const express = require('express')
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const newRoute = require('./routes/newRoute');
const adminRoute =require('./routes/adminRoutes');
const doctorRoute=require('./routes/doctorRoute')
const patientRoute=require('./routes/patientRoute')
const cors = require("cors");

const app = express()
const PORT = 3001;


app.use(cors());

app.use(express.json());
app.use(express.static('uploads'))
app.use(userRoutes)
app.use(newRoute)
app.use(adminRoute)
app.use(doctorRoute)
app.use(patientRoute)
app.all('*', (req, res) => {
    res.status(404).send({ "message": `not a valid url ${req.originalUrl}` })
})



mongoose.connect("mongodb+srv://roopsa8890:cTHBgbWg4w91VuGX@cluster0.fj7deot.mongodb.net/doctorapp?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("connected to mongoDB");

}).catch((err) => {
    console.log(err);
})

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`)
})
