import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    landingScreenContainer: {
        backgroundColor: '#0D0714',
        height: '100%',
        paddingTop: 5,
    },
    topPageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        margin: 'auto',
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
    completedListContainer: {},
    genericText: {
        color: 'white',
        fontWeight: 'bold',
    },
    genericTitleContainer: {
        fontSize: 20,
        textAlign: 'center',
    },
    hideEmptySign: {
        display: 'none',
    },
    showEmptySign: {
        color: '#9E78CF',
        fontWeight: 'bold',
        margin: 'auto',
    },
})
