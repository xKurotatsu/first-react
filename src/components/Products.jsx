import { useEffect } from "react";
import { useFetch } from "../store/useFetch";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const state = useFetch((state) => state);
  const { product, fetchData } = state;
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <button onClick={() => navigate(-1)} className="mb-4">
        Back
      </button>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {product?.length > 0 ? (
          product?.map((item) => (
            <div key={item?.id} className="border rounded-lg shadow-md p-4">
              <img
                src={item?.thumbnail}
                alt={item?.title}
                className="w-full h-48 object-cover mb-2 rounded"
              />
              <h2 className="font-semibold text-lg">{item?.title}</h2>
              <p className="text-gray-700">${item?.price}</p>
            </div>
          ))
        ) : (
          <h1 className="text-red-500">No products available</h1>
        )}
      </div>
    </div>
  );
};

export default Products;
