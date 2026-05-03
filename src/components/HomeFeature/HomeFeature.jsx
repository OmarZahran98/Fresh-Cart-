import {
  faArrowRotateLeft,
  faHeadset,
  faShieldHalved,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeFeature() {
  return (
    <>
      <div className=" bg-gray-50 my-9 mx-4">
        
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-500">
                <FontAwesomeIcon icon={faTruck} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">Free Shipping</h4>
                <p className="text-xs text-gray-500">On orders over 500 EGP</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center shrink-0 text-primary-500">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">Secure Payment</h4>
                <p className="text-xs text-gray-500">100% secure transactions</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0 text-orange-500">
                <FontAwesomeIcon icon={faArrowRotateLeft} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">Easy Returns</h4>
                <p className="text-xs text-gray-500">14-day return policy</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center shrink-0 text-purple-500">
                <FontAwesomeIcon icon={faHeadset} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">24/7 Support</h4>
                <p className="text-xs text-gray-500">Dedicated support team</p>
              </div>
            </div>
          </div>
        
      </div>
    </>
  );
}
