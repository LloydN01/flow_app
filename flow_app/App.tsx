import { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import TaskInput from './components/taskInput'
import TaskItem from './components/taskItem'

export default function App() {
  // Task Objects
  const [allTaskEntries, setTasks] = useState<{
    [key: number]: { task: string; priority: string; timeRequired: string }
  }>({})
  const [counter, setCounter] = useState(0)

  function addTaskHandler(
    enteredTaskText: string,
    enteredPriority: string,
    enteredTimeReq: string,
  ) {
    setCounter(prevCounter => prevCounter + 1)
    setTasks(prevTasks => ({
      ...prevTasks,
      [counter]: {
        task: enteredTaskText,
        priority: enteredPriority,
        timeRequired: enteredTimeReq,
      },
    }))
  }

  return (
    <View style={styles.landingScreenContainer}>
      <View style={styles.todoPageContainer}>
        <View>
          <Text style={[styles.genericText, styles.genericTitleContainer]}>
            My Flow
          </Text>
        </View>
        <TaskInput onAddTask={addTaskHandler} />
        <View style={styles.dividerContainer}></View>
        <FlatList
          data={Object.values(allTaskEntries)}
          renderItem={({ item }) => {
            return <TaskItem item={item} />
          }}
          style={styles.todoListContainer}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  landingScreenContainer: {
    backgroundColor: '#0D0714',
    height: '100%',
  },
  dividerContainer: {
    borderBottomColor: '#9E78CF',
    borderBottomWidth: 2,
    width: '90%',
    alignSelf: 'center',
  },
  todoPageContainer: {
    flexDirection: 'column',
    marginTop: '10%',
  },
  todoListContainer: {
    marginVertical: 20,
    flexDirection: 'column',
    width: '90%',
    margin: 'auto',
  },
  genericText: {
    color: 'white',
    fontWeight: 'bold',
  },
  genericTitleContainer: {
    fontSize: 20,
    textAlign: 'center',
  },
})
