import axios from 'axios'
import { BACKEND_URL } from '../constants/back-end-urls'
import { Task, TaskEntry, TaskFromDB } from '../constants/interfaces'

export async function storeTask(taskData: Task, isComplete: boolean = false) {
    const route = isComplete ? '/add-completed-tasks' : '/add-tasks'
    const response = await axios.post(BACKEND_URL + route, taskData)
    const id = response.data.taskId
    console.log(route, id)
    return id
}

export async function fetchTasks(
    isComplete: boolean = false,
): Promise<TaskEntry[]> {
    const route = isComplete ? '/get-completed-tasks' : '/get-tasks'
    const response = await axios.get<TaskFromDB[]>(`${BACKEND_URL}${route}`)

    const tasks: TaskEntry[] = []
    for (const task of response.data) {
        const taskObj: TaskEntry = {
            [task._id]: {
                task: task.task,
                priority: task.priority,
                timeRequired: task.timeRequired,
            },
        }
        tasks.push(taskObj)
    }

    console.log(route, tasks)
    return tasks
}

export function deleteTask(id: string, isComplete: boolean = false) {
    const route = isComplete ? `/completed-tasks/${id}` : `/tasks/${id}`
    console.log(route, id)
    return axios.delete(BACKEND_URL + route)
}
