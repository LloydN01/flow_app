import { mongoConnect } from './util/database'

const express = require('express')
const app = express()

const taskRoutes = require('./routes/task.ts')

app.use(taskRoutes)

mongoConnect((client: Function) => {
    console.log(client)
    app.listen(3000)
})
