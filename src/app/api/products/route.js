// src/app/api/products/route.js
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

// This handles GET requests to /api/products
// It fetches all products from the database.
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('myNextIntroductory');
    const productsCollection = db.collection('products');

    const products = await productsCollection.find({}).toArray();

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ message: 'Error fetching products.', error: error.message }, { status: 500 });
  }
}


// This handles POST requests to /api/products
// It adds a new product to the database.
export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db('myNextIntroductory');
    const productsCollection = db.collection('products');

    const data = await request.json();
    
    // Insert the new product into the database
    const result = await productsCollection.insertOne(data);

    // After a successful insert, you can return the data you received
    // along with the MongoDB-generated _id.
    // The `result.ops[0]` property is deprecated, so we return the data directly.
    return NextResponse.json({
      message: 'Product added successfully!',
      product: data,
      insertedId: result.insertedId,
    }, { status: 201 });
  } catch (error) {
    console.error('Error adding product:', error);
    return NextResponse.json({ message: 'Error adding product.', error: error.message }, { status: 500 });
  }
}