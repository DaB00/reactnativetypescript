export interface Favourite {
    release_date: string;
    ImageUrl: string;
    vote_average: number;
    id: number;
    title: string;
    overview:string
  }
  
  interface FavouriteState extends Array<Favourite> {}
  
  export default FavouriteState;