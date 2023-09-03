import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import CustomText from './CustomText';
import LottieView from 'lottie-react-native';
const { width } = Dimensions.get('screen')
const CustomLoader = ({ visible }) => {
    return (
        <View style={styles.container}>
            <LottieView
                source={require('./animation.json')}
                autoPlay
                loop
                style={styles.lottie}
            />
            <CustomText text='Loading...' />
        </View>
    )
}

export default CustomLoader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: width,
        alignItems: 'center',
        marginLeft: -15
    },
    lottie: {
        width: 100,
        height: 100
    }
})