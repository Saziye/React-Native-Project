import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,Text
} from 'react-native';
import useResults from '../hooks/useResult';
import NewsList from '../components/NewsList';
 
const NewsScreen = ({ navigation }) => { 
    const category = navigation.state.params.category;
    const [news] = useResults(category);
    // console.log(news.articles);
    return (
        <SafeAreaView style= {styles.container}>    
                <NewsList news={news.articles} />
        </SafeAreaView>
    );  
};


NewsScreen.navigationOptions = ({navigation}) =>{
    return {
        title:  <Text>{navigation.state.params.title.toUpperCase()}</Text>, //Header başlığı
        headerStyle: {
            backgroundColor: '#696969'
        },
        headerTitleAlign: 'center',
        headerTintColor: '#FFF',
        headerTitleStyle: {
            //fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
            //fontSize: 20
        },
    };
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
    }
});

export default NewsScreen; 