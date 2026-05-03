import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ReviewsTab(){
    return (
  <div>
    {/* Header Section */}
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-medium">Customer Reviews</h3>
      <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700">
        Write a Review
      </button>
    </div>

    {/* Overall Rating Summary */}
    <div className="mb-6">
      <div className="flex items-center mb-2 gap-3">
        <div className="text-yellow-500">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            
          </div>
        <span className="ml-2 text-lg font-medium">4.5 out of 5</span>
      </div>
      <p className="text-gray-600">Based on 149 reviews</p>
    </div>

    {/* Individual Reviews List */}
    <div className="space-y-4">
      {/* Review 1 - John D. */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center mb-2 gap-3">
          <div className="text-yellow-500">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            
          </div>
          <span className="ml-2 font-medium">John D.</span>
          <span className="ml-auto text-sm text-gray-500">2 days ago</span>
        </div>
        <p className="text-gray-700">
          "Absolutely delicious! The strawberries were fresh, sweet, and
          perfectly ripe. Will definitely order again."
        </p>
      </div>

      {/* Review 2 - Sarah M. */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center mb-2">
          <div className="text-yellow-500">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            
          </div>
          <span className="ml-2 font-medium">Sarah M.</span>
          <span className="ml-auto text-sm text-gray-500">1 week ago</span>
        </div>
        <p className="text-gray-700">
          "Great quality organic strawberries. They lasted longer than expected
          in the fridge."
        </p>
      </div>
    </div>
  </div>
);
}