
import Link from "next/link";

// This function fetches data from your MongoDB API endpoint
async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch product data');
  }

  return res.json();
}

export default async function Home() {
  let products = [];
  try {
    products = await getProducts();
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      
      <main className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-900 to-gray-700 text-white min-h-[calc(100vh-180px)]">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-12 drop-shadow-lg">
          Featured Products
        </h2>
        
        {/* Products Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {products.length > 0 ? (
            products.slice(0, 3).map((product) => (
              <div key={product._id} className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                <p className="text-gray-800 font-extrabold text-3xl mb-4">${product.price}</p>
                <Link href={`/products/${product._id}`} className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-200 shadow-md">
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-full">No products found. Add some from the dashboard!</p>
          )}
        </div>

        {/* Call to Action for more products */}
        <div className="mt-16 text-center">
          <Link href="/products" className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-800 text-xl font-bold rounded-full shadow-lg transition-colors duration-300">
            See All Products &rarr;
          </Link>
        </div>
      </main>
    
    </>
  );
}