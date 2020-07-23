import {AnyAction, Reducer} from 'redux';
import {IModule} from 'redux-dynamic-modules';
import {
  FavouriteModuleState,
  FavouriteActionType,
  FavouriteAction,
  FavouriteState,
} from '../../types';

export const intialState:FavouriteState = [];

const favouriteReducer: Reducer<FavouriteState, FavouriteAction> = (
    state = intialState,
    action,
  ) => {
    switch (action.type) {
        case FavouriteActionType.ADD_FAVOURITE:
            return [...state, {...action.payload}]
        case FavouriteActionType.DELETE_FAVOURITE:
            return state.filter(state =>state.id!==action.payload.id)
      default:
        return state;
    }
  };
  const favouriteModule: IModule<FavouriteModuleState> = {
    id: 'favouriteModule',
    reducerMap: {
      favourite: favouriteReducer as Reducer<FavouriteState, AnyAction>,
    },
    initialActions: [],
  };
  export default favouriteModule;

