import * as React from 'react';
import { StyleSheet } from 'react-native'
import { Searchbar } from 'react-native-paper';
import { colors } from '../utils/theme/colors';
import { family, size } from '../utils/theme/sizes';
import Shadow from '../helpers/Shadow';

const CustomTextInput = ({ onChangeSearch, searchQuery }) => {

    return (
        <Searchbar
            placeholder='Search based on title or body'
            placeholderTextColor={colors.neon_green}
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.search}
            inputStyle={styles.inputText}
            iconColor={colors.neon_green}
        />
    );
};

export default CustomTextInput;

const styles = StyleSheet.create({
    search: {
        flexDirection: 'row-reverse',
        paddingRight: 20,
        borderRadius: 15,
        marginHorizontal:4,
        backgroundColor: colors.black,
        paddingVertical: 0,
        marginTop: 10,
        marginBottom: 10,
        borderWidth:1,
        borderColor:colors.neonGreen,
        ...Shadow.shadow5

    },
    inputText: {
        color: colors.white,
        fontSize: size.xsmall,
        fontFamily: family.SP_Regular
    }
})