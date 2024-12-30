import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ProductTable = () => {
  const productData = [
    { id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
    { id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 812 },
    { id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 632 },
    { id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 934 },
    { id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 728 },
    { id: 6, name: "Running Shoes", category: "Fitness", price: 89.99, stock: 120, sales: 845 },
    { id: 7, name: "Gaming Headset", category: "Electronics", price: 129.99, stock: 45, sales: 1034 },
    { id: 8, name: "Portable Charger", category: "Electronics", price: 49.99, stock: 234, sales: 1102 },
    { id: 9, name: "Desk Lamp", category: "Home", price: 24.99, stock: 150, sales: 600 },
    { id: 10, name: "Water Bottle", category: "Fitness", price: 19.99, stock: 300, sales: 1200 },
    { id: 11, name: "Bluetooth Speaker", category: "Electronics", price: 99.99, stock: 80, sales: 950 },
    { id: 12, name: "Backpack", category: "Accessories", price: 59.99, stock: 180, sales: 710 },
    { id: 13, name: "The Great Gatsby", category: "Books", price: 10.99, stock: 200, sales: 1500 },
    { id: 14, name: "1984 by George Orwell", category: "Books", price: 8.99, stock: 120, sales: 1100 },
    { id: 15, name: "To Kill a Mockingbird", category: "Books", price: 12.99, stock: 150, sales: 1350 },
    { id: 16, name: "The Catcher in the Rye", category: "Books", price: 9.99, stock: 180, sales: 1250 },
    { id: 17, name: "Hair Dryer", category: "Home", price: 39.99, stock: 90, sales: 440 },
    { id: 18, name: "Travel Pillow", category: "Accessories", price: 19.99, stock: 220, sales: 650 },
    { id: 19, name: "Jump Rope", category: "Fitness", price: 14.99, stock: 500, sales: 950 },
    { id: 20, name: "Electric Kettle", category: "Home", price: 49.99, stock: 60, sales: 430 },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Filtered data based on search term
  const filteredProducts = productData.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="border rounded-lg my-10 pt-1 shadow-md">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-semibold">Product List</h1>
        <input
          type="text"
          placeholder="Search by name or category"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/2 p-2 border rounded-lg"
        />
      </div>
      <Table>
        <TableCaption className="pb-2">A list of your Products</TableCaption>
        <TableHeader>
          <TableRow className="text-lg">
            <TableHead className="font-semibold">Name</TableHead>
            <TableHead className="font-semibold">Category</TableHead>
            <TableHead className="font-semibold">Stock</TableHead>
            <TableHead className="font-semibold">Sales</TableHead>
            <TableHead className="text-right font-semibold">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.sales}</TableCell>
              <TableCell className="text-right">${product.price.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;