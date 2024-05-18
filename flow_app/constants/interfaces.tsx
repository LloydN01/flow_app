export interface Task {
    task: string;
    priority: string;
    timeRequired: string;
  }
  
  export interface TaskEntries {
    [key: number]: Task;
  }