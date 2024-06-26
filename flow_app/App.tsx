import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import CompletedTask from './components/completedTask'
import TaskInput from './components/taskInput'
import TaskItem from './components/taskItem'
import { Task, TaskEntry } from './constants/interfaces'
import { styles } from './style/landingPageStyles'
import { deleteTask, fetchTasks, storeTask } from './util/http'

export default function App() {
    // Task Objects
    const [allTaskEntries, setTasks] = useState<TaskEntry>({})
    // Completed Task Objects
    const [completedTaskEntries, setCompletedTasks] = useState<TaskEntry>({})
    // Refreshing
    const [isRefreshing, setRefreshing] = useState(false)

    useEffect(() => {
        refreshAllTasks()
    }, [])

    function refreshAllTasks() {
        getTasks()
        getCompletedTasks()
    }

    const getTasks = async () => {
        setRefreshing(true)
        const tasks = await fetchTasks(false)
        setRefreshing(false)
        const newTasks: TaskEntry = {}
        tasks.forEach(task => {
            const taskId = Object.keys(task)[0]
            const taskData = task[taskId]
            newTasks[taskId] = taskData
        })
        setTasks(newTasks)
    }

    const getCompletedTasks = async () => {
        setRefreshing(true)
        const tasks = await fetchTasks(true)
        setRefreshing(false)
        const newTasks: TaskEntry = {}
        tasks.forEach(task => {
            const taskId = Object.keys(task)[0]
            const taskData = task[taskId]
            newTasks[taskId] = taskData
        })
        setCompletedTasks(newTasks)
    }

    // Empty Task Collection Notice
    let taskCollectionScreen = (
        <View style={styles.todoListContainer}>
            <Text style={[styles.showEmptySign]}>
                Add your first task to the flow!
            </Text>
        </View>
    )

    if (
        Object.keys(allTaskEntries).length > 0 ||
        Object.keys(completedTaskEntries).length > 0
    ) {
        taskCollectionScreen = <Text style={styles.hideEmptySign}></Text>
    }

    // Helper functions
    async function addTaskHandler(
        enteredTaskText: string,
        enteredPriority: string,
        enteredTimeReq: string,
    ) {
        const newTask: Task = {
            task: enteredTaskText,
            priority: enteredPriority,
            timeRequired: enteredTimeReq,
        }
        await storeTask(newTask)
        refreshAllTasks()
    }

    async function deleteTaskHandler(taskId: string) {
        await deleteTask(taskId)
        refreshAllTasks()
    }

    async function completedTaskHandler(taskId: string) {
        deleteTaskHandler(taskId)
        const completedTask = allTaskEntries[taskId]
        await storeTask(completedTask, true)
        refreshAllTasks()
    }

    async function permanentDeleteHandler(taskId: string) {
        await deleteTask(taskId, true)
        refreshAllTasks()
    }

    function restoreTaskHandler(taskId: string) {
        const completedTask = completedTaskEntries[taskId]
        addTaskHandler(
            completedTask.task,
            completedTask.priority,
            completedTask.timeRequired,
        )
        permanentDeleteHandler(taskId)
    }

    return (
        <>
            <SafeAreaView>
                <StatusBar style='light' />
                <View style={styles.landingScreenContainer}>
                    <View style={styles.todoPageContainer}>
                        <View style={styles.topPageContainer}>
                            <Text
                                style={[
                                    styles.genericText,
                                    styles.genericTitleContainer,
                                ]}
                            >
                                My Flow
                            </Text>
                            <FontAwesomeIcon
                                icon={faCircleUser}
                                color='white'
                                size={30}
                            />
                        </View>
                        <TaskInput onAddTask={addTaskHandler} />
                    </View>
                    <View style={styles.dividerContainer}></View>
                    <View>
                        <View style={styles.bottomSection}>
                            {taskCollectionScreen}
                            <FlatList
                                data={[
                                    ...Object.entries(allTaskEntries).map(
                                        ([taskId, taskData]) => ({
                                            taskId,
                                            taskData,
                                            completed: false,
                                        }),
                                    ),
                                    ...Object.entries(completedTaskEntries).map(
                                        ([taskId, taskData]) => ({
                                            taskId,
                                            taskData,
                                            completed: true,
                                        }),
                                    ),
                                ]}
                                renderItem={({ item }) => {
                                    return item.completed ? (
                                        <CompletedTask
                                            item={item.taskData}
                                            taskId={item.taskId}
                                            onPermanentDeleteTask={
                                                permanentDeleteHandler
                                            }
                                            onRestoreTask={restoreTaskHandler}
                                        />
                                    ) : (
                                        <TaskItem
                                            item={item.taskData}
                                            taskId={item.taskId}
                                            onDeleteTask={deleteTaskHandler}
                                            onCompletedTask={
                                                completedTaskHandler
                                            }
                                        />
                                    )
                                }}
                                style={styles.todoListContainer}
                                onRefresh={refreshAllTasks}
                                refreshing={isRefreshing}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}
