import { ApiClient } from "./API-client";

export async function AddProductToWishlist({ id }) {
  try {
    const options = {
      url: "/wishlist",
      method: "POST",
      data: {
        productId: id,
      },
    };

    const response = await ApiClient.request(options);
    return response;
  } catch (error) {
    // Return error in consistent format
    if (error.response) {
      return {
        success: false,
        message: error.response.data?.message || "Failed to add to wishlist",
      };
    }
    return {
      success: false,
      message: "Network error occurred",
    };
  }
}

export async function GetWishlistItems() {
  try {
    const options = {
      url: "/wishlist",
      method: "GET",
    };

    const response = await ApiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function RemoveItemFromWishlist({ id }) {
  try {
    const options = {
      url: `/wishlist/${id}`,
      method: "DELETE",
    };

    const response = await ApiClient.request(options);
    return response;
  } catch (error) {
    if (error.response) {
      return {
        success: false,
        message: error.response.data?.message || "Failed to remove from wishlist",
      };
    }
    return {
      success: false,
      message: "Network error occurred",
    };
  }
}
