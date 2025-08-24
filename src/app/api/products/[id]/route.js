// src/app/api/products/[id]/route.js
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';

export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ message: 'Invalid product ID' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('myNextIntroductory');
    const productsCollection = db.collection('products');

    const product = await productsCollection.findOne({ _id: new ObjectId(id) });

    if (!product) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { message: 'Error fetching product.', error: error.message },
      { status: 500 }
    );
  }
}
