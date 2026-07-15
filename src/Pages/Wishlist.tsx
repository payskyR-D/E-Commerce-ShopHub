import { Link } from "react-router-dom";
import { useWishlistStore } from "../Store/wishlistStore";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlistStore();

  if (wishlist.length === 0) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6">
        <h1 className="mb-4 text-4xl font-bold">❤️ Wishlist</h1>

        <p className="text-lg text-gray-500">
          Your wishlist is empty.
        </p>

        <Link
          to="/products"
          className="mt-6 rounded-lg bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700"
        >
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="mb-10 text-center text-4xl font-bold">
        ❤️ Wishlist
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-60 w-full object-cover"
            />

            <div className="p-5">
              <h2 className="line-clamp-1 text-lg font-semibold">
                {product.title}
              </h2>

              <p className="mt-2 text-2xl font-bold text-indigo-600">
                ${product.price}
              </p>

              <div className="mt-5 flex gap-3">
                <Link
                  to={`/product/${product.id}`}
                  className="flex-1 rounded-lg bg-indigo-600 py-2 text-center text-white transition hover:bg-indigo-700"
                >
                  View
                </Link>

                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="flex-1 rounded-lg bg-red-500 py-2 text-white transition hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;