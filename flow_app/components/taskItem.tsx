import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Pressable, StyleSheet, Text, View } from 'react-native'

function TaskItem(props: any) {
    function deleteTaskHandler() {
        props.onDeleteTask(props.taskId)
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
        <FontAwesomeIcon icon={faCheck} color='#9E78CF' size={20} />
      </View>
    </View>
  )
}

export default TaskItem

const styles = StyleSheet.create({
  genericTaskContainer: {
    flexDirection: 'column',
    backgroundColor: '#15101C',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  genericSubTaskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  genericTaskText: {
    color: '#9E78CF',
  },
})
