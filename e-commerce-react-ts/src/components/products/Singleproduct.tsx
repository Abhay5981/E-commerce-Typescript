
import React, { ReactNode, useEffect, useState } from 'react';

interface DataItem {
  price: ReactNode;
  description: ReactNode;
  category: ReactNode;
  image: string | undefined;
  id: number;
  title: string;
}

const SingleProduct: React.FC = () => {
  const [data, setData] = useState<DataItem | null>(null); // Change state to hold a single product object

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <h1 className='text-center font-bold text-2xl'>Single Product</h1>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex justify-center">
          <div className="lg:w-1/4 md:w-1/3 p-4 m-auto border-black border-2 border-opacity-60 w-full" key={data.id}>
            <a className="block relative h-full overflow-hidden object-center">
              <img alt={data.title} className="object-cover object-center w-full h-48 block cursor-pointer relative" src={data.image} />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{data.category}</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">{data.title}</h2>
              <p className="mt-1">{data.price}</p>
              <p className="mt-1">{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
  
};

export default SingleProduct;

