import { JSX } from "react/jsx-runtime";
import { useProductsContext } from "./context/ProductContext";

import Products1 from "./products/Products1";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductsContext();

  if (isLoading) {
    return <div className="text-center text-xl font-bold"> ....Loading </div>;
  }
  return (
    <>
      <div className="section mt-5">
        <div className="container text-center text-xl font-bold">
          <div className="intro">Check Now</div>
          <div className="comman-heading">Our Feature Service</div>
          <div className="grid grid-cols-3">
            {featureProducts.map((currEle: JSX.IntrinsicAttributes) => {
              return <Products1 key={currEle.id} {...currEle} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
