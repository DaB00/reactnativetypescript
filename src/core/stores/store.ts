import { createStore, IModuleStore } from 'redux-dynamic-modules';
import { getThunkExtension } from 'redux-dynamic-modules-thunk';
import {HistoryModuleState} from '../types'
import {historyModule,historySelectors} from './History'
//favourite
import {FavouriteModuleState} from '../types'
import {favouriteSelectors,favouriteModule} from './Favourite'

export interface RootState extends HistoryModuleState,FavouriteModuleState{}

const extensions  = [getThunkExtension()]

export const store :IModuleStore<RootState> = createStore(
    {
        initialState:{},
        extensions,
    },
    historyModule,
    favouriteModule
)


export {favouriteSelectors,favouriteModule,historyModule,historySelectors}
export default store