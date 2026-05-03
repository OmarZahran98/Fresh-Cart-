import { ApiClient } from "./API-client"

export async function getAllBrands(){
   try {
     const options ={
        url : "/brands",
        method : "GET",
    }
    const response = await ApiClient.request(options);
    return response;
   } catch (error) {
    throw error
    
   }
}