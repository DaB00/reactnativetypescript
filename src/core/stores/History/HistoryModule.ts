import {AnyAction, Reducer} from 'redux';
import {IModule} from 'redux-dynamic-modules';
import {
  HistoryAction,
  HistoryActionType,
  HistoryState,
  HistoryModuleState,
} from '../../types';

export const intialState: HistoryState = [];

const historyReducer: Reducer<HistoryState, HistoryAction> = (
  state = intialState,
  action,
) => {
  switch (action.type) {
      case HistoryActionType.ADD_HISTORY:
        if (
          state.find((data) => data.search == action.payload.search) == undefined &&
          action.payload.search != ''
        ) {
          return [action.payload, ...state];
        }
        return state;
          
    default:
      return state;
  }
};

const historyModule: IModule<HistoryModuleState> = {
  id: 'historyModule',
  reducerMap: {
    history: historyReducer as Reducer<HistoryState, AnyAction>,
  },
  initialActions: [],
};

export default historyModule;
