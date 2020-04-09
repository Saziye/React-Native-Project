import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import {withNavigation } from 'react-navigation'; //navigation için

const MenuItem = ({buttonTitle,navigation,image,category}) => {
    //console.log(category);
    return (
        <View style={styles.menuItem}>
            <TouchableOpacity onPress={() => navigation.navigate('NewsScreen', { category:category, title:buttonTitle })}>
                <View style={styles.view}>
                    <Text style={styles.text}>{buttonTitle}</Text>
                </View>
                <Image
                    source= {image}
                    style= {styles.image}
                />
            </TouchableOpacity>
        </View>      
    );    
};

const styles = StyleSheet.create({
    menuItem: {
        width: '50%', //her satıra 2 element
        height: '90%',
        padding:20,
        // borderColor: 'red',
        // borderWidth:2
    },
    image: {
        width: 170,
        height: 180,
        opacity: 0.8,
        borderColor: '#CFCFCF',
        borderWidth: 3,
        borderRadius: 10,
        marginTop: 5,
    },
    view: {
        backgroundColor: 'transparent',
    },
    text: {
        fontSize: 24,
        textAlign: 'center',
        color: '#696969',
        // paddingLeft: 50,
        justifyContent:'center',
        fontFamily:'Roboto'
    }
});

export default withNavigation(MenuItem);