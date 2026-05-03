// Extracted from image_c55b63.jpg
import { faLeaf, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductDetailsTab ({ productDetails }) {
    const description = productDetails?.data?.description;
    return (
  <div id="product-description">
    <h3 className="text-lg font-medium mb-4">Product Description</h3>
    <p className="text-gray-700 mb-4">{description || "No description available."}</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div>
        <h4 className="font-medium mb-2">Benefits</h4>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Rich in vitamins C and K</li>
          <li>Good source of fiber and antioxidants</li>
          <li>Supports heart health</li>
          <li>Helps regulate blood sugar</li>
          <li>Promotes healthy skin</li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-medium mb-2">Product Details</h4>
        <div className="space-y-2 text-gray-700">
          <div className="flex">
            <span className="w-32 font-medium">Origin:</span>
            <span>California, USA</span>
          </div>
          <div className="flex">
            <span className="w-32 font-medium">Cultivation:</span>
            <span>Organic</span>
          </div>
          <div className="flex">
            <span className="w-32 font-medium">Storage:</span>
            <span>Refrigerate upon arrival</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}