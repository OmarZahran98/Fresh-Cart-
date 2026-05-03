import { createContext, useState, useEffect } from "react";
import {
  AddProductToWishlist,
  GetWishlistItems,
  RemoveItemFromWishlist,
} from "../Services/WishlistServices";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const WishlistContext = createContext(null);

export default function WishlistProvider({ children }) {
  const [WishlistInfo, setWishlistInfo] = useState(null);
  const [IsLoading, setIsLoading] = useState(true);

async function HandleAddToWishlist({ id }) {
  try {
    setIsLoading(true);
    const response = await AddProductToWishlist({ id });
    
    console.log("FULL ADD RESPONSE:", JSON.stringify(response, null, 2)); // 👈 HERE

    if (response.success) {
      await HandleGetWishlistItems();
      toast.success("Product added to wishlist");
    } else {
      toast.error(response.message || "Failed to add product to wishlist");
    }
  } catch (error) {
    console.log("ADD ERROR:", error);
    toast.error("An error occurred while adding to wishlist");
  } finally {
    setIsLoading(false);
  }
}

async function HandleGetWishlistItems() {
  try {
    setIsLoading(true);
    const response = await GetWishlistItems();

    if (response.success) {
  setWishlistInfo(response.data.data); 
}
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
}

  async function HandleRemoveFromWishlist({ id }) {
    try {
      const result = await MySwal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const toastId = toast.loading("Removing item from wishlist...");
        const response = await RemoveItemFromWishlist({ id });
        
        if (response.success) {
          toast.dismiss(toastId);
          setWishlistInfo(response.data);
          toast.success("Item removed from wishlist");
        }
      }
    } catch (error) {
      toast.error("An error occurred while removing from wishlist");
    }
  }

  useEffect(() => {
    HandleGetWishlistItems();
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        WishlistInfo,
        IsLoading,
        HandleAddToWishlist,
        HandleGetWishlistItems,
        HandleRemoveFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
