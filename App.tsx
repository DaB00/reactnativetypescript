import React from 'react';
import {} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SearchScreen from './src/screens/searchScreen/searchScreen'
import MovieDetailScreen from './src/screens/movieDetailScreen/movieDetailScreen'
import MovieListScreen from './src/screens/movieListScreen/movirListScreen'
import FavouriteScreen from './src/screens/favouriteScreen/favouriteScreen'
import {RootStackParamList} from './src/navigation/navigationRoute'
import { store } from './src/core/stores/index';
import {Provider} from 'react-redux'
const App = () => {
  const Strack = createStackNavigator<RootStackParamList>();
  return (
    <Provider store={store}>
  <NavigationContainer>
    <Strack.Navigator  initialRouteName="SearchScreen" >
      <Strack.Screen name="SearchScreen" component={SearchScreen} />
      <Strack.Screen name="DetailScreen" component={MovieDetailScreen}/>
      <Strack.Screen name="MovieListScreen" component={MovieListScreen}/>
      <Strack.Screen name="FavouriteScreen"  component={FavouriteScreen}/>
    </Strack.Navigator>
  </NavigationContainer>
  </Provider>
  );
};


export default App;
