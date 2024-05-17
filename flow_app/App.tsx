import { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import CompletedTask from './components/completedTask'
import { styles } from './components/style/landingPageStyles'
import TaskInput from './components/taskInput'
import TaskItem from './components/taskItem'

export default function App() {
    // Task Objects
    const [allTaskEntries, setTasks] = useState<{
        [key: number]: { task: string; priority: string; timeRequired: string }
    }>({})
    const [taskId, setTaskId] = useState(0)

    // Completed Task Objects
    const [completedTaskEntries, setCompletedTasks] = useState<{
        [key: number]: { task: string; priority: string; timeRequired: string }
    }>([])

    function addTaskHandler(
        enteredTaskText: string,
        enteredPriority: string,
        enteredTimeReq: string,
    ) {
        setTaskId(Math.random())
        setTasks(prevTasks => ({
            ...prevTasks,
            [taskId]: {
                task: enteredTaskText,
                priority: enteredPriority,
                timeRequired: enteredTimeReq,
            },
        }))
    }

    function deleteTaskHandler(taskId: number) {
        const updatedTasks = { ...allTaskEntries }
        delete updatedTasks[taskId]
        setTasks(updatedTasks)
    }

    function completedTaskHandler(taskId: number) {
        const completedTask = allTaskEntries[taskId]
        setCompletedTasks(prevTasks => ({
            ...prevTasks,
            [taskId]: completedTask,
        }))
        deleteTaskHandler(taskId)
    }

    function permanentDeleteHandler(taskId: number) {
        const completedTasks = { ...completedTaskEntries }
        delete completedTasks[taskId]
        setCompletedTasks(completedTasks)
    }

    function restoreTaskHandler(taskId: number) {
        const completedTask = completedTaskEntries[taskId]
        addTaskHandler(
            completedTask.task,
            completedTask.priority,
            completedTask.timeRequired,
        )
        permanentDeleteHandler(taskId)
    }

    return (
        <View style={styles.landingScreenContainer}>
            <View style={styles.todoPageContainer}>
                <View>
                    <Text
                        style={[
                            styles.genericText,
                            styles.genericTitleContainer,
                        ]}
                    >
                        My Flow
                    </Text>
                </View>
                <TaskInput onAddTask={addTaskHandler} />
                <View style={styles.dividerContainer}></View>
                <FlatList
                    data={Object.entries(allTaskEntries)}
                    renderItem={({ item }) => {
                        const [taskId, taskData] = item
                        return (
                            <TaskItem
                                item={taskData}
                                taskId={taskId}
                                onDeleteTask={deleteTaskHandler}
                                onCompletedTask={completedTaskHandler}
                            />
                        )
                    }}
                    style={styles.todoListContainer}
                />
                <FlatList
                    data={Object.entries(completedTaskEntries)}
                    renderItem={({ item }) => {
                        const [taskId, taskData] = item
                        return (
                            <CompletedTask
                                item={taskData}
                                taskId={taskId}
                                onPermanentDeleteTask={permanentDeleteHandler}
                                onRestoreTask={restoreTaskHandler}
                            />
                        )
                    }}
                    style={[
                        styles.todoListContainer,
                        styles.completedListContainer,
                    ]}
                />
            </View>
        </View>
    )
}
