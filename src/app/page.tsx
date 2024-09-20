"use client";

export default function Home() {
  const products = [
    { name: "Homeopathic Remedy A", price: "$19.99" },
    { name: "Natural Supplement B", price: "$24.99" },
    { name: "Herbal Tincture C", price: "$15.99" },
    { name: "Homeopathic Remedy D", price: "$19.99" },
    { name: "Natural Supplement E", price: "$24.99" },
    { name: "Herbal Tincture F", price: "$15.99" },
    { name: "Homeopathic Remedy G", price: "$19.99" },
    { name: "Natural Supplement H", price: "$24.99" },
    { name: "Herbal Tincture I", price: "$15.99" },
  ];

  return (
    <div className="flex flex-col gap-8 items-center sm:items-start pt-8">
      {/* Image container */}
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 relative overflow-hidden">
          <img src="/placeholderbanner.jpg" alt="Banner" className="w-full h-full object-cover object-center" />
        </div>

        {/* Welcome text */}
        <div className="mt-6 text-center">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-800">
            Welcome to Lori Rose Homeopathy and thank you for choosing a Natural and gentle choice of healthcare for you and your animals.
          </p>
        </div>

        {/* Product boxes */}
        <div className="w-full mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
                <img src="/placeholderbanner.jpg" alt={product.name} className="w-full h-48 object-cover object-center mb-4 rounded" />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.price}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Add to Cart</button>
              </div>
            ))}
          </div>
          <hr className="border-t border-black my-8 mx-2 sm:mx-6 md:mx-12 lg:mx-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(3, 6).map((product, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
                <img src="/placeholderbanner.jpg" alt={product.name} className="w-full h-48 object-cover object-center mb-4 rounded" />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.price}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Add to Cart</button>
              </div>
            ))}
          </div>
          <hr className="border-t border-black my-8 mx-2 sm:mx-6 md:mx-12 lg:mx-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(6, 9).map((product, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
                <img src="/placeholderbanner.jpg" alt={product.name} className="w-full h-48 object-cover object-center mb-4 rounded" />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.price}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
