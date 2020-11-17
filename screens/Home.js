import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import GlobalStyles from '../styles/Global';
import Card from '../shared/Card';
import ReviewForm from './ReviewForm';
import { MaterialIcons } from '@expo/vector-icons';


const Home = ({ navigation }) =>{



    const [modalOpen, setmodalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);

    const AddReview = (review) =>{
        review.key = Math.random().toString();
        setReviews((currReview)=>{
            return [review, ...currReview ];
        });

        setmodalOpen(false);
    }
    

    return(
        <View style={GlobalStyles.container} >

                <Modal visible={modalOpen} animationType='slide'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.modalContent}>
                            <MaterialIcons
                                name='close'
                                size={24}
                                onPress={() => setmodalOpen(false)}
                                style={{...styles.modalToggle, ...styles.modalClose}}

                            />
                            <ReviewForm AddReview={AddReview} />
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>


            <MaterialIcons 
                name='add'
                size={24}
                onPress={()=> setmodalOpen(true)}
                style={styles.modalToggle}
            
            />

            <FlatList 
                data={reviews}
                renderItem={({ item })=>{
                    return(
                        <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetail', item)}>
                            <Card>
                                <Text style={GlobalStyles.titleText}>{ item.title }</Text>
                            </Card>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalClose:{
        marginTop: 20,
        marginBottom: 0
    },

    modalToggle:{
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },

    modalContent:{
        flex: 1
    }
})


export default Home;