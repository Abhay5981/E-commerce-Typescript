
import React,{ReactNode, useEffect, useState} from 'react';

interface DataItem {
  price: ReactNode;
  description: ReactNode;
  category: ReactNode;
  image: string | undefined;
  id:number;
  title:string;
}

const Products = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect( ()=> {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setData(data))
            .then(error => console.log(error));
  }, []);

  return (
    <section className="text-gray-600 body-font ">
    <div className="container px-5 py-20 mx-auto ">
      <div className="flex flex-wrap text-center -m-4 gap-4">
        {data.map((item)=>(
           <div className="lg:w-1/4 md:w-1/3 p-4 m-auto border-black border-2 border-opacity-60 w-full" key = {item.id}>
           <a className="block relative h-full  overflow-hidden object-center">
             <img alt={item.title} className="object-cover object-center w-full h-48 block cursor-pointer relative " src={item.image}/>
           </a>
           <div className="mt-4">
             <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
             <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
             <p className="mt-1">{item.price}</p>
           </div>
         </div>
        ))};
       
      
      </div>
    </div>
  </section>
  );
}

export default Products;


