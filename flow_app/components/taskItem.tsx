import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { StyleSheet, Text, View } from 'react-native'

function TaskItem(item: {
  item: { task: string; priority: string; timeRequired: string }
}) {
  return (
    <View style={styles.genericTaskContainer}>
      <Text style={styles.genericTaskText}>{item.item.task}</Text>
      <Text style={styles.genericTaskText}>{item.item.priority}</Text>
      <Text style={styles.genericTaskText}>{item.item.timeRequired}</Text>
      <FontAwesomeIcon icon={faTrash} color='#9E78CF' />
      <FontAwesomeIcon icon={faCheck} color='#9E78CF' size={20} />
    </View>
  )
}

export default TaskItem

const styles = StyleSheet.create({
  genericTaskContainer: {
    backgroundColor: '#15101C',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  genericTaskText: {
    color: '#9E78CF',
  },
})
