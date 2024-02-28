import axios from "axios";

export const BACKEND_POINT="https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async ()=>{
    try {
        const response=await axios.get(`${BACKEND_POINT}/albums/top`);
        return response.data;
    } catch (error) {
        console.log("fetchTopAlbum error",error);
    }
}

export const fetchNewAlbums= async ()=>{
    try {
        const response = await axios.get(`${BACKEND_POINT}/albums/new`);
        return response.data;
    } catch (error) {
        console.log("fetchNewAlbum error",error);
        
    }
}
export const fetchAllSongs=async ()=>{
    try {
        const response=await axios.get(`${BACKEND_POINT}/songs`);
         return response.data;
    } catch (error) {
        console.log("fetchAllSongs error");
        
    }
}