import React from "react";
import { ProductContext } from "./ProductContext";
import { useContext } from "react";

const ProductDetails = () => {
  const { selectedProduct, addtocart } = useContext(ProductContext);

  const handleAddToCart = () => {
    if (selectedProduct) {
      addtocart(selectedProduct);
    }
  };

  if (!selectedProduct) {
    return <div className="text-center py-10 text-gray-600 text-lg">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center items-center">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="h-80 object-contain"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4 text-gray-800">{selectedProduct.title}</h1>
          <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
          <p className="text-xl font-semibold text-green-700 mb-6">Price: ${selectedProduct.price}</p>
          <button
            onClick={handleAddToCart}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-md transition duration-200 w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

/**
 * handleProductClick هو ده اللي من خلاله لما بضغط علي عنصر بيشوف موجود ولا لا وبيعرض التفاصيل بتعته
 * *بس لو المستخدم عمل Refresh للصفحة بتاعت التفاصيل
 * ، الـ selectedProduct هيبقى null، 
 * لإنه كان متخزن مؤقت في الذاكرة
 * (state)، ومش في مكان دائم.
*/