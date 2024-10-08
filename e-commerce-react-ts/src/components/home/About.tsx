import { useProductsContext } from "../context/ProductContext";



const About: React.FC = () => {

  const {myName} = useProductsContext()

  return (
    <>
   
    {myName}


    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">About Us</h1>
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
        Welcome to our store! We are committed to providing you with the best products and services. Our team works tirelessly to bring you a diverse range of high-quality items that meet your needs and exceed your expectations.
      </p>
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
        Our mission is to create a seamless shopping experience that is both enjoyable and convenient. We believe in putting our customers first and strive to offer exceptional customer service and support.
      </p>
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
        Thank you for choosing us. We look forward to serving you and making your shopping experience the best it can be!
      </p>
    </div>
    </>
  );
};

export default About;




