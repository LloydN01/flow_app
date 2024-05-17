import { faRotateRight, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Pressable, Text, View } from 'react-native'
import { styles } from './style/taskContainerStyles'

function CompletedTask(props: any) {
    function permanentDeleteHandler() {
        props.onPermanentDeleteTask(props.taskId)
    }

    function restoreTaskHandler() {
        props.onRestoreTask(props.taskId)
    }

    return (
        <View style={styles.genericTaskContainer}>
            <Text style={styles.genericCompletedTaskText}>
                {props.item.task}
            </Text>
            <View style={styles.genericSubTaskContainer}>
                <Text style={styles.genericCompletedTaskText}>
                    Priority: {props.item.priority}
                </Text>
                <Text style={styles.genericCompletedTaskText}>
                    Time Requirement: {props.item.timeRequired}
                </Text>
            </View>
            <View style={styles.genericSubTaskContainer}>
                <Pressable onPress={permanentDeleteHandler}>
                    <FontAwesomeIcon icon={faTrash} color='#78CFB0' />
                </Pressable>
                <Pressable onPress={restoreTaskHandler}>
                    <FontAwesomeIcon
                        icon={faRotateRight}
                        color='#78CFB0'
                        size={20}
                    />
                </Pressable>
            </View>
        </View>
    )
}

export default CompletedTask
