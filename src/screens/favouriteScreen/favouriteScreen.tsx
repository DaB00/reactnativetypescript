import React, {FC, useState} from 'react';
import {SafeAreaView, Text,TextInput,View,Image,StyleSheet,FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CardMovie from '../../components/cardMovie.js'
import {useSelector, useDispatch} from 'react-redux';
import {favouriteSelectors, favouriteAction} from '../../core/index';
interface FavouriteScreen {}


const FavouriteScreen: FC<FavouriteScreen> = (props) => {
 const navigation =useNavigation()
 const state = useSelector(favouriteSelectors.getFavourite);
  
  return (
    <SafeAreaView>
     <FlatList
        data={state}
        keyExtractor={(item,index) =>`${item.id.toString}${index}`}
        renderItem={({item}) => (
          <CardMovie
            title={item.title}
            release_date={item.release_date}
            overview={item.overview}
            ImageUrl={item.ImageUrl}
            navigation={() =>
              navigation.navigate('DetailScreen', {
                release_date: item.release_date,
                overview: item.overview,
                ImageUrl: item.ImageUrl,
                vote_average: item.vote_average,
                id: item.id,
                title: item.title,
              })
            }
          />
        )}
       
      />
    </SafeAreaView>
  );
};

export default FavouriteScreen;
