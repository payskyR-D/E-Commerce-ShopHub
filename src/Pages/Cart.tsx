import { useCartStore } from "../Store/cartStore";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCartStore();
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );


  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="mb-10 text-center text-4xl font-bold text-white">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-xl text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {/* المنتجات */}
          <div className="space-y-6">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-6 rounded-xl border border-gray-200 bg-white p-5 shadow"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-28 w-28 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{product.title}</h2>

                  <p className="mt-2 text-2xl font-bold text-indigo-600">
                    ${product.price}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(product.id)}
                      className="h-9 w-9 rounded bg-gray-200 text-lg hover:bg-gray-300"
                    >
                      -
                    </button>

                    <span className="w-8 text-center text-lg font-bold">
                      {product.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(product.id)}
                      className="h-9 w-9 rounded bg-indigo-600 text-lg text-white hover:bg-indigo-700"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="ml-auto rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6 shadow">
            <h2 className="text-2xl font-bold">Order Summary</h2>

            <div className="mt-6 flex justify-between text-lg">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className="mt-3 flex justify-between text-lg">
              <span>Shipping</span>
              <span className="font-medium text-green-600">Free</span>
            </div>

            <hr className="my-5" />

            <div className="flex justify-between text-2xl font-bold">
              <span>Total</span>
              <span className="text-indigo-600">${totalPrice.toFixed(2)}</span>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="mt-6 w-full rounded-lg bg-indigo-600 py-3 text-lg font-medium text-white transition hover:bg-indigo-700"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
