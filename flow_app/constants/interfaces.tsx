export interface Task {
    task: string
    priority: string
    timeRequired: string
}

export interface TaskFromDB {
    __v: number
    _id: string
    priority: string
    task: string
    timeRequired: string
}

export interface TaskEntry {
    [key: string]: {
        task: string
        priority: string
        timeRequired: string
    }
}
