import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Home from './screens/Home';
import About from './screens/About';
import ReviewDetails from './screens/ReviewDetail';
import Navigator from './routes/Drawer';

const getFonts = () =>{
  return Font.loadAsync({
      'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
    }) 
}

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
      return (
        <Navigator />
        // <Home />
        // <About/>
        // <ReviewDetails />
    );
  }else{
    return(
      <AppLoading 
        startAsync={getFonts}
        onFinish={()=> setFontsLoaded(true)}
      />
    )
  }

}

const styles = StyleSheet.create({
  
});
