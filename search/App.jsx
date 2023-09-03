import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {family, size} from './src/utils/theme/sizes'
import {Search} from './src/screens'
import LinearGradient from 'react-native-linear-gradient'
const App = () => {
    return (<LinearGradient style={
            styles.container
        }
        colors={['#E0FFFF', '#87CEFA']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
    >
        <Search/>
    </LinearGradient>)
}

export default App
const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
