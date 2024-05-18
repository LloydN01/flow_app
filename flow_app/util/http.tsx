import axios from 'axios'
import { BACKEND_URL } from '../constants/back-end-urls'
import { Task, TaskEntry } from '../constants/interfaces'

export async function storeTask(taskData: Task, isComplete: boolean = false) {
    const route = isComplete ? '/completed-tasks.json' : '/tasks.json'
    const response = await axios.post(BACKEND_URL + route, taskData)
    const id = response.data.name
    return id
}

export async function fetchTasks(isComplete: boolean = false) {
    const route = isComplete ? '/completed-tasks.json' : '/tasks.json'
    const response = await axios.get(BACKEND_URL + route)

    const tasks = []
    for (const key in response.data) {
        const taskObj: TaskEntry = {
            [key]: {
                task: response.data[key].task,
                priority: response.data[key].priority,
                timeRequired: response.data[key].timeRequired,
            },
        }
        tasks.push(taskObj)
    }

    return tasks
}

export function deleteTask(id: string, isComplete: boolean = false) {
    const route = isComplete
        ? `/completed-tasks/${id}.json`
        : `/tasks/${id}.json`
    return axios.delete(BACKEND_URL + route)
}
