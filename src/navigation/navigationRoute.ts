import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  SearchScreen: undefined;
  DetailScreen: {
    release_date: string;
    ImageUrl: string;
    vote_average: number;
    id: number;
    title: string;
    overview:string
  };
  MovieListScreen: {textSearch: string; id: number};
  FavouriteScreen: undefined;
};

export type MovieListScreenScreenRouteProp = RouteProp<
  RootStackParamList,
  'MovieListScreen'
>;
export type MovieDetailScreenScreenRouteProp = RouteProp<
  RootStackParamList,
  'DetailScreen'
>;
// type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

// type ProfileScreenNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   'Profile'
// >;

// type Props = {
//   route: ProfileScreenRouteProp;
//   navigation: ProfileScreenNavigationProp;
// };
