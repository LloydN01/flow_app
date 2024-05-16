import { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

type TaskInputProps = {
  onAddTask: (taskText: string, priority: string, timeRequired: string) => void
}

function TaskInput(props: TaskInputProps) {
  // Tasks
  const [enteredTaskText, setEnteredTaskText] = useState('')
  // Priority
  const [enteredPriority, setEnteredPriority] = useState('')
  // Time Required
  const [enteredTimeReq, setTimeReq] = useState('')

  function taskInputHandler(taskEntered: string) {
    setEnteredTaskText(taskEntered)
  }

  function priorityInputHandler(priorityEntered: string) {
    setEnteredPriority(priorityEntered)
  }

  function timeReqInputHandler(timeReqEntered: string) {
    setTimeReq(timeReqEntered)
  }

  function addTaskHandler() {
    props.onAddTask(enteredTaskText, enteredPriority, enteredTimeReq)
    setEnteredTaskText('')
    setEnteredPriority('')
    setTimeReq('')
  }

  return (
    <View style={styles.todoInputContainer}>
      <TextInput
        style={[styles.newTaskInputContainer, styles.textInputConatiner]}
        placeholder='Task Description'
        placeholderTextColor='white'
        onChangeText={taskInputHandler}
        value={enteredTaskText}
      />
      <View style={styles.todoExtraInfoContainer}>
        <TextInput
          style={[styles.textInputConatiner, styles.textInputAdditional]}
          placeholder='Priority'
          placeholderTextColor='white'
          onChangeText={priorityInputHandler}
          value={enteredPriority}
        />
        <TextInput
          style={[styles.textInputConatiner, styles.textInputAdditional]}
          placeholder='Time Required'
          placeholderTextColor='white'
          onChangeText={timeReqInputHandler}
          value={enteredTimeReq}
        />
      </View>
      <TouchableOpacity
        style={styles.taskSubmitButton}
        onPress={addTaskHandler}
      >
        <Text style={styles.buttonText}>Add to your flow</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TaskInput

const styles = StyleSheet.create({
  todoInputContainer: {
    flexDirection: 'column',
    marginHorizontal: 10,
    marginVertical: 20,
    alignItems: 'center',
  },
  newTaskInputContainer: {
    width: '95%',
  },
  textInputConatiner: {
    backgroundColor: '#1D1825',
    paddingHorizontal: 10,
    borderRadius: 10,
    color: 'white',
    height: 40,
    marginVertical: 5,
  },
  todoExtraInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },
  textInputAdditional: {
    width: '48.5%',
  },
  taskSubmitButton: {
    width: '95%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#9E78CF',
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
})
