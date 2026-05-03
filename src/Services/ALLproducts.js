import { ApiClient } from "./API-client";

export async function getALLproducts({
  page,
  keyword,
  category,
  brand,
  priceGreaterThan,
  priceLessThan,
  sortedby,
}={}) {
  try {
    const options = {
      url: `/products?${page ? `page=${page}` : ""}
      ${keyword ? `&keyword=${keyword}` : ""}
      ${priceGreaterThan? `&price[gte]=${priceGreaterThan}`: ""}
      ${priceLessThan ? `&price[lte] =${priceLessThan}` : ""}
      ${sortedby ? `&sort =${sortedby}` : ""}
      ${category ? `&category[in] =${category}` : ""}
      ${brand ? `&brand =${brand}` : ""}`,
      method: "GET",
    };
    const response = await ApiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getProductsbyId({id}) {
  try {
    const options = {
      url: `/products/${id}`,
      method: "GET",
    };
    const response = await ApiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
