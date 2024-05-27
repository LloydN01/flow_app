export interface TaskRequestBody {
    task: string
    priority: string
    timeRequired: string
}

export interface TaskDocument extends Document, TaskRequestBody {}
