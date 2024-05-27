import { NextFunction, Request, Response } from 'express'
import OpenAI from 'openai'
import TaskDocument from '../models/http-interfaces'

const Task = require('../models/task')
const CompeltedTask = require('../models/completedTask')
const openai = new OpenAI()

async function orderTasks(tasks: TaskDocument[]): Promise<TaskDocument[]> {
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: 'system',
                content: `
                You are a personal assistant designed to output JSON with the following structure:
                [
                    {"priority": "priority", "timeRequired": "timeRequired", "task": "task", "_id": "_id", "__v": "__v"},
                    ...
                ]
                `,
            },
            {
                role: 'user',
                content: `
                Here are some tasks with their priorities and time required to complete:
                ${tasks.map(task => `Priority: ${task.priority}, Time Required: ${task.timeRequired}, Task: ${task.task}, _id: ${task._id}, __v: ${task.__v}`).join('\n')}
                If there are no tasks, return an empty JSON.
                Sort the tasks by priority highest to lowest. You should consider the time required and the priority values. 
                `,
            },
        ],
        model: 'gpt-3.5-turbo',
        response_format: { type: `json_object` },
    })

    const orderedTasks: TaskDocument[] = JSON.parse(
        completion.choices[0].message.content || '',
    ).tasks
    console.log(orderedTasks)
    return orderedTasks
}

const handleSaveError = (res: Response, err: any) => {
    console.error(err)
    res.status(500).json({ error: 'Internal server error' })
}

exports.postAddTasks = (req: Request, res: Response, next: NextFunction) => {
    const body = req.body as TaskDocument | null

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
    const body = req.body as TaskDocument | null

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
            const id = result._id.toString()
            res.send({ taskId: id })
        })
        .catch((err: any) => {
            handleSaveError(res, err)
        })
}

exports.getTasks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tasks: TaskDocument[] = await Task.find()
        const orderedTasks: TaskDocument[] = await orderTasks(tasks)
        res.status(200).json(orderedTasks)
    } catch (err) {
        handleSaveError(res, err)
    }
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

exports.deleteCompletedTaskById = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const id = req.params.id

    CompeltedTask.findByIdAndDelete(id)
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
