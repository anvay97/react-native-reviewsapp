import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
    },

    titleText:{
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#333'
    },

    paragraph:{
        marginVertical: 8,
        lineHeight: 20
    }
});

export default GlobalStyles;
