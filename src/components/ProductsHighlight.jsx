// src/components/ProductHighlights.jsx

import { useTheme } from '@/contexts/ThemeContext';
import productsData from '@/lib/productsData';

export default function ProductHighlights() {
  const {theme} = useTheme();
  return (
    <section className="container mx-auto p-2 md:p-8">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-400">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsData.map((product) => (
          <div key={product.id} className={`${theme==='dark' ? "bg-gray-800" : "bg-white"} rounded-lg shadow-xl p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105 duration-300 border border-gray-700`}>
            {/* Product Image - onError prop REMOVED */}
            <img
              src={product.imageUrl || `https://placehold.co/400x300/a0aec0/ffffff?text=No Image`}
              alt={product.name}
              className="w-full h-64 object-cover rounded-md mb-4 shadow-sm border border-gray-600"
             
            />
            <h3 className="text-2xl font-semibold mb-2 text-blue-300">{product.name}</h3>
            <p className="text-gray-400 mb-4 flex-grow">{product.description}</p>
            <p className="text-blue-200 font-bold text-xl">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
