import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/theme/colors'
import Shadow from '../helpers/Shadow'
import CustomText from './CustomText'
import { family } from '../utils/theme/sizes'

const CustomList = ({ item }) => {
    return (
        <View style={styles.container}>
            <CustomText text={item?.title} font={family.SP_Bold} />
            <CustomText expandable={true} intialLength={110} text={item?.body} />
        </View>
    )
}

export default CustomList

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: colors.white,
        borderRadius: 10,
        ...Shadow.shadow3
    }
})