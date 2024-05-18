import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import CompletedTask from './components/completedTask'
import TaskInput from './components/taskInput'
import TaskItem from './components/taskItem'
import { Task, TaskEntries } from './constants/interfaces'
import { styles } from './style/landingPageStyles'
import { storeTask } from './util/http'

export default function App() {
    // Task Objects
    const [allTaskEntries, setTasks] = useState<TaskEntries>({})
    const [taskId, setTaskId] = useState(0)

    // Completed Task Objects
    const [completedTaskEntries, setCompletedTasks] = useState<TaskEntries>({})

    function addTaskHandler(
        enteredTaskText: string,
        enteredPriority: string,
        enteredTimeReq: string,
    ) {
        setTaskId(Math.random())

        const newTask: Task = {
            task: enteredTaskText,
            priority: enteredPriority,
            timeRequired: enteredTimeReq,
        }

        setTasks(prevTasks => ({
            ...prevTasks,
            [taskId]: newTask,
        }))

        storeTask(newTask)
    }

    let taskCollectionScreen = (
        <Text style={[styles.showEmptySign]}>
            Add your first task to the flow!
        </Text>
    )

    if (
        Object.keys(allTaskEntries).length > 0 ||
        Object.keys(completedTaskEntries).length > 0
    ) {
        taskCollectionScreen = <Text style={styles.hideEmptySign}></Text>
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
        <>
            <SafeAreaView>
                <StatusBar style='light' />
                <Provider store={store}>
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
                            <View style={styles.dividerContainer}></View>
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
                            />
                        </View>
                    </View>
                </Provider>
            </SafeAreaView>
        </>
    )
}
