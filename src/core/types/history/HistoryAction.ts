import HistoryActionType from './HistoryActionType'


export interface AddHistory{
    type:HistoryActionType.ADD_HISTORY
    payload: {search:string}
}
   
   
export type HistoryAction = AddHistory 