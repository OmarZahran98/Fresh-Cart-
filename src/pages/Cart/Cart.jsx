import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBoxOpen, faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router";
import CartItem from "../../components/CartItem/CartItem";
import { CartContext } from "../../Context/CartContext";
import Loading from "../../components/Loading/Loading";

export default function Cart() {
  const { CartInfo, IsLoading, HandleGetCartItems } = useContext(CartContext);

  // Fetch cart items on mount
  useEffect(() => {
    HandleGetCartItems();
  }, []);

  // Only show full page loading on initial load, not during quantity updates
  if (IsLoading && !CartInfo) {
    return <Loading />;
  }

  // Handle different API response structures
  const products = CartInfo?.products || CartInfo?.data?.products || [];
  const totalCartPrice = CartInfo?.totalCartPrice || CartInfo?.data?.totalCartPrice || 0;
  const numOfCartItems = CartInfo?.numOfCartItems || products.length || 0;
  
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <p className="text-gray-500 mb-4">
          Home /{" "}
          <span className="text-gray-700 font-medium">Shopping Cart</span>
        </p>

        {/* Title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary-600 text-white w-12 h-12 rounded-xl flex items-center justify-center">
            <FontAwesomeIcon className="text-3xl" icon={faCartShopping} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
            <p className="text-gray-500">
              You have{" "}
              <span className="text-green-600 font-semibold">
                {numOfCartItems} items
              </span>{" "}
              in your cart
            </p>
          </div>
        </div>

        {/* Layout */}
        {products.length > 0 ? <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {products.map((product)=> <CartItem key={product.id} productInfo={product}/>)}

            {/* Bottom Actions */}
            <div className="flex justify-between items-center pt-4 border-t">
              <Link
                to="/"
                className="text-green-600 font-medium hover:underline"
              >
                ← Continue Shopping
              </Link>

              <button className="text-gray-500 hover:text-red-500 flex items-center gap-2">
                <FontAwesomeIcon icon={faTrash} />
                Clear all items
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden h-fit">
            <div className="bg-slate-900 text-white p-5">
              <h2 className="text-xl font-semibold">Order Summary</h2>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({numOfCartItems} items)</span>
                <span> {totalCartPrice} EGP</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="">70 EGP</span>
              </div>

              <hr />

              <div className="flex justify-between font-bold text-lg">
                <span>Estimated Total</span>
                <span className="text-green-600">
                  {totalCartPrice + 70} EGP
                </span>
              </div>

              <Link to={"/checkout"} className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 mt-4">
                <FontAwesomeIcon icon={faUser} />
                Login to Checkout
              </Link>

              <p className="text-sm text-gray-500 text-center">
                Don't have an account?{" "}
                <Link to={"/signup"} className="text-green-600 cursor-pointer">
                  Sign up
                </Link>
              </p>

              <div className="text-sm text-gray-500 space-y-1 pt-3 border-t">
                <p>✓ Your cart items will be saved</p>
                <p>✓ Track your orders easily</p>
                <p>✓ Access exclusive member deals</p>
              </div>
            </div>
          </div>
          
        </div> :<div className="min-h-[60vh] flex items-center justify-center px-4">
                <div className="max-w-md text-center ">
                <div className="relative mb-8 text-center">
                  <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                    <FontAwesomeIcon className="svg-inline--fa fa-box-open text-5xl text-gray-300" icon={faBoxOpen} />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Your Cart is empty</h2>
                <p className="text-gray-500 mb-8 leading-relaxed">Looks like you haven't added anything to your cart yet.<br/>
                Start exploring our products!</p>
                <Link to={"/"} className="inline-flex items-center gap-2 bg-primary-600 text-white py-3.5 px-8 rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg active:scale-[0.98]">Start Shopping</Link>
              </div>
              </div>}
      </div>
    </div>
  );
}
