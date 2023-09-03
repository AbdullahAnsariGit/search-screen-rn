import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/theme/colors'
import Shadow from '../helpers/Shadow'
import CustomText from './CustomText'
import { family, size } from '../utils/theme/sizes'
import LinearGradient from 'react-native-linear-gradient'

const CustomList = ({ item }) => {
    return (
        <LinearGradient style={styles.container} colors={[colors.black, colors.neon_accent]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}>
            <CustomText text={item?.title?.toUpperCase()} font={family.SP_Bold} size={size.xsmall} colors={colors.neon_green} />
            <CustomText expandable={true} intialLength={110} font={family.SP_Italic} text={item?.body} colors={colors.white} size={size.xsmall} />
        </LinearGradient>
    )
}

export default CustomList

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: colors.white,
        borderRadius: 10,
        marginHorizontal: 4,
        ...Shadow.shadow5
    }
})