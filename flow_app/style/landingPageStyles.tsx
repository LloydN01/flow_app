import { StyleSheet } from 'react-native'
import { GLOBAL_COLOURS } from '../constants/colour'

export const styles = StyleSheet.create({
    landingScreenContainer: {
        backgroundColor: GLOBAL_COLOURS.DARK_NAVY,
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
        borderBottomColor: GLOBAL_COLOURS.PURPLE_TEXT,
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
    bottomSection: {
        height: '100%',
        width: '100%',
    },
})
