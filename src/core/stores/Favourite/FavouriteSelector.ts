import {FavouriteModuleState} from '../../types'

export function getFavourite (state:FavouriteModuleState){
    return state.favourite
}

export default {getFavourite}