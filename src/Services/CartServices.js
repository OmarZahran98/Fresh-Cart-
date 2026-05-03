import { ApiClient } from "./API-client";

export async function AddProductToCart({ id }) {
  try {
    const options = {
      url: "/cart",
      method: "POST",
      data: {
        productId: id,
      },
    };

    const response = await ApiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function GetCartItems() {
  try {
    const options = {
      url: "/cart",
      method: "GET",
    };

    const response = await ApiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function RemoveItemFromCart({ id }) {
  try {
    const options = {
      url: `/cart/${id}`,
      method: "DELETE",
    };

    const response = await ApiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function UpdateProductQuantity({ id, count }) {
  try {
    const options = {
      url: `/cart/${id}`,
      method: "PUT",
      data: {
        count,
      },
    };

    const response = await ApiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
