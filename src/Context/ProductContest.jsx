import { createContext, useEffect, useState } from "react";
import { getALLproducts } from "../Services/ALLproducts";

export const ProductContext = createContext(null);

export default function ProductsProvider({ children }) {
  const [FeatureProducts, SetFeatureProducts] = useState(null);
  const [IsLoading, SetIsLoading] = useState(true);
  const [IsError, SetIsError] = useState(false);
  const [ExistError, IsExistError] = useState(null);

  async function FetchProducts() {
    try {
      SetIsLoading(true);
      const response = await getALLproducts();

      if (response.success) {
        SetIsLoading(false);
        SetFeatureProducts(response.data.data);
      }
    } catch (error) {
      SetIsLoading(false);
      SetIsError(true);
      IsExistError(error)
    }
  }

  useEffect(() => {
    FetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ FeatureProducts, IsLoading, IsError, ExistError }}>
      {children}
    </ProductContext.Provider>
  );
}
