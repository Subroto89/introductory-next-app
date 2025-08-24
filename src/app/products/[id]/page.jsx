// import { notFound } from 'next/navigation';
// import { products } from '@/lib/products';

// export default function ProductDetailsPage({ params }) {
//   // Find the product that matches the ID from the URL
//   const product = products.find((p) => p._id === params._id);

//   // If no product is found, show the Next.js not-found page
//   if (!product) {
//     notFound();
//   }

//   return (
//     <div className="container mx-auto p-8 text-gray-700">
//       <div className="bg-white rounded-lg shadow-lg p-8 text-gray-700">
//         <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
//         <p className="text-gray-600 mb-4">{product.description}</p>
//         <p className="text-gray-800 font-bold text-2xl">${product.price}</p>
//       </div>
//     </div>
//   );
// }

import { notFound } from 'next/navigation';

async function getProductDetails(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`);

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function ProductDetailsPage({ params }) {
  // Await the params object before destructuring
  const { id } = params;
  
  // This is the line that will now correctly log the id
  console.log(`[DetailsPage DEBUG] params.id = ${id}`);

  const product = await getProductDetails(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="w-full mx-auto p-8 text-gray-700 bg-gray-900 min-h-screen">
      <h2 className='text-5xl font-extrabold text-blue-400 mb-6 text-center'>Product Details</h2>
      <div className="bg-gray-800 rounded-xl shadow-2xl p-10 max-w-2xl mx-auto border border-blue-600 text-white">
        <h1 className="text-4xl font-bold text-blue-300 mb-4">{product.name}</h1>
        <p className="text-gray-400 text-lg mb-6 leading-relaxed">{product.description}</p>
        <div className="flex items-baseline justify-between pt-4 border-t border-gray-700 mt-6">
          <p className="text-blue-200 font-extrabold text-3xl">Price: ${product.price.toFixed(2)}</p>
          <span className="text-sm text-gray-500">Product ID: {id}</span>
        </div>
      </div>
    </div>
  );
}