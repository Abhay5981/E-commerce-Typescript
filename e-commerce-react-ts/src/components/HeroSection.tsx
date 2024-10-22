import React, { useEffect, useState } from 'react';
import heroSectionImage from  "..//assets/image/heroSection.jpg"

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
    <section className="text-gray-600 body-font bg-cover bg-center bg-no-repeat"
    style={{backgroundImage: `url(${heroSectionImage})`}}
    >
      <div className="container mx-auto flex px-5 py-24 flex-col lg:flex-row w-full ">
        <div className="lg:w-1/2 flex flex-col md:items-start md:text-left items-center text-center lg:pr-24 md:pr-16 mb-16 md:mb-0 justify-between">
          {randomProduct && (
            <div className="flex flex-col-reverse lg:flex-row items-center w-full ml-32 ">
              <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-black">
                  Before they sold out
                </h1>
                <p className="mb-8 leading-relaxed text-gray-900 font-serif">
                  {randomProduct.title}
                </p>
                <div className="flex flex-col sm:flex-row justify-center sm:justify-start">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-4 sm:mb-0 sm:mr-4">
                    Add
                  </button>
                  <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                    Buy
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 lg:max-w-lg w-5/6 justify-e h-62">
                <img className="object-cover object-center rounded" alt={randomProduct.title} src={randomProduct.image} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
