import axios from 'axios'
import { Task } from '../constants/interfaces'

export function storeTask(taskData: Task) {
    axios.post(
        'https://flow-app-61c32-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
        taskData,
    )
}
