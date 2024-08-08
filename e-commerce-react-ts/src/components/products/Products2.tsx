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
      .then((error) => console.log(error));
  }, []);



  return (
    <>
    <h1 className="text-center text-bold text-2xl hover:text-yellow-800 underline">Products</h1>
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 m-28">
      { data.map((product) => (
        <li key={product.id} className="flex h-full">
          <div className="group relative block overflow-hidden border flex-grow">
            <img
              src={product.image}
              alt={product.title}
              className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72"
            />
            <div className="relative border border-gray-100 bg-white px-6 pb-6">
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {product.title}
              </h3>
              <div className="flex justify-between items-center mt-1.5 text-sm text-gray-700">
                <p>
                  Price: <span className="font-semibold">${product.price}</span>
                </p>
                <div className="flex gap-2">
                  <div className="flex">
                    <span>{product.rating.rate}</span>
                    <img
                      className="h-4 w-4 self-center"
                      src={StarSvg}
                      alt="rating-star"
                    />
                  </div>
                  <span>({product.rating.count})</span>
                </div>
              </div>
              <form className="mt-4">
                <button className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
                  Add to Cart
                </button>
              </form>
            </div>
          </div>
        </li>
      ))}
    </ul>
    </>
  );
};

export default Products2;
