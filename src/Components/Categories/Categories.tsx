import electronics from "../../assets/categories/electronics.jpg";
import fashion from "../../assets/categories/fashion.jpg";
import shoes from "../../assets/categories/shoes.jpg";
import watches from "../../assets/categories/watches.jpg";
import beauty from "../../assets/categories/beauty.jpg";
import furniture from "../../assets/categories/furniture.jpg";

const categories = [
  {
    id: 1,
    name: "Electronics",
    image: electronics,
  },
  {
    id: 2,
    name: "Fashion",
    image: fashion,
  },
  {
    id: 3,
    name: "Shoes",
    image: shoes,
  },
  {
    id: 4,
    name: "Watches",
    image: watches,
  },
  {
    id: 5,
    name: "Beauty",
    image: beauty,
  },
  {
    id: 6,
    name: "Furniture",
    image: furniture,
  },
];

const Categories = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Shop by Category
          </h2>

          <p className="mt-3 text-gray-500">
            Browse our most popular categories
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="h-80 w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/35 transition-all duration-500 group-hover:bg-black/20"></div>

              {/* Content */}
              <div className="absolute bottom-8 left-8">
                <h3 className="mb-4 text-3xl font-bold text-white">
                  {category.name}
                </h3>

                <button className="rounded-full bg-white px-6 py-3 font-semibold text-black transition-all duration-300 hover:bg-indigo-600 hover:text-white">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;