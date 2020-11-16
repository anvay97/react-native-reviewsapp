import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import GlobalStyles from '../styles/Global';


const About = () =>{
    return(
        <View style={GlobalStyles.container} >
            <Text style={GlobalStyles.titleText}>About Screen</Text>
        </View>
    )
}


export default About;