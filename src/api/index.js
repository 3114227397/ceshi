import { recommendMusic,newMusic } from "./Home";
import { searchResult,hotSearch } from "@/api/Search";
import {getSongById, getLyricById} from './Play'
let recommendMusicApi = recommendMusic;
let newMusicApi = newMusic;
let searchResultApi = searchResult;
let hotSearchApi = hotSearch;
let getSongByIdApi=getSongById;
let getLyricByIdApi = getLyricById;
export {
    recommendMusicApi,
    newMusicApi,
    hotSearchApi,
    searchResultApi,
    getSongByIdApi,
    getLyricByIdApi
}