import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
 
const NewsDetailScreen = ({navigation}) => {
    const url =  navigation.state.params.newsUri;
    return (
      <WebView source={{ uri: url }} />
    );
};

NewsDetailScreen.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.newsTitle
});

const styles = StyleSheet.create({ });
 
export default NewsDetailScreen;