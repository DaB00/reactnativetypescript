export interface History {
    search:string
  }
  
  interface HistoryState extends Array<History> {}
  
  export default HistoryState;
  