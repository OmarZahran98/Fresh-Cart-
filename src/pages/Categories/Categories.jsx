import { faArrowRight, faHeadset, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Links } from "react-router";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../Services/Categories";
import Loading from "../../components/Loading/Loading";

export default function Categories() {
  const [IsCategories, SetIsCategories] = useState([]);
  const [IsLoading, SetIsLoading] = useState(true);

  async function Categories() {
    try {
      SetIsLoading(true);
      const response = await getAllCategories();

      if (response.success) {
        SetIsLoading(false);
        SetIsCategories(response.data.data);
      }
    } catch (error) {
      SetIsLoading(false);
    }
  }

  useEffect(() => {
    Categories();
  }, []);

  if (IsLoading || !IsCategories.length) {
    return <Loading />;
  }
  return (
    <>
      <div className="bg-green-500 text-white py-12">
        <div className="container mx-auto px-6">
          <p className="text-sm opacity-90 mb-2">Home / Categories</p>

          <div className="flex items-center gap-4">
            <div className="bg-green-400 p-3 rounded-xl shadow-md">
              <FontAwesomeIcon className="text-2xl" icon={faLayerGroup} />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">All Categories</h1>
              <p className="text-white/80 mt-1">
                Browse our wide range of product categories
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8">
        <div className="container mx-auto space-y-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 *:cursor-pointer *:">
            {IsCategories.map((Category) => (
              <Link
                key={Category._id}
                to={`/Category/${Category._id}`}
                className="card cursor-pointer shadow-md rounded-xl gap-2 items-center p-4 flex flex-col hover:shadow-lg transition-shadow duration-200"
              >
                <img
                  src={Category.image}
                  alt=""
                  className="size-16 rounded-full object-cover"
                />
                <h3>{Category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
