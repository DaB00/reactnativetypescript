import FavouriteActionType from './FavouriteActionType';

export interface AddFavouriteMovie {
  type: FavouriteActionType.ADD_FAVOURITE;
  payload: {
    release_date: string;
    ImageUrl: string;
    vote_average: number;
    id: number;
    title: string;
    overview: string;
  };
}

export interface DeleteFavouriteMovie {
  type: FavouriteActionType.DELETE_FAVOURITE;
  payload: {
    id: number;
  };
}

export type FavouriteAction = AddFavouriteMovie|DeleteFavouriteMovie
