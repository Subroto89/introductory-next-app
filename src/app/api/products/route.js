// src/app/api/products/route.js
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb'; // Import your MongoDB connection utility

export async function POST(request) {
  try {
    // 1. Get the MongoDB client instance
    const client = await clientPromise;
    
    // 2. Select your database and collection
    // Replace 'your-database-name' with the actual name of your database in MongoDB Atlas
    // Replace 'products' with the actual name of your collection
    const db = client.db('myNextIntroductory'); 
    const productsCollection = db.collection('products');

    // 3. Parse the request body to get the product data
    const data = await request.json();

    // 4. Insert the new product into the database
    const result = await productsCollection.insertOne(data);

    // 5. Return a success response
    return NextResponse.json({
      message: 'Product added successfully!',
      product: result.ops[0], // `result.ops[0]` contains the inserted document with its _id
      insertedId: result.insertedId, // MongoDB's _id for the new document
    }, { status: 201 }); // 201 Created status code
  } catch (error) {
    // 6. Handle any errors during the process
    console.error('Error adding product:', error);
    return NextResponse.json({ message: 'Error adding product.', error: error.message }, { status: 500 }); // 500 Internal Server Error
  }
}