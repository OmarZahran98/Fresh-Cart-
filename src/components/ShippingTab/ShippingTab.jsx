export default function ShippingTab(){
    return (
  <div>
    <h3 className="text-lg font-medium mb-4">Shipping & Returns</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Shipping Information Section */}
      <div>
        <h4 className="font-medium mb-3">Shipping Information</h4>
        <div className="space-y-2 text-gray-700">
          <div className="flex">
            <span className="w-32 font-medium">Standard:</span>
            <span>3-5 business days ($4.99)</span>
          </div>
          <div className="flex">
            <span className="w-32 font-medium">Express:</span>
            <span>1-2 business days ($9.99)</span>
          </div>
          <div className="flex">
            <span className="w-32 font-medium">Free shipping:</span>
            <span>Orders over $50</span>
          </div>
        </div>
      </div>

      {/* Return Policy Section */}
      <div>
        <h4 className="font-medium mb-3">Return Policy</h4>
        <div className="space-y-2 text-gray-700">
          <div className="flex">
            <span className="w-32 font-medium">Time limit:</span>
            <span>30 days</span>
          </div>
          <div className="flex">
            <span className="w-32 font-medium">Condition:</span>
            <span>Unopened original packaging</span>
          </div>
          <div className="flex">
            <span className="w-32 font-medium">Refund:</span>
            <span>Full refund available</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}