import React, { ReactNode, useEffect, useState } from "react";
import StarSvg from "../../assets/star-7207.svg";
import { NavLink } from "react-router-dom";

interface DataItem {
  rating: { rate: number; count: number };
  price: ReactNode;
  description: ReactNode;
  category: ReactNode;
  image: string | undefined;
  id: number;
  title: string;
}

const Products: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="mt-6 ">
        <ul className="grid gap-6 px-4 sm:px-6 lg:px-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {data.slice(0, 6).map((product) => (
            <li
              key={product.id}
              className="flex flex-col border rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105"
            >
              <div className="">
              <NavLink to={`/SingleProduct/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-w-full h-auto sm:h-60 transition-transform duration-500 m-auto p-4"
                />
              </NavLink>
              </div>
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
                <p className="text-sm text-gray-600 truncate">{product.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Products;
