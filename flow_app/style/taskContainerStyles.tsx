import { StyleSheet } from 'react-native'
import { GLOBAL_COLOURS } from '../constants/colour'

export const styles = StyleSheet.create({
    genericTaskContainer: {
        flexDirection: 'column',
        backgroundColor: GLOBAL_COLOURS.LIGHT_NAVY,
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
    },
    genericSubTaskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    genericTaskText: {
        color: '#9E78CF',
    },
    genericCompletedTaskText: {
        color: '#78CFB0',
        textDecorationLine: 'line-through',
    },
})
