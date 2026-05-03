

import { faArrowLeft, faCartShopping, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router";

export default function Notfound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-gray-100 via-green-50 to-gray-100 px-4">
      
      <div className="text-center max-w-xl">

        {/* Cart Icon Box */}
        <div className="relative flex justify-center mb-10">
          
          <div className="w-48 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center">
            <FontAwesomeIcon className="text-green-400 text-5xl" icon={faCartShopping} />
          </div>

          {/* 404 Badge */}
          <div className="absolute -top-6 right-[35%] bg-green-500 text-white font-bold w-16 h-16 rounded-full flex items-center justify-center shadow-lg text-lg">
            404
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Oops! Nothing Here
        </h1>

        {/* Description */}
        <p className="text-gray-500 mb-8">
          Looks like this page went out of stock! Don't worry,
          there's plenty more fresh content to explore.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">

          <Link
            to="/"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            <FontAwesomeIcon icon={faHouse} />
            Go to Homepage
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-xl shadow-md transition"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Go Back
          </button>

        </div>
      </div>
    </div>
  );
}
