// Home.js
import React from 'react';
import useProductApi from '../hooks/CustomHooks';

const Home = () => {
    const { data: products, loading } = useProductApi('https://fakestoreapi.com/products');

    return (

        <div>
            <h1>Home Page</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <p>{product.title}</p>
                            <p>${product.price}</p>
                            <a href={`/product/${product.id}`}>View Details</a>
            </li>
            ))}
        </ul>
    )
}
    </div >
  );
};

export default Home;