import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetail';
import Header from '../shared/Header';
import { Image } from 'react-native';

const screens = {
    Home:{
        screen: Home,
        navigationOptions: ({ navigation })=>{
            return {
                headerTitle: ()=> <Header navigation={navigation} title='Home  ' />
                
            }
        }
    },

    ReviewDetail:{
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details'
        }
    }
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: 'coral',
        }
    }
});

export default HomeStack;