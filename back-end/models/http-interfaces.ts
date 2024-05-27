import { ObjectId } from 'mongodb'

interface TaskDocument {
    _id: ObjectId
    task: string
    priority: string
    timeRequired: string
    __v: number
}

export default TaskDocument
