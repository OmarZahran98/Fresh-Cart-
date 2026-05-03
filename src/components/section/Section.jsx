import { faArrowRotateLeft, faHeadset, faShieldHalved, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Section() {
  return (
    <>
      <div className="bg-primary-50 border-y border-primary-100">
        <div className="container mx-auto px-4 py-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0 text-primary-500">
                <FontAwesomeIcon icon={faTruck} />
              </div>
              <div>
                <h4>Free Shipping</h4>
                <p className="text-gray-600">On orders over 500 EGP</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0 text-primary-500">
                <FontAwesomeIcon icon={faArrowRotateLeft} />
              </div>
              <div>
                <h4>Easy Returns</h4>
                <p className="text-gray-600">14-day return policy</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0 text-primary-500">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
              <div>
                <h4>Secure Payment</h4>
                <p className="text-gray-600">100% secure checkout</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0 text-primary-500">
                <FontAwesomeIcon icon={faHeadset} />
              </div>
              <div>
                <h4>24/7 Support</h4>
                <p className="text-gray-600">Contact us anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
