import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function App() {
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
                    <TouchableOpacity style={styles.taskSubmitButton}>
                        <Text style={styles.buttonText}>Add to your flow</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.dividerContainer}></View>
                <View style={styles.todoListContainer}>
                    <Text style={styles.genericTextContainer}>Flow List</Text>
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
        width: "90%",
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
        width: "90%",
    },
    todoPageContainer: {
        flexDirection: "column",
        marginTop: "10%",
    },
    todoListContainer: {
        marginVertical: 20,
        flexDirection: "column",
        alignItems: "center",
    },
    taskSubmitButton: {
        width: "90%",
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
