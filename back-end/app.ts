import 'dotenv/config'
import mongoose from 'mongoose'

const express = require('express')
const app = express()

const taskRoutes = require('./routes/taskManager.ts')

app.use(taskRoutes)

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@flow.qpnpq68.mongodb.net/?retryWrites=true&w=majority&appName=flow`,
    )
    .then(result => {
        console.log('Connected succesfully with database')
        app.listen(3000)
    })
    .catch(err => console.log(err))
