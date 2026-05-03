import { createContext, useState } from "react";
import {
  AddProductToCart,
  GetCartItems,
  RemoveItemFromCart,
  UpdateProductQuantity,
} from "../Services/CartServices";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [CartInfo, SetCartInfo] = useState(null);
  const [IsLoading, SetIsLoading] = useState(true);
  const [IsError, SetIsError] = useState(false);
  const [ExistError, SetExistError] = useState(null);

  async function HandleAddingProductCart({ id }) {
    try {
      SetIsLoading(true);
      const response = await AddProductToCart({ id });
      console.log(response);

      if (response.success) {
        SetIsLoading(false);
        toast.success(response.data.message);
        SetCartInfo(response.data);
      } else {
        SetIsLoading(false);
        SetIsError(true);
        toast.error(response.message || "Failed to add product to cart");
      }
    } catch (error) {
      SetIsLoading(false);
      SetIsError(true);
      SetExistError(error);
      toast.error("An error occurred while adding product to cart");
    }
  }

  async function HandleGetCartItems() {
    try {
      SetIsLoading(true);
      const response = await GetCartItems();

      if (response.success) {
        SetIsLoading(false);
        SetCartInfo(response.data);
      } else {
        SetIsLoading(false);
        SetIsError(true);
      }
    } catch (error) {
      SetIsLoading(false);
      SetIsError(true);
      SetExistError(error);
    }
  }

  async function RemoveCartItems({ id }) {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      console.log(result);

      if (result.isConfirmed) {
        const toastId = toast.loading("We are deleting cart item");
        const response = await RemoveItemFromCart({ id });
        if (response.success) {
          toast.dismiss(toastId)
          SetCartInfo(response.data);
        }
      }
    } catch (error) {
      console.log(error);

      SetIsLoading(false);
      SetIsError(true);
      SetExistError(error);
    }
  }

  async function HandleUpdateProductQuantity({ id, count }) {
    try {
      SetIsLoading(true);
      const response = await UpdateProductQuantity({ id, count });

      if (response.success) {
        SetCartInfo(response.data);
        SetIsLoading(false);
      } else {
        SetIsLoading(false);
        toast.error(response.message || "Failed to update quantity");
      }
    } catch (error) {
      console.log(error);
      SetIsLoading(false);
      toast.error("An error occurred while updating quantity");
    }
  }

  useEffect(() => {
    HandleGetCartItems();
  }, []);

  return (
    <CartContext.Provider
      value={{
        CartInfo,
        IsLoading,
        IsError,
        ExistError,
        HandleAddingProductCart,
        HandleGetCartItems,
        RemoveCartItems,
        HandleUpdateProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
