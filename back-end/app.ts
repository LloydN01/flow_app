const express = require('express')

const app = express()

const taskRoutes = require('./routes/task.ts')

app.use(taskRoutes)

app.listen(3000)
