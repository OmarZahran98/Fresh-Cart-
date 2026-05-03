import {
  faArrowRotateLeft,
  faBolt,
  faCartShopping,
  faShareNodes,
  faShieldHalved,
  faStar,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { CalcDiscount } from "../../utilis/CalcDiscount";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import { CartContext } from "../../Context/CartContext";


export default function ProductInfo({ productDetails }) {
  const {
    id,

    title,

    description,

    category,

    images,

    price,

    priceAfterDiscount,

    ratingsAverage,

    quantity,

    ratingsQuantity,
  } = productDetails;

  const {HandleAddingProductCart}=useContext(CartContext)
  const [Quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="productdetails">
        <div className="container mx-auto  my-16 ">
          <div className="flex flex-col lg:flex-row gap-8 ">
            {/* IMAGES */}
            <div className="lg:w-1/3 gap-4 ">
             <div className="shadow p-3">
               <ReactImageGallery
              showFullscreenButton={false}
              showNav={false}
              showPlayButton={false}
              items={images.map((image)=>{return {
                original :image,
                thumbnail :image
              }
              })}/>
             </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-3/4 shadow p-4 rounded-2xl *:px-4">
              <div className="flex flex-col gap-4 *:py-2">
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-semibold rounded-full">
                    Women's Fashion
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                    DeFacto
                  </span>
                </div>
              </div>

              <h1 className="text-4xl font-bold py-2">{title}</h1>

              <div className="flex items-center gap-2 py-2">
                <div className="text-yellow-500">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <span className="text-sm text-gray-500">
                  {ratingsAverage} ({ratingsQuantity} reviews)
                </span>
              </div>

              <div className="flex items-center mb-2">
                <span className="text-3xl font-bold text-gray-900 mr-3">
                  {priceAfterDiscount || price} EGP
                </span>

                {priceAfterDiscount ? (
                  <>
                  <span className="text-lg text-gray-500 line-through">
                    {price}
                  </span>
                  <span className="ml-3 bg-red-100 text-red-700 text-sm px-2 py-1 rounded">
                Save {CalcDiscount({price,priceAfterDiscount})}%
                </span>
                  </>
                ) : (
                  ""
                )}
                
              </div>

              <div className="flex items-center gap-2 text-green-600 text-sm font-medium py-2 mb-6">
                <span className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-green-50 text-green-700">
                  <span
                    className={`w-2 h-2 rounded-full ${quantity > 0 ? "bg-green-500" : "bg-red-500"}`}
                  ></span>
                  {quantity > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              <p className="text-gray-500/15 text-sm border-t py-4 mt-2">
                <span className="text-gray-500">
                  {description}
                </span>
              </p>
              <span className="font-semibold text-sm">Quantity</span>
              <div className="flex items-center gap-4 mt-2 ">
                <div className=" border-2 border-gray-200 rounded-lg w-fit ">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-primary-600 transition disabled:opacity-50 "
                  >
                    -
                  </button>
                  <span className="p-2">{Quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-primary-600 transition disabled:opacity-50"
                  >
                    +
                  </button>
                </div>

                <span className="text-gray-400 text-xs">{quantity} available</span>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl flex justify-between items-center my-5">
                <span className="text-gray-500 font-medium">Total Price:</span>
                <span className="text-2xl font-bold text-green-600">
                  {(149 * Quantity).toFixed(2)} EGP
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 px-0">
                <button
                 onClick={()=>{
                  HandleAddingProductCart({id})
                 }}
                 className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span>Add to Cart</span>
                </button>
                <button className="flex-1 bg-[#1a2b3c] hover:bg-black text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                  <FontAwesomeIcon icon={faBolt} />
                  <span>Buy Now</span>
                </button>
              </div>

              <div className="flex gap-4 mt-2 ">
                <button className="flex-1 border border-gray-200 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 font-medium">
                  Add to Wishlist
                </button>
                <button className="border border-gray-200 p-3 rounded-xl hover:bg-gray-50">
                  <FontAwesomeIcon icon={faShareNodes} />
                </button>
              </div>

              <div className="border-t mt-4 border-gray-100 pt-6 ">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center p-3 rounded-xl py-4 gap-3">
                    <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                      <FontAwesomeIcon icon={faTruck} />
                    </div>

                    <div className="flex flex-col">
                      <span className=" text-sm font-bold">Free Delivery</span>
                      <span className=" text-xs text-gray-400">
                        Orders over $50
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center p-3 rounded-xl   py-4 gap-3">
                    <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                      <FontAwesomeIcon icon={faArrowRotateLeft} />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-sm font-bold">30 Days Return</span>
                      <span className="text-xs text-gray-400">Money back</span>
                    </div>
                  </div>

                  <div className="flex items-center p-3 rounded-xl py-4 gap-3">
                    <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                      <FontAwesomeIcon icon={faShieldHalved} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold">Secure Payment</span>
                      <span className="text-xs text-gray-400">
                        100% Protected
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
