import { NextFunction, Request, Response } from 'express'
import { TaskDocument, TaskRequestBody } from '../models/http-interfaces'
const Task = require('../models/task')
const CompeltedTask = require('../models/completedTask')

const handleSaveError = (res: Response, err: any) => {
    console.error(err)
    res.status(500).json({ error: 'Internal server error' })
}

exports.postAddTasks = (req: Request, res: Response, next: NextFunction) => {
    const body = req.body as TaskRequestBody | null

    if (!body) {
        return res.status(400).json({ error: 'Request body is null' })
    }

    const { task, priority, timeRequired } = body

    if (!task || !priority || !timeRequired) {
        return res.status(400).json({ error: 'Invalid input data' })
    }

    const taskObj = new Task({
        task,
        priority,
        timeRequired,
    })

    taskObj
        .save()
        .then((result: any) => {
            console.log('Created New Task')
            console.log(result)
            const id = result._id.toString()
            res.send({ taskId: id })
        })
        .catch((err: any) => {
            handleSaveError(res, err)
        })
}

exports.postAddCompletedTasks = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const body = req.body as TaskRequestBody | null

    if (!body) {
        return res.status(400).json({ error: 'Request body is null' })
    }

    const { task, priority, timeRequired } = body

    if (!task || !priority || !timeRequired) {
        return res.status(400).json({ error: 'Invalid input data' })
    }

    const compeltedTaskObj = new CompeltedTask({
        task,
        priority,
        timeRequired,
    })

    compeltedTaskObj
        .save()
        .then((result: any) => {
            console.log('Created New Task')
            console.log(result)
            const id = result._id.toString()
            res.send({ taskId: id })
        })
        .catch((err: any) => {
            handleSaveError(res, err)
        })
}

exports.getTasks = (req: Request, res: Response, next: NextFunction) => {
    Task.find()
        .then((tasks: TaskDocument[]) => {
            res.status(200).json(tasks)
        })
        .catch((err: any) => {
            handleSaveError(res, err)
        })
}

exports.getCompletedTasks = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    CompeltedTask.find()
        .then((completedTask: TaskDocument[]) => {
            res.status(200).json(completedTask)
        })
        .catch((err: any) => {
            handleSaveError(res, err)
        })
}

exports.deleteTaskById = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id

    Task.findByIdAndDelete(id)
        .then((result: TaskDocument) => {
            if (!result) {
                return res.status(404).json({ error: 'Task not found' })
            }
            res.status(200).json({ message: 'Task deleted', task: result })
        })
        .catch((err: any) => {
            console.error(err)
            res.status(500).json({ error: 'Internal server error' })
        })
}
