import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import GlobalStyles from '../styles/Global';


const ReviewDetails = ({ navigation }) =>{

    const pressHandler = () =>{
        navigation.goBack();
    }

    return(
        <View style={GlobalStyles.container} >
            <Text style={GlobalStyles.titleText}>{navigation.getParam('title')}</Text>
            <Text style={GlobalStyles.titleText}>{navigation.getParam('body')}</Text>
            <Text style={GlobalStyles.titleText}>{navigation.getParam('rating')}</Text>    
        </View>
    )
}

export default ReviewDetails;