"use client";

import Image from "next/image";

export default function Home() {
  const products = [
    {
      name: "Greyhound/Sighthound Corn Remedy",
      price: "£50.00",
      image: "/products/corn-remedy.jpg",
      description: "A specialized homeopathic remedy designed specifically for treating corns in Greyhounds and Sighthounds. This gentle yet effective formula helps alleviate discomfort and promotes healing."
    },
    {
      name: "Homeopathy Online Course",
      price: "£295.00",
      image: "/products/online-course.jpg",
      description: "Comprehensive online training in homeopathic principles and practices. Learn to treat common ailments naturally from the comfort of your home."
    },
    {
      name: "Sacred Earth Intensive Skin Healing Moisturiser",
      price: "£24.99",
      image: "/products/intensive-moisturiser.png",
      description: "A deeply nourishing moisturizer for severely dry or damaged skin. Contains natural ingredients to promote intensive healing and restoration."
    },
    {
      name: "Sacred Earth Skin Healing Daily Moisturiser",
      price: "£19.99",
      image: "/products/daily-moisturiser.png",
      description: "A gentle daily moisturizer that supports natural skin healing. Perfect for regular use to maintain healthy, balanced skin."
    },
    {
      name: "Sacred Earth Scar Healing",
      price: "£19.99",
      image: "/products/scar-healing.png",
      description: "Specialized formula designed to reduce the appearance of scars and promote healthy tissue regeneration."
    },
    {
      name: "Sacred Earth Acne, Spot And Blemish Healing",
      price: "£19.99",
      image: "/products/acne-healing.png",
      description: "Natural treatment for problematic skin, helping to clear acne, spots, and blemishes while balancing skin health."
    },
    {
      name: "Sacred Earth Pain Healing",
      price: "£19.99",
      image: "/products/pain-healing.png",
      description: "Natural pain relief formula that works gently with your body to reduce discomfort and promote healing."
    },
    {
      name: "Homeopathic First Aid Kits",
      price: "£40.00",
      image: "/products/first-aid-kit.png",
      description: "Complete kit containing essential homeopathic remedies for common emergencies and minor ailments."
    },
    {
      name: "Firework/Loud Noise/Anxiety Formula",
      price: "£30.00",
      image: "/products/anxiety-formula.jpg",
      description: "Calming formula to help pets cope with fireworks, thunderstorms, and other anxiety-inducing situations."
    },
    {
      name: "Puppy/kitten Teething Formula",
      price: "£30.00",
      image: "/products/teething-formula.jpg",
      description: "Gentle homeopathic remedy to ease teething discomfort in puppies and kittens."
    },
    {
      name: "Joint Ease Formula",
      price: "£30.00",
      image: "/products/joint-ease.jpg",
      description: "Natural formula to support joint health and ease discomfort in aging or active animals."
    },
    {
      name: "Injury Formula",
      price: "£30.00",
      image: "/products/injury-formula.jpg",
      description: "Homeopathic remedy to support natural healing after injuries and promote recovery."
    },
  ];

  const ProductCard = ({ product }: { product: { name: string; price: string; image: string; description: string } }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="relative h-48 w-full">
        <Image 
          src={product.image} 
          alt={product.name} 
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
        <p className="text-[#e28743] font-bold mb-2">{product.price}</p>
        <p className="text-sm text-gray-600 mb-4 flex-grow">{product.description}</p>
        <button className="bg-[#e28743] text-white px-4 py-2 rounded-full hover:bg-[#c77738] transition duration-300 w-full">
          Add to Cart
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8 items-center sm:items-start pt-8 bg-gray-50">
      {/* Custom Banner with adjusted gradient */}
      <div className="w-full bg-gradient-to-r from-[#e28743] via-[#e28743] to-[#e9a265] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-repeat bg-center" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
          </div>
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Lori Rose Homeopathy</h1>
            <p className="text-xl sm:text-2xl md:text-3xl mb-8">Natural Healing for You and Your Animals</p>
            <div className="flex space-x-4">
              <button className="bg-white text-[#e28743] px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
                Explore Products
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#e28743] transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Image container */}
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
        {/* <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 relative overflow-hidden rounded-lg shadow-md">
          <Image src="/placeholderbanner.jpg" alt="Banner" layout="fill" objectFit="cover" />
        </div> */}

        {/* Welcome text */}
        <div className="mt-8 text-center">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-800 font-medium">
            Welcome to Lori Rose Homeopathy and thank you for choosing a natural and gentle choice of healthcare for you and your animals.
          </p>
        </div>

        {/* Product boxes */}
        <div className="w-full mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}