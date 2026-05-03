import { useContext, useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";
import { getALLproducts } from "../../Services/ALLproducts";
import { ProductContext } from "../../Context/ProductContest";

export default function FeatureProducts() {
  

  const{FeatureProducts, IsLoading, IsError, ExistError}=useContext(ProductContext)

  if (IsLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="my-8 mx-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 py-6">
            <div className="w-1.5 h-10 rounded-full bg-linear-to-b from-primary-500 to-primary-700" />
            <h2 className="text-4xl font-extrabold tracking-tight flex gap-2">
              <span>Featured</span>
              <span className="text-primary-600">Products</span>
            </h2>
          </div>
          <div className="py-6 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {(FeatureProducts || []).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
