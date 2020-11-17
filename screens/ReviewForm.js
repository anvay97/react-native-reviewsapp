import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import GlobalStyles from '../styles/Global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/FlatButton';

const ReviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('is-num-1-5', 'Rating Must Be a Number 1 - 5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0
    })

})

const ReviewForm = ({ AddReview }) => {
    return (
        <View style={GlobalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={ReviewSchema}
                onSubmit={(values, actions) => {
                    AddReview(values);
                    actions.resetForm();
                }}
            >
                {
                    (props) => (
                        <View>
                            <TextInput
                                style={GlobalStyles.input}
                                placeholder='Enter Review Title'
                                onChangeText={props.handleChange('title')}
                                value={props.values.title}
                                onBlur={props.handleBlur('title')}
                            />

                            <Text style={GlobalStyles.errorText}>{ props.touched.title && props.errors.title}</Text>

                            <TextInput
                                multiline
                                minHeight={60}
                                style={GlobalStyles.input}
                                placeholder='Enter Review Body'
                                onChangeText={props.handleChange('body')}
                                value={props.values.body}
                                onBlur={props.handleBlur('body')}
                                
                            />

                            <Text style={GlobalStyles.errorText}>{props.touched.body && props.errors.body}</Text>


                            <TextInput
                                keyboardType='numeric'
                                style={GlobalStyles.input}
                                placeholder='Enter Review Rating (1-5)'
                                onChangeText={props.handleChange('rating')}
                                value={props.values.rating}
                                onBlur={props.handleBlur('rating')}
                            />

                            <Text style={GlobalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>



                        <FlatButton
                            text='submit' 
                            onPress={props.handleSubmit}

                        />

                        </View>
                    )
                }
            </Formik>



        </View>
    )
}


export default ReviewForm;