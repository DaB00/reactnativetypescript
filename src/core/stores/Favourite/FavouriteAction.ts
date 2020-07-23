import {
  AddFavouriteMovie,
  DeleteFavouriteMovie,
  FavouriteActionType,
} from '../../types';

export function AddFavourite(
  release_date: string,
  ImageUrl: string,
  vote_average: number,
  id: number,
  title: string,
  overview: string,
): AddFavouriteMovie {

  
  return {
    type: FavouriteActionType.ADD_FAVOURITE,
    payload: {release_date, ImageUrl, vote_average, id, title, overview},
  };
}

export function DeleteFavourite(id: number): DeleteFavouriteMovie {
  return {
    type: FavouriteActionType.DELETE_FAVOURITE,
    payload: {id},
  };
}

export default {AddFavourite,DeleteFavourite}