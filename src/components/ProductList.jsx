import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';

const plants = [
  // Indoor Plants
  { id: 1, category: 'Indoor Plants', name: 'Snake Plant', price: 25, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=400&q=80' },
  { id: 2, category: 'Indoor Plants', name: 'Peace Lily', price: 30, image: 'https://images.unsplash.com/photo-1612363148951-15e6b8f3b9b1?auto=format&fit=crop&w=400&q=80' },
  { id: 3, category: 'Indoor Plants', name: 'ZZ Plant', price: 28, image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=400&q=80' },
  { id: 4, category: 'Indoor Plants', name: 'Spider Plant', price: 20, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=400&q=80' },
  { id: 5, category: 'Indoor Plants', name: 'Pothos', price: 18, image: 'https://images.unsplash.com/photo-1620127252536-03bdfcb67c8a?auto=format&fit=crop&w=400&q=80' },
  { id: 6, category: 'Indoor Plants', name: 'Rubber Plant', price: 35, image: 'https://images.unsplash.com/photo-1616500163195-9c4b39c6f4b1?auto=format&fit=crop&w=400&q=80' },

  // Outdoor Plants
  { id: 7, category: 'Outdoor Plants', name: 'Lavender', price: 22, image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=400&q=80' },
  { id: 8, category: 'Outdoor Plants', name: 'Rose Bush', price: 40, image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=400&q=80' },
  { id: 9, category: 'Outdoor Plants', name: 'Sunflower', price: 15, image: 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&w=400&q=80' },
  { id: 10, category: 'Outdoor Plants', name: 'Hydrangea', price: 45, image: 'https://images.unsplash.com/photo-1595338909262-2a9c1b3c7e9a?auto=format&fit=crop&w=400&q=80' },
  { id: 11, category: 'Outdoor Plants', name: 'Jasmine', price: 32, image: 'https://images.unsplash.com/photo-1596726611609-28f8b3c2c4b5?auto=format&fit=crop&w=400&q=80' },
  { id: 12, category: 'Outdoor Plants', name: 'Bougainvillea', price: 38, image: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?auto=format&fit=crop&w=400&q=80' },

  // Succulents
  { id: 13, category: 'Succulents', name: 'Aloe Vera', price: 16, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=400&q=80' },
  { id: 14, category: 'Succulents', name: 'Echeveria', price: 12, image: 'https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=400&q=80' },
  { id: 15, category: 'Succulents', name: 'Jade Plant', price: 19, image: 'https://images.unsplash.com/photo-1614594996823-c4b4b3b3c5b5?auto=format&fit=crop&w=400&q=80' },
  { id: 16, category: 'Succulents', name: 'Haworthia', price: 14, image: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=400&q=80' },
  { id: 17, category: 'Succulents', name: 'Sedum', price: 11, image: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?auto=format&fit=crop&w=400&q=80' },
  { id: 18, category: 'Succulents', name: 'Kalanchoe', price: 17, image: 'https://images.unsplash.com/photo-1519336056116-bc0f1771dec8?auto=format&fit=crop&w=400&q=80' },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const isInCart = (id) => cartItems.some((item) => item.id === id);

  const categories = ['Indoor Plants', 'Outdoor Plants', 'Succulents'];

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Plants</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
        <div className="cart-icon">
          🛒 <span className="cart-count">{totalCount}</span>
        </div>
      </nav>

      <div className="product-list-container">
        {categories.map((category) => (
          <div key={category}>
            <h2 className="category-title">{category}</h2>
            <div className="plants-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div key={plant.id} className="plant-card">
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p className="price">${plant.price}</p>
                    <button
                      className="add-btn"
                      disabled={isInCart(plant.id)}
                      onClick={() => handleAdd(plant)}
                    >
                      {isInCart(plant.id) ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
