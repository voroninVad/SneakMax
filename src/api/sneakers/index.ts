// export const fetchData = async () =>{
//     try {
//         const response = await fetch(`https://959449313ee7f991.mokky.dev/sneakers`)
//          const dat = await response.json(); 
//         if (!response.ok) { 
//             throw new Error(dat.message || 'Something went wrong'); 
//         }  
//         return dat      
//     } catch (error) {
//         console.error('Error fetching:', error);
//     }
// }
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../axiosInstance";

export const getSneakers = createAsyncThunk("sneakers", async () => {
  const { data } = await instance.get(`/sneakers`);
  return data;
});