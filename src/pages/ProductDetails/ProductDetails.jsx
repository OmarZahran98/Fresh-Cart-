
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router";
import { getProductsbyId } from "../../Services/ALLproducts";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import ProductTabs from "../../components/ProductTabs/ProductTabs";

export default function ProductDetails() {
  
  const [productDetails, SetIsProductDetails] = useState(null);
  const [IsLoading, SetIsLoading] = useState(true);
  const[IsError,SetIsError] = useState(false)
  const { id } = useParams();

  async function FetchProductDetails() {
    try {
      SetIsLoading(true);
      const response = await getProductsbyId({ id });
      console.log(response);

      if (response.success) {
        SetIsLoading(false);
        SetIsProductDetails(response.data.data);
      }
    } catch (error) {
      SetIsLoading(false);
      SetIsError(true);
    }
  }

  useEffect(() => {
    FetchProductDetails();
  }, []);

  if (IsLoading) {
    return <Loading />;
  }
  return (
    <>
    <ProductInfo productDetails={productDetails}/>
    <ProductTabs IsProductDetails={ProductDetails}/>
    </>
  );
}
