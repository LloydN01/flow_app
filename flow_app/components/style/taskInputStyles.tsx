import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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