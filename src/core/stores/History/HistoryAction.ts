import {AddHistory,HistoryActionType} from '../../types'

export function Addhistory(search:string):AddHistory{
    return{
        type:HistoryActionType.ADD_HISTORY,
        payload:{search}
    }
}

export default {Addhistory}