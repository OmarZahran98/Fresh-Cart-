import { Link, NavLink } from "react-router";
import FreshCartLogo from "../../assets/Images/freshcart-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <>
      <footer className="py-5 bg-gray-900 text-white">
        <div className="grid xl:grid-cols-6 py-5">
          <div className="col-span-2 space-y-3 mx-3">
            <div className="inline-block items-center bg-white rounded-lg px-4 py-2 text-black">
              <img src={FreshCartLogo} alt="" />
            </div>
            <p className="text-gray-500">
              FreshCart is your one-stop destination for quality products. From
              fashion to electronics, we bring you the best brands at
              competitive prices with a seamless shopping experience.
            </p>

            <div className="space-y-2 text-gray-500">
              <div>
                <NavLink
                  className={
                    "hover:text-primary-500 transition-colors duration-200"
                  }
                >
                  <FontAwesomeIcon icon={faPhone} className="px-2 text-primary-500" />
                  <span>+1 (800) 123-4567</span>
                </NavLink>
              </div>

              <div>
                {" "}
                <NavLink
                  className={
                    "hover:text-primary-500 transition-colors duration-200"
                  }
                >
                  <FontAwesomeIcon icon={faEnvelope} className="px-2 text-primary-500" />
                  <span>support@freshcart.com</span>
                </NavLink>
              </div>

              <div className="px-2 ">
                <FontAwesomeIcon icon={faLocationDot} className="text-primary-500" />
                <span>123 Commerce Street, New York, NY 10001</span>
              </div>
            </div>

            <ul className="flex items-center py-2 px-2 gap-4 *:text-gray-500 *:hover:text-primary-600 *:transition-colors *:duration-200">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>

              <li>
                <a href="#">
                  {" "}
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>

              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>

              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </div>

          <div className="mx-4">
            <h2 className="font-bold text-xl mb-4 ">Shop</h2>
            <ul className="space-y-3 *:text-gray-500 *:hover:text-primary-600 *:transition-colors *:duration-200">
              <li>
                <Link to={""}>
                  <span>All Products</span>
                </Link>
              </li>

              <li>
                <Link to={""}>
                  <span>Categories</span>
                </Link>
              </li>

              <li>
                <Link to={""}>
                  <span>Brands</span>
                </Link>
              </li>

              <li>
                <Link to={""}>
                  <span>Electronics</span>
                </Link>
              </li>

              <li>
                <Link to={""}>
                  <span>Men's Fashion</span>
                </Link>
              </li>

              <li>
                <Link to={""}>
                  <span>Women's Fashion</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-4">Account</h2>
            <ul className="space-y-3 *:text-gray-500 *:hover:text-primary-600 *:transition-colors *:duration-200">
              <li>
                <Link to={"/Account"}>
                  <span>My Account</span>
                </Link>
              </li>

              <li>
                <Link to={"/Order"}>
                  <span>Order History</span>
                </Link>
              </li>

              <li>
                <Link to={"/WishList"}>
                  <span>WishList</span>
                </Link>
              </li>

              <li>
                <Link to={"/Cart"}>
                  <span>Shopping Cart</span>
                </Link>
              </li>

              <li>
                <Link to={"/Login"}>
                  <span>Sign In</span>
                </Link>
              </li>

              <li>
                <Link to={"/SignUp"}>
                  <span>Create Account</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-4">Support</h2>
            <ul className="space-y-3 *:text-gray-500 *:hover:text-primary-600 *:transition-colors *:duration-200">
              <li>
                <Link to={"ContactUs"}>
                  <span>Contact Us</span>
                </Link>
              </li>

              <li>
                <Link to={""}>
                  <span>Help Center</span>
                </Link>
              </li>

              <li>
                <Link to={""}>
                  <span>Shipping Info</span>
                </Link>
              </li>

              <li>
                <Link to={""}>
                  <span>Returns & Refunds</span>
                </Link>
              </li>

              <li>
                <Link to={""}>
                  <span>Track Order</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-4">Legal</h2>
            <ul className="space-y-3 *:text-gray-500 *:hover:text-primary-600 *:transition-colors *:duration-200">
              <li>
                <Link to={""}>
                  <span>Privacy Policy</span>
                </Link>
              </li>

              <li>
                <Link to={""}>
                  <span>Terms Of Services</span>
                </Link>
              </li>

              <li>
                <Link to={""}>
                  <span>Cookie Policy</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center py-5 px-4 border-t border-gray-400/30 text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} FreshCart. All rights reserved.
          </p>

          <div>
            <ul className="flex items-center gap-4 px-2">
              <li>
                <FontAwesomeIcon icon={faCreditCard} />
                <span>Visa</span>
              </li>

              <li>
                <FontAwesomeIcon icon={faCreditCard} />
                <span>Mastercard</span>
              </li>

              <li>
                <FontAwesomeIcon icon={faCreditCard} />
                <span>PayPal</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
