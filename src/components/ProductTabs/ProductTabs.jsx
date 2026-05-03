import { useState } from "react";
import ProductInfoTab from "../ProductInfoTab/ProductInfoTab";
import ReviewsTab from "../Reviews/ReviewsTab";
import ShippingTab from "../ShippingTab/ShippingTab";

export default function ProductTabs(productDetails) {
  const [activeTab, setActiveTab] = useState("details");

  const getActiveTab = () => {
    switch (activeTab) {
      case "details":
        return <ProductInfoTab IsProductDetails={productDetails} />;
      case "reviews":
        return <ReviewsTab />;
      case "shipping":
        return <ShippingTab />;
      default:
        return <ProductInfoTab />;
    }
  };
  return (
    <>
      <section id="product-details-tabs" className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
            <div className="border-b border-gray-200">
              <div className="flex">
                <button
                  className={`px-6 py-4 font-medium ${activeTab == "details" && "text-primary-600 border-b-2"} text-gray-600 border-primary-600`}
                  onClick={() => setActiveTab("details")}
                >
                  Product Details
                </button>

                <button
                  className={`px-6 py-4 font-medium ${activeTab == "reviews" && "text-primary-600 border-b-2"} text-gray-600 border-primary-600`}
                  onClick={() => setActiveTab("reviews")}
                >
                  Reviews (149)
                </button>

                <button
                  className={`px-6 py-4 font-medium ${activeTab == "shipping" && "text-primary-600 border-b-2"} text-gray-600 border-primary-600`}
                  onClick={() => setActiveTab("shipping")}
                >
                  Shipping & Returns
                </button>
              </div>
            </div>
            <div className="p-6">{getActiveTab()}</div>
          </div>
        </div>
      </section>
    </>
  );
}
