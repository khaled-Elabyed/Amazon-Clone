import React, { createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../src/ProductContext";

const ProductLists = () => {
  const { products, setSelectedProduct, addtocart } =
    useContext(ProductContext);

  const handleAddToCart = (product) => {
    addtocart(product);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Products List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
            >
              <Link
                to={`/products/${product.id}`}
                onClick={() => handleProductClick(product)}
                className="block"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-48 w-full object-contain mb-3"
                />
                <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
                  {product.title}
                </h2>
                <p className="text-blue-600 hover:underline text-sm">
                  More Details
                </p>
              </Link>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 w-full rounded-md transition duration-200"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductLists;

/**
 * createContext هو اللي بيعمل لك "المخزن" اللي هتخزن فيه البيانات
 * useContext هو اللي بيجيب لك البيانات من المخزن ده
 * handleProductClick هو ده اللي من خلاله لما بضغط علي عنصر بيشوف موجود ولا لا وبيعرض التفاصيل بتعته
 * بس لو المستخدم عمل Refresh للصفحة بتاعت التفاصيل، الـ
 * selectedProduct هيبقى null،
 * لإنه كان متخزن مؤقت في الذاكرة
 * (state)، ومش في مكان دائم.
 */
