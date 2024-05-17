import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../style/taskInputStyles'

type TaskInputProps = {
    onAddTask: (
        taskText: string,
        priority: string,
        timeRequired: string,
    ) => void
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
                style={[
                    styles.newTaskInputContainer,
                    styles.textInputConatiner,
                ]}
                placeholder='Task Description'
                placeholderTextColor='white'
                onChangeText={taskInputHandler}
                value={enteredTaskText}
            />
            <View style={styles.todoExtraInfoContainer}>
                <View style={styles.pickerInput}>
                    <Picker
                        style={styles.pickerInputText}
                        dropdownIconColor='white'
                        dropdownIconRippleColor='#15101C'
                        selectedValue={enteredPriority}
                        onValueChange={priorityInputHandler}
                    >
                        <Picker.Item
                            value=''
                            label='Priority'
                            enabled={false}
                        />
                        <Picker.Item
                            style={styles.pickerItem}
                            label='1 - Highest'
                            value='1 - Highest'
                        />
                        <Picker.Item
                            style={styles.pickerItem}
                            label='2 - High'
                            value='2 - High'
                        />
                        <Picker.Item
                            style={styles.pickerItem}
                            label='3 - Medium'
                            value='3 - Medium'
                        />
                        <Picker.Item
                            style={styles.pickerItem}
                            label='4 - Low'
                            value='4 - Low'
                        />
                        <Picker.Item
                            style={styles.pickerItem}
                            label='5 - Lowest'
                            value='5 - Lowest'
                        />
                    </Picker>
                </View>
                <View style={styles.pickerInput}>
                    <Picker
                        style={styles.pickerInputText}
                        dropdownIconColor='white'
                        dropdownIconRippleColor='#15101C'
                        selectedValue={enteredTimeReq}
                        onValueChange={timeReqInputHandler}
                    >
                        <Picker.Item value='' label='Time' enabled={false} />
                        <Picker.Item
                            style={styles.pickerItem}
                            label='Days'
                            value='Days'
                        />
                        <Picker.Item
                            style={styles.pickerItem}
                            label='> 12 Hours'
                            value='> 12 Hours'
                        />
                        <Picker.Item
                            style={styles.pickerItem}
                            label='< 12 Hours'
                            value='< 12 Hours'
                        />
                        <Picker.Item
                            style={styles.pickerItem}
                            label='> 30 Minutes'
                            value='> 30 Minutes'
                        />
                        <Picker.Item
                            style={styles.pickerItem}
                            label='< 30 Minutes'
                            value='< 30 Minutes'
                        />
                    </Picker>
                </View>
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
