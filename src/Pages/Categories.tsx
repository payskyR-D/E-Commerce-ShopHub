import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  Flower2,
  Armchair,
  Laptop,
  Smartphone,
} from "lucide-react";

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "beauty",
      icon: Sparkles,
    },
    {
      name: "fragrances",
      icon: Flower2,
    },
    {
      name: "furniture",
      icon: Armchair,
    },
    {
      name: "laptops",
      icon: Laptop,
    },
    {
      name: "smartphones",
      icon: Smartphone,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">

      <h1 className="mb-10 text-center text-4xl font-bold text-white">
        Categories
      </h1>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-5">

        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <button
              key={category.name}
              onClick={() =>
                navigate(`/products?category=${category.name}`)
              }
              className="
                group
                flex
                flex-col
                items-center
                justify-center
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-8
                text-white
                backdrop-blur
                transition
                duration-300
                hover:-translate-y-2
                hover:bg-indigo-600
                hover:shadow-xl
              "
            >
              <div
                className="
                  rounded-full
                  bg-indigo-500/20
                  p-4
                  transition
                  group-hover:bg-white/20
                "
              >
                <Icon
                  size={35}
                  className="text-indigo-400 group-hover:text-white"
                />
              </div>

              <span className="text-lg font-semibold capitalize">
                {category.name}
              </span>
            </button>
          );
        })}

      </div>

    </div>
  );
};

export default Categories;