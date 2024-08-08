import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

const HeroSection: React.FC = () => {
  const [, setData] = useState<Product[]>([]);
  const [randomProduct, setRandomProduct] = useState<Product | null>(null);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    setData(products);
    pickRandomProduct(products);
  };

  const pickRandomProduct = (products: Product[]) => {
    const randomIndex = Math.floor(Math.random() * products.length);
    setRandomProduct(products[randomIndex]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="text-gray-600 body-font m-5">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-slate-200 overflow-hidden">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
          {randomProduct && (
            <div className='flex flex-betweenm w-full'>
              <div>
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Before they sold out
                </h1>
                <p className="mb-8 leading-relaxed">
                  {randomProduct.title}
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Add
                  </button>
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Buy
                  </button>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-60 md:w-1/2 w-5/6 ml-auto flex flex-col bg-slate-200 overflow-hidden">
                <img className="object-cover object-center rounded " alt={randomProduct.title} src={randomProduct.image} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;