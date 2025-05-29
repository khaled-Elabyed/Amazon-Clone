import React, {createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider =  ({children}) => {
  const [products, setproducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart , setcart] = useState([]);
  useEffect(() => {
    const fetchProducts = async ()=> {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setproducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const addtocart = (product) => {
    setcart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        // منتج جديد: ضيفه بالكارت
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  

  const increaseQuantity = (id) => {
    setcart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setcart(prev =>
      prev.map(item =>
        item.id === id && (item.quantity || 1) > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return(
    <ProductContext.Provider value={{products , selectedProduct, setSelectedProduct , cart , setcart , addtocart , increaseQuantity , decreaseQuantity}}>
        {children} 
    </ProductContext.Provider>
  )
};
export default ProductProvider;
/**
 * (createContext() داله) (ProductContext محطوطه جوه متغير  ال)   (متغير ال ProductContext فيه ال state)
 * ProductContext.Provider (ده بيبث البيانات للكمبوننت اللي بيراب عليها)
 * {children}  بيمثل اي copmponent جوه ال  (ProductProvider) زي ال ProductLists وال ProductDetails
 */