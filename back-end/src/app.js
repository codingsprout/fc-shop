const express = require('express')
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

//routes
const userRoutes = require('../routes/user')

//middleware

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use('/gabsip', userRoutes)

app.get('/', (req, res, next) => {
  res.status(200).json({message: "testing..."})
})

app.post('/gabsip', (req, res, next) => {
  res.status(200).json({
    message: req.body
  })
})

//mongo connection (env)

mongoose.connect(
    process.env.DB_CONNECTION,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
      ).then(() => { 
        console.log('connected to database')
});

//env port 

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})