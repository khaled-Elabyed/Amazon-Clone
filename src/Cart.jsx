import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(ProductContext);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Shopping Cart</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">Your cart is empty 😔</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cart.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 w-full object-contain mb-3"
                />
                <h2 className="text-lg font-semibold text-gray-800 mb-1">{product.title}</h2>
                <p className="text-yellow-600 font-bold text-md">Price: ${product.price}</p>

                <div className="mt-4 flex items-center space-x-3">
                  <button
                    onClick={() => decreaseQuantity(product.id)}
                    className="bg-stone-800 text-white px-3 py-1 rounded hover:bg-stone-900"
                  >
                    -
                  </button>
                  <span className="font-semibold text-gray-700">
                    {product.quantity || 1}
                  </span>
                  <button
                    onClick={() => increaseQuantity(product.id)}
                    className="bg-stone-800 text-white px-3 py-1 rounded hover:bg-stone-900"
                  >
                    +
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
