import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";


export default function CartItem({ productInfo }) {
  const {count , price, product}=productInfo
  const {RemoveCartItems}=useContext(CartContext)
  const {id,imageCover,title,category}=product
  const {HandleUpdateProductQuantity}=useContext(CartContext)
  
  // Use local state for immediate UI feedback
  const [Quantity, setQuantity] = useState(count);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleDecrease = async () => {
    if (Quantity <= 1) return;
    
    // Optimistic update - update UI immediately
    setQuantity(prev => prev - 1);
    setIsUpdating(true);
    
    try {
      await HandleUpdateProductQuantity({ id, count: Quantity - 1 });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleIncrease = async () => {
    // Optimistic update - update UI immediately
    setQuantity(prev => prev + 1);
    setIsUpdating(true);
    
    try {
      await HandleUpdateProductQuantity({ id, count: Quantity + 1 });
    } finally {
      setIsUpdating(false);
    }
  };
    
  return (
    <>

              <div
                className="bg-white rounded-2xl shadow-sm p-6 flex flex-col md:flex-row justify-between items-center gap-6"
              >
                <div className="flex items-center gap-5 w-full">
                  <img
                    src={imageCover}
                    className="w-28 h-28 object-cover rounded-xl bg-gray-100"
                  />

                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {title}
                    </h2>

                    <span className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full mt-2">
                      {category?.name}
                    </span>

                    <p className="text-green-600 font-bold mt-3 text-lg">
                      {price} EGP
                    </p>
                  </div>
                </div>

                {/* Quantity + Total */}
                <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
                  <button
                    onClick={handleDecrease}
                    disabled={isUpdating || Quantity <= 1}
                    className="h-6 w-6 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-700 disabled:opacity-40 transition-all"
                  >
                    -
                  </button>
                  <span className="px-2">{Quantity}</span>
                  <button
                    onClick={handleIncrease}
                    disabled={isUpdating}
                    className="h-6 w-6 rounded-lg bg-primary-600 shadow-sm flex items-center justify-center text-white hover:bg-primary-700 transition-all disabled:opacity-50"
                  >
                    +
                  </button>
                </div>

                  {/* Total */}
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Total</p>
                    <p className="text-xl font-bold text-gray-800">
                      {price * Quantity} EGP
                    </p>
                  </div>

                  {/* Delete */}
                  <button onClick={()=>{RemoveCartItems({ id })}}  className="bg-red-50 text-red-500 p-3 rounded-xl hover:bg-red-100 transition">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              
    </>
  )
}
