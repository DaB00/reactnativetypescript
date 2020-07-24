import React, {FC, useState, useEffect,useLayoutEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {MovieDetailScreenScreenRouteProp} from '../../navigation/navigationRoute';
import {useSelector, useDispatch} from 'react-redux';
import {favouriteSelectors, favouriteAction} from '../../core/index';

interface MovieDetailScreen {}

const MovieDetailScreen: FC<MovieDetailScreen> = (props) => {
  const route = useRoute<MovieDetailScreenScreenRouteProp>();
  const navigation = useNavigation();
  const {
    release_date,
    overview,
    ImageUrl,
    vote_average,
    title,
    id,
  } = route.params;
  const state = useSelector(favouriteSelectors.getFavourite);
  const dispatch = useDispatch();
useLayoutEffect(() => {
  navigation.setOptions({
    title: '',
    headerRight: () => {
      return (
        <View>
          <Button title="Back to search" onPress={()=>navigation.navigate('SearchScreen')} />
        </View>
      );
    },
  });
}, [])
  


  return (
    <SafeAreaView style={styles.MoviedetailContainer}>
      <View style={styles.BoxImage}>
        <Image
          style={styles.styleImage}
          source={{
            uri: ImageUrl,
          }}
        />
      </View>

      <View style={styles.styleTextBox}>
        <Text style={styles.styleTitle}>{title}</Text>
        <Text style={styles.styleFontVote}>Averrage Vote:{vote_average}</Text>
        <Text style={styles.styleFontOverview}>{overview}</Text>
      </View>
      <View style={styles.styleBoxbutton}>
        
        {state.find((text) => text.id === id) === undefined ? (
          <TouchableOpacity
            style={styles.FavouriteBox}
            onPress={() => {
              dispatch(
                favouriteAction.AddFavourite(
                  release_date,
                ImageUrl,
                vote_average,
                id,
                title,
                overview,
                ),
              );
            }}>
            <Text style={styles.fontFavourite}>Favourite</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.FavouriteBox}
            onPress={() => {
              dispatch(favouriteAction.DeleteFavourite(id));
            }}>
            <Text style={styles.fontFavourite}>Unfavourite</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  MoviedetailContainer: {flex: 1},
  BoxImage: {flex: 4, justifyContent: 'center', alignItems: 'center'},
  styleImage: {width: 230, height: '100%'},
  styleTextBox: {flex: 4},
  styleBoxbutton: {flex: 2, justifyContent: 'center'},
  FavouriteBox: {
    backgroundColor: '#ff9300',
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
  },
  fontFavourite: {fontSize: 20, color: 'white'},
  styleTitle: {fontSize: 18, fontWeight: 'bold', margin: '1%'},
  styleFontVote: {fontSize: 18, margin: '1%'},
  styleFontOverview: {fontSize: 15, margin: '2%'},
});

export default MovieDetailScreen;
