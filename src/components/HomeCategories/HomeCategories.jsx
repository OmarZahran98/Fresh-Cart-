import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Links } from "react-router";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../Services/Categories";
import Loading from "../Loading/Loading";

export default function HomeCategories() {
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
      <div className="my-8">
        <div className="container mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 py-6">
              <div className="w-1.5 h-10 rounded-full bg-linear-to-b from-primary-500 to-primary-700" />
              <h2 className="text-4xl font-extrabold tracking-tight flex gap-2">
                <span>Shop By</span>
                <span className="text-primary-600">Category</span>
              </h2>
            </div>
            <Link to={"/Categories"} className="flex items-center gap-2">
              <span className="text-primary-600">View All Categories</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-primary-600"
              />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
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
