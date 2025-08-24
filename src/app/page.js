import ProductHighlights from "@/components/ProductsHighlight";

export default function Home() {
  return (
    <>
      
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] bg-gradient-to-br from-gray-900 to-gray-700 text-white">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6 drop-shadow-lg">
          Welcome to Electronics Hub!
        </h2>
        
        <div className="text-center max-w-3xl space-y-6">
          <p className="text-xl sm:text-xl md:text-2xl font-light leading-relaxed w-full h-full">
            Your premier destination for cutting-edge electronics. We offer a curated selection of the latest gadgets, high-performance computing components, and essential accessories. Our mission is to provide you with the technology you need to innovate, create, and connect. Explore our diverse range of products, from powerful laptops to smart home devices, all at competitive prices.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold mt-8 text-yellow-300 animate-pulse">
            Discover innovation. Shop smart. Live connected.
          </p>
          <button className="mt-10 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">
            Explore Products Now!
          </button>
        </div>

        <ProductHighlights/>
      </main>
    
    </>
  );
}