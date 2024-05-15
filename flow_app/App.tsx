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

    // Time Required
    const [enteredTimeReq, setTimeReq] = useState("0");

    // Task Objects
    const [allTaskEntries, setTasks] = useState<{
        [key: number]: { task: string; priority: string; timeRequired: string };
    }>({});
    const [counter, setCounter] = useState(0);

    function taskInputHandler(taskEntered: string) {
        setEnteredTaskText(taskEntered);
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
                            styles.genericTextContainer,
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
                        />
                        <TextInput
                            style={[
                                styles.textInputConatiner,
                                styles.textInputAdditional,
                            ]}
                            placeholder="Time Required"
                            placeholderTextColor="white"
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
                    {Object.keys(allTaskEntries).map((key) => {
                        const taskEntry = allTaskEntries[key];
                        return (
                            <View key={key}>
                                <Text style={[styles.genericTextContainer]}>
                                    Task: {taskEntry.task}
                                </Text>
                                <Text style={[styles.genericTextContainer]}>
                                    Priority: {taskEntry.priority}
                                </Text>
                                <Text style={[styles.genericTextContainer]}>
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
    genericTextContainer: {
        color: "white",
        fontWeight: "bold",
    },
    genericTitleContainer: {
        fontSize: 20,
        textAlign: "center",
    },
});
