import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetail';

const screens = {
    Home:{
        screen: Home,
        navigationOptions: {
            title: 'GameZone'
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