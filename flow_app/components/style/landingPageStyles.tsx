import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    completedListContainer: {
        marginTop: -20,
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