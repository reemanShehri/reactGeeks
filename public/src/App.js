import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  // Product Data
  const products = [
    { name: "Laptop", category: "Electronics", price: 1500 },
    { name: "Smartphone", category: "Electronics", price: 800 },
    { name: "T-shirt", category: "Clothing", price: 25 },
    { name: "Jeans", category: "Clothing", price: 50 },
    { name: "Tablet", category: "Electronics", price: 400 },
    { name: "Jacket", category: "Clothing", price: 100 }
  ];

  // State to manage the current filter
  const [filter, setFilter] = useState("All");

  // Filter products based on the selected category
  const filteredProducts = filter === "All"
    ? products
    : products.filter(product => product.category === filter);

  // Event handler to change filter
  const handleFilterChange = (category) => {
    setFilter(category);
  };

  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="filter-section">
        <button onClick={() => handleFilterChange("All")}>All</button>
        <button onClick={() => handleFilterChange("Electronics")}>Electronics</button>
        <button onClick={() => handleFilterChange("Clothing")}>Clothing</button>
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
