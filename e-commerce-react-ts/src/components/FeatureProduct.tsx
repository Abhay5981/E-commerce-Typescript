import React from "react";
import { useProductsContext } from "./context/ProductContext";
import Products1 from "./products/Products1";

// Define a type for the products
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
 

}

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductsContext();

  if (isLoading) {
    return <div className="text-center text-xl font-bold">....Loading</div>;
  }

  return (
    <>
      <div className="section mt-5 bg-sky-300"> {/* Updated background color */}
        <div className="container text-center">
          <div className="intro text-xl font-bold">Check Now</div>
          <div className="comman-heading text-2xl font-bold mb-6">Our Feature Service</div>
          
          {/* Grid for product items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureProducts.map((currEle: Product) => {
              return <Products1 key={currEle.id} {...currEle} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
