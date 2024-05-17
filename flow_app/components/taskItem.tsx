import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Pressable, Text, View } from 'react-native'
import { styles } from './style/taskContainerStyles'

function TaskItem(props: any) {
    function deleteTaskHandler() {
        props.onDeleteTask(props.taskId)
    }

    function completedTaskHandler() {
        props.onCompletedTask(props.taskId)
    }

    return (
        <View style={styles.genericTaskContainer}>
            <Text style={styles.genericTaskText}>{props.item.task}</Text>
            <View style={styles.genericSubTaskContainer}>
                <Text style={styles.genericTaskText}>
                    Priority: {props.item.priority}
                </Text>
                <Text style={styles.genericTaskText}>
                    Time Requirement: {props.item.timeRequired}
                </Text>
            </View>
            <View style={styles.genericSubTaskContainer}>
                <Pressable onPress={deleteTaskHandler}>
                    <FontAwesomeIcon icon={faTrash} color='#9E78CF' />
                </Pressable>
                <Pressable onPress={completedTaskHandler}>
                    <FontAwesomeIcon icon={faCheck} color='#9E78CF' size={20} />
                </Pressable>
            </View>
        </View>
    )
}

export default TaskItem
