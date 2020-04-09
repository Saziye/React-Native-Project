import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import MenuItem from '../components/MenuItem';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.top}>
                    <Text style={styles.headerText}> N E W S</Text>
                </View>
                
                <View style={styles.menuContainer}>
                    <MenuItem buttonTitle = "General" category='general' image= {require('../images/general.jpg')} />
                    <MenuItem buttonTitle ="Sport" category='sport'image= {require('../images/sport.jpg')} />
                    <MenuItem buttonTitle ="Technology" category='technology' image= {require('../images/technology.jpg')} />
                    <MenuItem buttonTitle ="Health"  category='health' image= {require('../images/health.jpg')} />
                    <MenuItem buttonTitle ="Music" category='music' image= {require('../images/music.jpg')} />
                    <MenuItem buttonTitle ="Science" category='science' image= {require('../images/science.jpg')} />
                    <MenuItem buttonTitle ="Economy" category='business' image= {require('../images/economy.jpg')} />
                    <MenuItem buttonTitle ="Education" category='education' image= {require('../images/education.jpg')} />
                    <MenuItem buttonTitle ="Cinema" category='cinema' image= {require('../images/cinema.jpg')} />
                </View>
            </ScrollView>
        </View>
    );   
};

HomeScreen.navigationOptions = () =>{
    return {
        // title: 'NEWS',
        // headerStyle: {
        //     backgroundColor: '#696969'
        // },
        // headerTitleAlign: 'center',
        // headerTintColor: '#FFF',
        // headerTitleStyle: {
        //     //fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
        //     //fontSize: 20
        // },
        headerShown:false 
    };
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
    },
    top: {
        height:'8%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
        // borderColor:'red',
        // borderWidth:3
    },
    headerText: {
        color: '#fff', //white
        fontSize: 28,
        borderColor: '#CFCFCF',
        borderWidth:2,
        borderRadius: 10,
        borderStyle:'dotted',
        padding:10,
        paddingLeft:50,
        paddingRight:50
    },
    menuContainer: {
        height: '20%',
        flexDirection: 'row',
        flexWrap: 'wrap', //alt satıra geçmesi için
        //  borderColor:'red',
        //  borderWidth:3

    }
});

export default HomeScreen;