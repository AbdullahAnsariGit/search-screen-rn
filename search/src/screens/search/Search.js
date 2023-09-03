import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './styles'
import Fuse from 'fuse.js';
import { debounce } from 'lodash';
import CustomList from '../../components/CustomList';
import { fetchPosts } from '../../helpers/apiServices';
import CustomTextInput from '../../components/CustomTextInput';


const Search = () => {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);
    const onChangeSearch = query => {
        setSearchQuery(query);
        debouncedSearch(query);
    }

    useEffect(() => {
        fetchPosts()
            .then((data) => {
                setPosts(data);
                setFilteredPosts(data);
                // setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error in component:', error);
                // setIsLoading(false);
            });
    }, []);

    const debouncedSearch = debounce((query) => {
        if (query) {
            const fuse = new Fuse(posts, {
                keys: ['title', 'body'],
                includeScore: true,
                threshold: 0.4,
            });

            const results = fuse.search(query);
            setFilteredPosts(results.map((result) => result.item));
        } else {
            setFilteredPosts(posts);
        }
    }, 300);

    const renderItem = ({ item }) => {
        return <CustomList item={item} />
    }
    const ItemSeparatorComponent = () => {
        return <View style={styles.lineSeparator} />;
    };
    return (
        <View style={styles.container}>
            <CustomTextInput searchQuery={searchQuery} onChangeSearch={onChangeSearch} />
            <FlatList
                data={filteredPosts}
                ItemSeparatorComponent={ItemSeparatorComponent}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Search
