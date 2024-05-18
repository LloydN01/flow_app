export interface Task {
    task: string
    priority: string
    timeRequired: string
}

export interface TaskEntry {
    [key: string]: Task
}
