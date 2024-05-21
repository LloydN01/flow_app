import bodyParser from 'body-parser'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import { TestCompletedTasks, TestTasks } from '../test-data/test-data'

const router = express.Router()

router.use(cors())
router.use(bodyParser.json())

// POST endpoint for adding tasks
router.post('/add-tasks', (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body)
    res.send({ taskId: 1 })
})

// POST endpoint for adding completed tasks
router.post(
    '/add-completed-tasks',
    (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body)
        res.send({ taskId: 1 })
    },
)

// GET endpoint for fetching tasks
router.get('/get-tasks', (req: Request, res: Response, next: NextFunction) => {
    const tasks = TestTasks
    res.send(tasks)
})

// GET endpoint for fetching completed tasks
router.get(
    '/get-completed-tasks',
    (req: Request, res: Response, next: NextFunction) => {
        const completedTasks = TestCompletedTasks
        res.send(completedTasks)
    },
)

// DELETE endpoint for deleting tasks
router.delete(
    '/tasks/:id',
    (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id
        console.log(id)
    },
)

// DELETE endpoint for deleting completed tasks
router.delete(
    '/completed-tasks/:id',
    (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id
        console.log(id)
    },
)

module.exports = router
