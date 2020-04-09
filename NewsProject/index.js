
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import NewsScreen from './src/screens/NewsScreen';
import NewsDetailScreen from './src/screens/NewsDetailScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
 // HomeScreen: { screen: HomeScreen },
  NewsScreen: { screen: NewsScreen },
  NewsDetail: { screen: NewsDetailScreen },
});
 
const MainContainer = createAppContainer(MainNavigator);
 
AppRegistry.registerComponent(appName, () => MainContainer);