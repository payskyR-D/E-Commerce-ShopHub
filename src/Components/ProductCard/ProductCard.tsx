import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../Store/cartStore";
import { useWishlistStore } from "../../Store/wishlistStore";
console.log("🔥 ProductCard FILE LOADED");

type ProductCardProps = {

  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
};

const ProductCard = ({
  id,
  title,
  image,
  price,
  rating,
}: ProductCardProps) => {

  const navigate = useNavigate();

  const { addToCart } = useCartStore();

  const {
    wishlist,
    addToWishlist,
    removeFromWishlist,
  } = useWishlistStore();

  const isFavorite = wishlist.some((item) => item.id === id);
  console.log("ProductCard Render");
  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Wishlist Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();

          if (isFavorite) {
            removeFromWishlist(id);
          } else {
            addToWishlist({
              id,
              title,
              thumbnail: image,
              price,
              rating,
            });
          }
        }}
        className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 shadow-md transition hover:scale-110"
      >
        <FiHeart
          className={ `text-2xl cursor-pointer transition-all duration-200 ${isFavorite
              ? "fill-red-500 text-red-500"
              : "text-gray-500 hover:text-red-500 hover:fill-red-500"
            }`} 
        />
      </button>

      {/* Product Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        <h3 className="mb-2 line-clamp-1 text-lg font-semibold text-gray-800">
          {title}
        </h3>

        <div className="mb-3 flex items-center">
          <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          <span className="ml-2 text-sm text-gray-500">
            ({rating})
          </span>
        </div>

        <p className="mb-5 text-2xl font-bold text-indigo-600">
          ${price}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation();

            const product = {
              id,
              title,
              thumbnail: image,
              price,
              quantity: 1,
            };

            console.log("Adding:", product);

            addToCart(product);

            console.log(
              "LocalStorage:",
              localStorage.getItem("cart-storage")
            );
          }}
          className="w-full cursor-pointer rounded-lg bg-indigo-600 py-3 font-medium text-white transition duration-300 hover:bg-indigo-700"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;