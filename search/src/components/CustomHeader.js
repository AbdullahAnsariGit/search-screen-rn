import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/theme/colors'
import CustomText from './CustomText'
import { family, size } from '../utils/theme/sizes'

const CustomHeader = () => {
    return (
        <View style={styles.header}>
            <CustomText text='Search Post' font={family.SP_Bold} colors={colors.neon_green} size={size.normal} />
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    header: {
        paddingVertical: 18,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: colors.black,
    }
})