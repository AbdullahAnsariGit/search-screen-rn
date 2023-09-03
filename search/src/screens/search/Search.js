import { FlatList, StyleSheet, Text, View, Keyboard } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import Fuse from 'fuse.js';
import CustomList from '../../components/CustomList';
import { fetchPosts } from '../../helpers/apiServices';
import CustomTextInput from '../../components/CustomTextInput';
import CustomLoader from '../../components/CustomLoader';
import CustomText from '../../components/CustomText';
import { family, size } from '../../utils/theme/sizes';
import { colors } from '../../utils/theme/colors';
import CustomHeader from '../../components/CustomHeader';

const Search = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);
    let searchTimeout;

    const onChangeSearch = (query) => {
        setSearchQuery(query);
        clearTimeout(searchTimeout);

        searchTimeout = setTimeout(() => {
            performSearch(query);
            Keyboard.dismiss();
        }, 500);
    };

    const performSearch = (query) => {
        setIsLoading(true);
        if (query) {
            const fuse = new Fuse(posts, {
                keys: ['title', 'body'],
                includeScore: true,
                threshold: 0.4,
            });

            const results = fuse.search(query);
            setIsLoading(false);
            setFilteredPosts(results.map((result) => result.item));
        } else {
            setIsLoading(false);
            setFilteredPosts(posts);
        }
    };

    useEffect(() => {
        fetchPosts()
            .then((data) => {
                setIsLoading(true);
                setPosts(data);
                setFilteredPosts(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error occur', error);
                setIsLoading(false);
            });
    }, []);

    const renderItem = ({ item }) => {
        return <CustomList item={item} />;
    };

    const ItemSeparatorComponent = () => {
        return <View style={styles.lineSeparator} />;
    };

    return (
        <>
            <CustomHeader />
            <View style={styles.container}>
                <CustomTextInput searchQuery={searchQuery} onChangeSearch={onChangeSearch} />
                {isLoading ? (<CustomLoader visible={isLoading} />) : filteredPosts.length === 0 ? (
                    <CustomText text='No Data Found!' font={family.SP_Bold} size={size.xsmall} colors={colors.neon_green} style={styles.text} />
                ) : (
                    <FlatList
                        data={filteredPosts}
                        ItemSeparatorComponent={ItemSeparatorComponent}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                    />
                )}
            </View>
        </>
    );
};

export default Search;
