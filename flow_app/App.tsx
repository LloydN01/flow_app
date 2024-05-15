import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

export default function App() {
    // Tasks
    const [enteredTaskText, setEnteredTaskText] = useState("");
    const [dailyTasks, setDailyTasks] = useState<string[]>([]);

    // Priority
    const [enteredPriority, setEnteredPriority] = useState("0 - N/A");
    const [priority, setPriorityArr] = useState<string[]>([]);

    // Time Required
    const [enteredTimeReq, setTimeReq] = useState("0");
    const [timeReq, setTimeReqArr] = useState<string[]>([]);

    // Task Objects
    const [allTaskEntries, setTasks] = useState<{
        [key: number]: { task: string; priority: string; timeRequired: string };
    }>({});
    const [counter, setCounter] = useState(0);

    function taskInputHandler(taskEntered: string) {
        setEnteredTaskText(taskEntered);
    }

    function priorityInputHandler(priorityEntered: string) {
        setEnteredPriority(priorityEntered);
    }

    function timeReqInputHandler(timeReqEntered: string) {
        setTimeReq(timeReqEntered);
    }

    function addTaskHandler() {
        setCounter((prevCounter) => prevCounter + 1);
        setTasks((prevTasks) => ({
            ...prevTasks,
            [counter]: {
                task: enteredTaskText,
                priority: enteredPriority,
                timeRequired: enteredTimeReq,
            },
        }));
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
                <View style={styles.todoInputContainer}>
                    <TextInput
                        style={[
                            styles.newTaskInputContainer,
                            styles.textInputConatiner,
                        ]}
                        placeholder="Task Description"
                        placeholderTextColor="white"
                        onChangeText={taskInputHandler}
                    />
                    <View style={styles.todoExtraInfoContainer}>
                        <TextInput
                            style={[
                                styles.textInputConatiner,
                                styles.textInputAdditional,
                            ]}
                            placeholder="Priority"
                            placeholderTextColor="white"
                            onChangeText={priorityInputHandler}
                        />
                        <TextInput
                            style={[
                                styles.textInputConatiner,
                                styles.textInputAdditional,
                            ]}
                            placeholder="Time Required"
                            placeholderTextColor="white"
                            onChangeText={timeReqInputHandler}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.taskSubmitButton}
                        onPress={addTaskHandler}
                    >
                        <Text style={styles.buttonText}>Add to your flow</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.dividerContainer}></View>
                <View style={styles.todoListContainer}>
                    {Object.keys(allTaskEntries).map((key: string) => {
                        const taskEntry = allTaskEntries[Number(key)];
                        return (
                            <View
                                style={[styles.genericTaskContainer]}
                                key={key}
                            >
                                <Text style={[styles.genericTaskText]}>
                                    Task: {taskEntry.task}
                                </Text>
                                <Text style={[styles.genericTaskText]}>
                                    Priority: {taskEntry.priority}
                                </Text>
                                <Text style={[styles.genericTaskText]}>
                                    Time Required: {taskEntry.timeRequired}
                                </Text>
                            </View>
                        );
                    })}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    landingScreenContainer: {
        backgroundColor: "#0D0714",
        height: "100%",
    },
    dividerContainer: {
        borderBottomColor: "#9E78CF",
        borderBottomWidth: 2,
        width: "90%",
        alignSelf: "center",
    },
    todoInputContainer: {
        flexDirection: "column",
        marginHorizontal: 10,
        marginVertical: 20,
        alignItems: "center",
    },
    todoExtraInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "95%",
    },
    textInputConatiner: {
        backgroundColor: "#1D1825",
        paddingHorizontal: 10,
        borderRadius: 10,
        color: "white",
        height: 40,
        marginVertical: 5,
    },
    textInputAdditional: {
        width: "48.5%",
    },
    newTaskInputContainer: {
        width: "95%",
    },
    todoPageContainer: {
        flexDirection: "column",
        marginTop: "10%",
    },
    todoListContainer: {
        marginVertical: 20,
        flexDirection: "column",
        width: "90%",
        margin: "auto",
    },
    taskSubmitButton: {
        width: "95%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#9E78CF",
        marginVertical: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 15,
    },
    genericText: {
        color: "white",
        fontWeight: "bold",
    },
    genericTitleContainer: {
        fontSize: 20,
        textAlign: "center",
    },
    genericTaskContainer: {
        backgroundColor: "#15101C",
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
    },
    genericTaskText: {
        color: "#9E78CF",
    },
});
