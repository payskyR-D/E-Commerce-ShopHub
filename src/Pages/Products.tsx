import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard/ProductCard";
import { getProducts } from "../services/products";
import { useSearchStore } from "../Store/searchStore";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);
  const { searchTerm } = useSearchStore();
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const keyword = searchTerm.toLowerCase();

    const matchSearch =
      product.title?.toLowerCase().includes(keyword) ||
      product.category?.toLowerCase().includes(keyword) ||
      product.brand?.toLowerCase().includes(keyword) ||
      product.description?.toLowerCase().includes(keyword);

    const matchCategory = category
      ? product.category === category
      : true;

    return matchSearch && matchCategory;
  });

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-bold text-center">
        All Products
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
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
    </div>
  );
};

export default Products;