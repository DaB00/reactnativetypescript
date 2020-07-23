import React, {FC, useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {api} from '../../Api/SCBmovieAPI';
import {MovieListScreenScreenRouteProp} from '../../navigation/navigationRoute';
import {types} from '@babel/core';

import CardMovie from '../../components/cardMovie.js';

interface MovieListScreen {}
type DataMoive = [
  {
    id: number;
    overview: string;
    title: string;
    vote_average: number;
    release_date: string;
    index: string;
  },
];

const MovieListScreen: FC<MovieListScreen> = (props) => {
  const navigation = useNavigation();
  const route = useRoute<MovieListScreenScreenRouteProp>();
  const {textSearch} = route.params;
  const ImageUrl: string = 'https://image.tmdb.org/t/p/w92';
  const [data, setData] = useState<DataMoive|any>([]);
  const [pages, setPages] = useState<number>(1);

  useEffect(() => {
    fetapimovie(textSearch, pages);
    navigation.setOptions({
      title: '',
    });
  }, []);

  const fetapimovie = async (textSearch: string, pages: number) => {
    const res = await api.get('/api/movies/search', {
      params: {query: textSearch, page: pages},
    });

    setData(data.concat(res.data.results));
    setPages(pages + 1);
  };
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item,index) =>`${item.id.toString}${index}`}
        renderItem={({item}) => (
          <CardMovie
            title={item.title}
            release_date={item.release_date}
            overview={item.overview}
            ImageUrl={`${ImageUrl}${item.poster_path}`}
            navigation={() =>
              navigation.navigate('DetailScreen', {
                release_date: item.release_date,
                overview: item.overview,
                ImageUrl: `${ImageUrl}${item.poster_path}`,
                vote_average: item.vote_average,
                id: item.id,
                title: item.title,
              })
            }
          />
        )}
        onEndReachedThreshold={0.3}
        onEndReached={() => fetapimovie(textSearch, pages)}
      />
    </SafeAreaView>
  );
};

export default MovieListScreen;
