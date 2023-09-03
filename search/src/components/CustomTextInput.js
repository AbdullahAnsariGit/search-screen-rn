import * as React from 'react';
import {StyleSheet} from 'react-native'
import FastImage from 'react-native-fast-image';
import { Searchbar } from 'react-native-paper';
import { colors } from '../utils/theme/colors';

const CustomTextInput = ({onChangeSearch, searchQuery}) => {
    // const [searchQuery, setSearchQuery] = React.useState('');

    // const onChangeSearch = query => setSearchQuery(query);

    return (
        <Searchbar
            placeholder='Search'
            // placeholderTextColor={c?.grey}
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.search}
            // icon={() => <FastImage source={icon} style={styles.img} resizeMode='contain' />}
        />
    );
};

export default CustomTextInput;

const styles = StyleSheet.create({
        search: {
            flexDirection: 'row-reverse',
            paddingRight: 20,
            borderRadius: 15,
            backgroundColor: colors.white,
            paddingVertical: 5,
            marginTop: 10,
            marginBottom: 10,
            fontSize: 4,
          },
})