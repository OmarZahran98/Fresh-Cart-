import { useEffect, useState } from "react";
import BrandsCard from "../../components/BrandsCard/BrandsCard";
import Loading from "../../components/Loading/Loading";
import { getAllBrands } from "../../Services/Brands";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Brands() {
  const [BrandsProducts, SetBrandsProducts] = useState([]);
  const [IsLoading, SetIsLoading] = useState(true);
  const [IsError, SetIsError] = useState(false);
  const [ExistError, IsExistError] = useState(null);

  async function FetchBrands() {
    try {
      SetIsLoading(true);
      const response = await getAllBrands();
      console.log(response);

      if (response.success) {
        SetIsLoading(false);
        SetBrandsProducts(response.data.data);
      }
    } catch (error) {
      SetIsLoading(false);
      SetIsError(true);
      IsExistError(error);
    }
  }

  useEffect(() => {
    FetchBrands();
  }, []);

  if (IsLoading || !BrandsProducts.length) {
    return <Loading />;
  }

  return (
    <>
      <div className="bg-linear-to-br from-violet-600 via-violet-500 to-purple-400 text-white py-12">
        <div className="container mx-auto px-6">
          <p className="text-sm opacity-80 mb-3">Home / Brands</p>

          <div className="flex items-center gap-4">
            <div className="bg-purple-500 p-4 rounded-2xl shadow-lg">
              <FontAwesomeIcon className="text-2xl" icon={faTags} />
            </div>

            <div>
              <h1 className="text-4xl font-bold">Top Brands</h1>
              <p className="opacity-90">Shop from your favorite brands</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8  *:cursor-pointer">
          {BrandsProducts.map((brand) => (
            <BrandsCard key={brand._id} brand={brand} />
          ))}
        </div>
      </div>
    </>
  );
}
