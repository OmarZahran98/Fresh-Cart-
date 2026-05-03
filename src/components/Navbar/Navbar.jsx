import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faCartShopping,
  faEnvelope,
  faHeadset,
  faMagnifyingGlass,
  faPhone,
  faSpinner,
  faTruck,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router";
import FreshCartIcon from "../../assets/Images/FreshCart-Icon.svg";
import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { WishlistContext } from "../../Context/WishlistContext";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { CartInfo, IsLoading } = useContext(CartContext);
  const { WishlistInfo } = useContext(WishlistContext);

  // Close only when clicking completely outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  return (
    <>
      <header>
        {/* TOP NAV */}
        <div className=" flex items-center justify-between py-2 border-b-gray-300/30 text-sm ">
          <ul className="flex gap-5 items-center *:flex *:gap-2 *:items-center">
            <li>
              <FontAwesomeIcon icon={faTruck} className="text-primary-500" />
              <span>Free Shipping on Orders 500 EGP</span>
            </li>

            <li>
              <FontAwesomeIcon icon={faGift} className="text-primary-500" />
              <span>New Arrivals Daily</span>
            </li>
          </ul>

          <ul className="flex gap-5 items-center *:flex *:gap-2 *:items-center">
            <li>
              <NavLink
                className={
                  "hover:text-primary-500 transition-colors duration-200"
                }
              >
                <FontAwesomeIcon icon={faPhone} className="px-2" />
                <span>+1 (800) 123-4567</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                className={
                  "hover:text-primary-500 transition-colors duration-200"
                }
              >
                <FontAwesomeIcon icon={faEnvelope} className="px-2" />
                <span>support@freshcart.com</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/Login"}
                className={
                  "hover:text-primary-500 transition-colors duration-200 "
                }
              >
                <FontAwesomeIcon icon={faUser} className="px-2" />
                <span>Sign In</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/SignUp"}
                className={
                  "hover:text-primary-500 transition-colors duration-200 px-2"
                }
              >
                <FontAwesomeIcon icon={faUserPlus} className="px-2" />
                <span>Sign Up</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* BOTTOM NAV */}
        <nav className=" flex items-center justify-between shadow p-2">
          <h1>
            <Link to={"/"} className="flex items-center">
              <img src={FreshCartIcon} alt="FreshCartIcon" />
              <span className="font-bold text-2xl">FreshCart</span>
            </Link>
          </h1>

          <search className="relative">
            <input
              type="text"
              placeholder="Search For Products"
              className="FormControl min-w-96"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute right-2 top-1/2 -translate-1/2"
            />
          </search>

          <ul className="flex items-center gap-7">
            <li>
              <NavLink
                to={"/"}
                className={
                  "hover:text-primary-500 transition-colors duration-200"
                }
              >
                <span>Home</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/Shop"}
                className={
                  "hover:text-primary-500 transition-colors duration-200"
                }
              >
                <span>Shop</span>
              </NavLink>
            </li>

            <div className="relative inline-block" ref={dropdownRef}>
              {/* Button */}
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center gap-1 hover:text-primary-500 transition"
              >
                <span>All Categories</span>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {open && (
                <ul className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-lg z-50 border">
                  <li>
                    <NavLink
                      to="/categories"
                      className="block px-4 py-2 hover:bg-primary-300/30"
                    >
                      All Categories
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/categories/electronics"
                      className="block px-4 py-2 hover:bg-primary-300/30"
                    >
                      Electronics
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/categories/women"
                      className="block px-4 py-2 hover:bg-primary-300/30"
                    >
                      Women's Fashion
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/categories/men"
                      className="block px-4 py-2 hover:bg-primary-300/30"
                    >
                      Men's Fashion
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/categories/beauty"
                      className="block px-4 py-2 hover:bg-primary-300/30"
                    >
                      Beauty & Health
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>

            <li>
              <NavLink
                to={"/Brands"}
                className={
                  "hover:text-primary-500 transition-colors duration-200"
                }
              >
                <span>Brands</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/ContactUs"}
                className={
                  "hover:text-primary-500 transition-colors duration-200 flex items-center gap-2"
                }
              >
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center shrink-0 text-primary-500">
                  <FontAwesomeIcon icon={faHeadset} />
                </div>

                <div className="text-sm">
                  <span>Support</span>
                <p>24/7 Help</p>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/WishList"}
                className="relative inline-flex items-center hover:text-primary-500 transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faHeart} />
                {/* Wishlist badge */}
                {WishlistInfo?.products?.length > 0 && (
                  <div className="absolute top-0 right-0 size-5 flex items-center justify-center w-5 h-5 -mt-1 -mr-1 bg-red-500 rounded-full border-2 border-white">
                    <span className="text-xs font-semibold text-white">
                      {WishlistInfo.products.length}
                    </span>
                  </div>
                )}
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/Cart"}
                className="relative inline-flex items-center hover:text-primary-500 transition-colors duration-200"
              >
                {/* Container for the cart icon */}
                <div className="p-2 ">
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>

                {/* The green badge with the number */}
                <div className="absolute top-0 right-0 size-5 flex items-center justify-center w-6 h-6 -mt-1 -mr-1 bg-green-600 rounded-full border-2 border-white">
                  <span className="text-sm font-semibold text-white">
                    {IsLoading ? (
                      <FontAwesomeIcon icon={faSpinner} spin />
                    ) : (
                      CartInfo?.numOfCartItems
                    )}
                  </span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/Login"}
                className={
                  "hover:text-primary-500 transition-colors duration-200"
                }
              >
                <FontAwesomeIcon icon={faUser} />
                <span>Sign In</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
