import { faHeart, faTrash, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { useContext } from "react";
import { WishlistContext } from "../../Context/WishlistContext";
import { CartContext } from "../../Context/CartContext";
import Loading from "../../components/Loading/Loading";

export default function Wishlist() {
  
  const { WishlistInfo, IsLoading, HandleRemoveFromWishlist } = useContext(WishlistContext);
  const { HandleAddingProductCart } = useContext(CartContext);

  if (IsLoading && !WishlistInfo) {
    return <Loading />;
  }

  const wishlistItems = WishlistInfo || []; 

  const handleAddToCart = (productId) => {
    HandleAddingProductCart({ id: productId });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <p className="text-gray-500 mb-6">
          Home / <span className="text-gray-700 font-medium">Wishlist</span>
        </p>

        {/* Title */}
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-red-100 text-red-500 p-3 rounded-xl">
            <FontAwesomeIcon icon={faHeart} size="lg" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              My Wishlist
            </h1>
            <p className="text-gray-500">
              {wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''} saved
            </p>
          </div>
        </div>

        {wishlistItems.length > 0 ? (
          /* Wishlist Table */
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-4 px-8 py-4 bg-gray-50 text-gray-600 font-medium">
              <span>Product</span>
              <span>Price</span>
              <span>Status</span>
              <span className="text-right">Actions</span>
            </div>

            {/* Items */}
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="grid md:grid-cols-4 gap-6 items-center px-8 py-6 border-t"
              >
                {/* Product */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.imageCover}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-xl bg-gray-100"
                  />
                  <div>
                    <h2 className="font-semibold text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                      {item.category?.name}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div>
                  <p className="font-bold text-gray-800 text-lg">
                    {item.price} EGP
                  </p>
                  {item.priceAfterDiscount && (
                    <p className="text-gray-400 line-through text-sm">
                      {item.price} EGP
                    </p>
                  )}
                </div>

                {/* Status */}
                <div>
                  {item.quantity > 0 ? (
                    <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      In Stock
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                      Out of Stock
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex justify-start md:justify-end items-center gap-3">
                  <button 
                    onClick={() => handleAddToCart(item.id)}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl font-medium transition"
                  >
                    <FontAwesomeIcon icon={faCartShopping} />
                    Add to Cart
                  </button>

                  <button 
                    onClick={() => HandleRemoveFromWishlist({ id: item.id })}
                    className="p-3 rounded-xl bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-500 transition"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Wishlist */
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
              <FontAwesomeIcon icon={faHeart} className="text-4xl text-gray-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Your Wishlist is empty</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Looks like you haven't added anything to your wishlist yet.<br/>
              Start adding items you love!
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-primary-600 text-white py-3.5 px-8 rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg active:scale-[0.98]"
            >
              Start Shopping
            </Link>
          </div>
        )}

        {/* Continue Shopping */}
        <div className="mt-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-green-600 font-medium"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
