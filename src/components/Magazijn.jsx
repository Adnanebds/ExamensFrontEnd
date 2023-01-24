import React from 'react';
import {useState,useEffect} from 'react';
import {Reorder} from 'framer-motion';
import axios from "axios";
import Navbar from './Navbar';
import Footer from './Footer';
// reorder
function Magazijn() {
  
const [products, setProducts] = useState([]);
const [skip, setSkip] = useState(0);
const [limit, setLimit] = useState(10);

useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get(`http://localhost:8800/products?skip=${skip}&limit=${limit}`);
    setProducts(response.data.Products);
};


  
  return (
    <div class="bg-white dark:bg-gray-900">
    <Navbar />
    <div class="m-10 bg-white dark:bg-gray-900">
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <nav class="flex items-center justify-between pt-4" aria-label="Table navigation">
        <div class="pb-1 ml-3"> 
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative mt-1 ml-3 flex items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="myInput" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
            </div>
        </div>
        <div class="mr-3">
            <button class="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </button>
        </div>
    </nav>
    <div class="m-5">
    <Reorder.Group values={products.slice(0,10)} onReorder={setProducts}>
    <table id="myTable" class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                ProductNaam
                </th>
                <th scope="col" class="px-6 py-3">
                Beschrijving
                </th>
                <th scope="col" class="px-6 py-3">
                categorie
                </th>
                <th scope="col" class="px-6 py-3">
                Actions
                </th>
            </tr>
        </thead>
        <tbody>
        {products.map(product => 
                <Reorder.Item as='tr' class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={product._id} value={product._id}>
            
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     {product.ProductName}
                </th>
                <td class="px-6 py-4">
                {product.Desscription}
                </td>
                <td class="px-6 py-4">
                {product.Category}
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            
            
            </Reorder.Item>)}
        </tbody>
    </table>
    </Reorder.Group>
    <nav class="flex items-center justify-between pt-4" aria-label="Table navigation">
        
        <ul class="inline-flex items-center -space-x-px">
            <li>
                <button onClick={() => {
    setSkip(skip - limit);
    fetchProducts();
}} class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Previous</span>
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                </button>
            </li>
            <li>
                <button onClick={() => {
    setSkip(skip + limit);
    fetchProducts();
}} class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Next</span>
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </button>
            </li>
        </ul>
    </nav>
</div>
</div>
</div>
<Footer />
</div>
  )}
export default Magazijn;