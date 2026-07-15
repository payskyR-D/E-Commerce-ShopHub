import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../services/products";

const FeaturedProducts = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();

      // أول 8 منتجات فقط
      setProducts(data.slice(0, 8));
    };

    fetchProducts();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Featured Products
        </h2>

        <p className="mt-3 text-gray-500">
          Discover our featured products.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={Number(product.id)}
            title={product.title}
            image={product.thumbnail}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;