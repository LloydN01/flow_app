import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { GLOBAL_COLOURS } from '../../constants/colour'

function LoadingOverlay() {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size='large'
                color={GLOBAL_COLOURS.PURPLE_TEXT}
            />
        </View>
    )
}

export default LoadingOverlay

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GLOBAL_COLOURS.DARK_NAVY,
    },
})
