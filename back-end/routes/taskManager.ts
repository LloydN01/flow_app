import bodyParser from 'body-parser'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'

const router = express.Router()
const taskManager = require('../controllers/taskManager')

router.use(cors())
router.use(bodyParser.json())

// POST endpoint for adding tasks
router.post('/add-tasks', taskManager.postAddTasks)

// POST endpoint for adding completed tasks
router.post('/add-completed-tasks', taskManager.postAddCompletedTasks)

// GET endpoint for fetching tasks
router.get('/get-tasks', taskManager.getTasks)

// GET endpoint for fetching completed tasks
router.get('/get-completed-tasks', taskManager.getCompletedTasks)

// DELETE endpoint for deleting tasks
router.delete('/tasks/:id', taskManager.deleteTaskById)

// DELETE endpoint for deleting completed tasks
router.delete(
    '/completed-tasks/:id',
    (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id
        console.log(id)
    },
)

module.exports = router
