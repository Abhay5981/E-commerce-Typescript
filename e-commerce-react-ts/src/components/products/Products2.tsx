import React, { ReactNode, useEffect, useState } from "react";
import StarSvg from "../../assets/star-7207.svg";

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

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1 className="text-center text-bold text-2xl hover:text-yellow-800 underline mb-8">Products</h1>
      <ul className="grid gap-6 px-4 sm:px-6 lg:px-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((product) => (
          <li key={product.id} className="flex flex-col border rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105">
            <img
              src={product.image}
              alt={product.title}
              className="w-68 h-68 inset-0 sm:h-60 md:h-72 object-cover transition-transform duration-500"
            />
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
                <button className="w-full rounded bg-yellow-400 p-2 text-sm font-medium transition-transform hover:scale-105">
                  Add to Cart
                </button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products2;
