import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../context/ProductContext";
import StarSvg from "../../assets/star-7207.svg";

const API = "https://fakestoreapi.com/products";

const SingleProduct: React.FC = () => {
  const { getSingleProduct, isSingleLoading, SingleProduct } =
    useProductsContext();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      getSingleProduct(`${API}/${id}`);
    }
  }, [id]);

  if (isSingleLoading) {
    return <div>Loading...</div>;
  }

  if (!SingleProduct) {
    return <div>No Product Found</div>;
  }

  return (
    <>
      <h1 className="text-center font-bold text-2xl">Single Product</h1>
      <div className="product-detail-container max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
        <div className="product-image-container md:w-1/2 w-full flex justify-center md:justify-start mb-6 md:mb-0">
          <div className="w-64 h-64 relative">
            <img
              src={SingleProduct.image}
              alt={SingleProduct.title}
              className="product-image absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="product-info md:w-1/2 w-full md:ml-6">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            {SingleProduct.title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {SingleProduct.description}
          </p>

          {/* Price, rating, and count in a single line */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-2xl font-bold text-blue-600">
              ${SingleProduct.price}
            </p>
            {SingleProduct.rating ? (
              <div className="flex items-center">
                <p className="text-lg text-gray-700 mr-2">
                  {SingleProduct.rating.rate}
                </p>
                <img src={StarSvg} alt="Rating star" className="h-5 w-5" />
                <span className="text-lg text-gray-700 ml-2">
                  ({SingleProduct.rating.count})
                </span>
              </div>
            ) : (
              <p className="text-lg text-gray-700">No rating available</p>
            )}
          </div>
          <hr className="border-yellow-400 "/>

          <form className="mt-4">
            <button className="w-full rounded bg-yellow-400 p-2 text-sm font-medium transition-transform hover:scale-105">
              Add to Cart
            </button>
          </form>
          
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
