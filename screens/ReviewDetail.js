import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import GlobalStyles, { Images } from '../styles/Global';
import Card from '../shared/Card';


const ReviewDetails = ({ navigation }) =>{

    const rating = navigation.getParam('rating');

    const pressHandler = () =>{
        navigation.goBack();
    }

    return(
        <View style={GlobalStyles.container} >
            <Card>
                <Text style={GlobalStyles.titleText}>{navigation.getParam('title')}</Text>
                <Text style={GlobalStyles.titleText}>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>GameZone Rating : </Text>
                    <Image source={Images.ratings[rating]} />
                </View>    
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
      }
})

export default ReviewDetails;