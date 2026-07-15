import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import { useCartStore } from "../Store/cartStore";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<any>(null);

  const { addToCart } = useCartStore();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;

      const productRef = doc(db, "products", id);

      const snapshot = await getDoc(productRef);

      if (snapshot.exists()) {
        setProduct({
          id: snapshot.id,
          ...snapshot.data(),
        });
      }
    };

    fetchProduct();
  }, [id]);


  if (!product) {
    return (
      <div className="py-20 text-center text-xl">
        Loading...
      </div>
    );
  }


  return (
    <div className="mx-auto max-w-7xl px-6 py-16">

      <div className="grid gap-10 md:grid-cols-2">


        {/* Image */}
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-[500px] w-full rounded-xl object-cover"
          />
        </div>


        {/* Details */}
        <div>

          <h1 className="text-4xl font-bold">
            {product.title}
          </h1>


          <p className="mt-5 text-3xl font-bold text-indigo-600">
            ${product.price}
          </p>


          <p className="mt-5 text-gray-600">
            {product.description}
          </p>


          <div className="mt-5">
            ⭐⭐⭐⭐⭐
            <span className="ml-2 text-gray-500">
              ({product.rating})
            </span>
          </div>


          <button
            onClick={() =>
              addToCart({
                id: Number(product.id),
                title: product.title,
                thumbnail: product.thumbnail,
                price: product.price,
                quantity: 1,
              })
            }
            className="mt-8 w-full rounded-lg bg-indigo-600 py-4 text-white hover:bg-indigo-700"
          >
            Add To Cart
          </button>


        </div>

      </div>

    </div>
  );
};


export default ProductDetails;