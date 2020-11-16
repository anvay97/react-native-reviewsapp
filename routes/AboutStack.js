import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/About';

const screens = {
    About:{
        screen: About,
        navigationOptions: {
            title: 'About GameZone'
        }
    },

}

const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: 'coral',
        }
    }
});

export default AboutStack;