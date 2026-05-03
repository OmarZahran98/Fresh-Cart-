import { ApiClient } from "./API-client"

export async function getAllCategories(){
   try {
     const options ={
        url : "/categories",
        method : "GET",
    }
    const response = await ApiClient.request(options);
    return response;
   } catch (error) {
    throw error
    
   }
}