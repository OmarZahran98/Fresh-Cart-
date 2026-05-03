import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowsRotate,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CalcDiscount } from "../../utilis/CalcDiscount";
import { Link, NavLink } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { WishlistContext } from "../../Context/WishlistContext";

export default function ProductCard({ product }) {
  if (!product) return null;

  const {
    id,
    imageCover,
    priceAfterDiscount,
    price,
    ratingsQuantity,
    ratingsAverage,
    title,
    category,
  } = product;

  const {HandleAddingProductCart} =useContext(CartContext)
  const {HandleAddToWishlist}=useContext(WishlistContext)

  return (
    <div className="card relative rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <Link className="block" to={`/productdetails/${id}`}>
        <img
          className="h-60 w-full object-cover"
          src={imageCover}
          alt={title}
        />
      </Link>

      <div className="p-4 space-y-3">
        <div>
          <p className="text-gray-500 text-sm">{category?.name}</p>

          <h4 className="">
            <Link className="font-semibold line-clamp-1" to={`/productdetails/${id}`}>{title}</Link>
          </h4>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-yellow-500">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <span className="ml-1">{ratingsAverage}</span>
          </div>

          <span className="text-sm text-gray-500">({ratingsQuantity})</span>
        </div>

        <div className="font-bold flex items-center justify-between">
          <div>
            {!priceAfterDiscount && (
              <span className="text-lg text-primary-500">{price} EGP</span>
            )}

            {priceAfterDiscount && (
              <>
                <span className="text-lg text-primary-500">
                  {priceAfterDiscount} EGP
                </span>
                <del className="text-gray-500 text-sm mx-1">{price} EGP</del>
              </>
            )}
          </div>

          <button 
          onClick={()=>{
            HandleAddingProductCart({id})
          }}
           className="h-10 w-10 rounded-full flex items-center justify-center bg-primary-600 text-white hover:bg-primary-700 transition">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>

      <div className="actions absolute right-4 top-4 flex flex-col gap-4 text-gray-500 *:rounded-full *:bg-white *:w-8 *:h-8 *:shadow">
        <button onClick={()=>{HandleAddToWishlist({ id })}} className="hover:text-red-500 transition-colors duration-200">
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button className="hover:text-primary-500 transition-colors duration-200">
          <FontAwesomeIcon icon={faArrowsRotate} />
        </button>
        <NavLink
          to={`/productdetails/${id}`}
          className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 shadow-sm"
        >
          <FontAwesomeIcon icon={faEye} />
        </NavLink>
      </div>

      {priceAfterDiscount && (
        <span className="badge absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-md">
          -{CalcDiscount({ price, priceAfterDiscount })}%
        </span>
      )}
    </div>
  );
}
