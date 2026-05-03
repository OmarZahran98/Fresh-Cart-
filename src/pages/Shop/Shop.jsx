import { useContext, useEffect, useState } from "react";

import { getALLproducts } from "../../Services/ALLproducts";
import { ProductContext } from "../../Context/ProductContest";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loading from "../../components/Loading/Loading";
import Header from "../../components/Header/Header";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Shop() {
  

  const{FeatureProducts, IsLoading, IsError, ExistError}=useContext(ProductContext)

  if (IsLoading) {
    return <Loading />;
  }

  return (
    <>
    <div className="bg-green-500 text-white py-12">
        <div className="container mx-auto px-6">
          <p className="text-sm opacity-90 mb-2">Home / Shop</p>

          <div className="flex items-center gap-4">
            <div className="bg-green-400 p-3 rounded-xl shadow-md">
              <FontAwesomeIcon className="text-3xl" icon={faBoxOpen} />
            </div>
            <div>
              <h1 className="text-3xl font-bold">All Products</h1>
              <p className="opacity-90">
                Explore our complete product collection
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8 mx-4">
        
        <div className="container mx-auto">
          <div className="flex items-center gap-4 py-6">
            
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
