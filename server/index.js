// server/index.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Mock product data (for now)
const products = [
  { id: '1', name: 'Wireless Mouse', description: 'Ergonomic wireless mouse.', price: 25.99 },
  { id: '2', name: 'Mechanical Keyboard', description: 'RGB mechanical keyboard.', price: 85.50 },
  { id: '3', name: 'External SSD', description: '1TB portable SSD.', price: 110.00 },
];

// Endpoint to get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Endpoint to get a single product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// NEW: Endpoint to add a new product
app.post('/api/products', (req, res) => {
  const newProduct = {
    id: (products.length + 1).toString(), // Simple ID generation
    ...req.body, // Get data from the request body
  };
  products.push(newProduct); // Add to the mock array
  console.log('Product added to mock database:', newProduct); // Log to server console
  res.status(201).json({ message: 'Product added successfully', product: newProduct });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});