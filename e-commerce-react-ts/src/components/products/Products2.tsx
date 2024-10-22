import React, { ReactNode, useEffect, useState } from "react";
import StarSvg from "../../assets/star-7207.svg";
import { NavLink } from "react-router-dom";
import Cart from "../home/Cart";

interface DataItem {
  rating: any;
  price: ReactNode;
  description: ReactNode;
  category: ReactNode;
  image: string | undefined;
  id: number;
  title: string;
}

const Products2: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [filteredData, setFilteredData] = useState<DataItem[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  
  const [cart, setCart] = useState<CartItem[]>([]);



  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {setData(data)
        setFilteredData(data)
      })
      
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (categoryFilter === "all") {
      setFilteredData(data);
    } else {
      const filtered = data.filter(
        (product) => product.category === categoryFilter
      );
      setFilteredData(filtered);
    }
  }, [categoryFilter, data]);


   // Handler to add products to cart
   const addToCart = (product: DataItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      
      if (existingItem) {
        // Update quantity if product already in cart
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new product to cart
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Handler to remove products from cart
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };


  return (
    <>
    <div className="m-4 p-2 ">
      <div className="mb-6 grid-flow-row">
          <label htmlFor="category" className="mr-4 text-lg ">Filter by Category: </label>
          <select
            id="category"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border rounded p-2 shadow-lg "
          >
            <option value="all">All</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
        <hr /> 
        <h1 className="text-center text-bold text-2xl hover:text-yellow-600 underline mt-8">Products</h1>
      <ul className="grid gap-6 px-4 sm:px-6 lg:px-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mb-18 shadow-md  transition-transform translate-y-2 ">
        {filteredData.map((product) => (
          <li key={product.id} className="flex flex-col border rounded-lg overflow-hidden shadow-lg  transition-transform transform hover:scale-105 ">
            <NavLink to={`/SingleProduct/${product.id}`}>
              <div className="w-full h-full absloute object-center">
              <img
              src={product.image}
              alt={product.title}
              className="max-w-full h-auto m-auto p-4 sm:h-60 md:h-72 object-cover object-center shrink-0 transition-transform duration-500 "
            />
            </div>
            </NavLink>
           
           
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">{product.title}</h3>
              <div className="flex justify-between items-center mb-2 text-sm text-gray-700">
                <p className="font-semibold">${product.price}</p>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <span className="mr-1">{product.rating.rate}</span>
                    <img className="h-4 w-4" src={StarSvg} alt="rating-star" />
                  </div>
                  <span>({product.rating.count})</span>
                </div>
              </div>
              <form className="mt-4">
              
                <button className="w-full rounded bg-yellow-400 p-2 text-sm font-medium transition-transform hover:scale-105"
                onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
                
              </form>
            </div>
          </li>
        ))}
      </ul>
       {/* Render Cart Component */}
       <div className="mt-10">
          <Cart cartItems={cart} onRemoveItem={removeFromCart} />
        </div>
      </div>
      <hr className="h-2 font-bold text-black"/>
    </>
  );
};

export default Products2;

