export default function BrandsCard({ brand }) {
  return (
    <>
      <div
        key={brand._id}
        className="bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 p-6 text-center "
      >
        <div className="h-24 flex items-center justify-center mb-4">
          <img
            src={brand.image}
            alt={brand.name}
            className="max-h-20 object-contain"
          />
        </div>

        <h3 className="font-medium text-gray-700">{brand.name}</h3>
      </div>
    </>
  );
}
