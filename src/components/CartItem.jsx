import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon!');
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

      <div className="cart-page">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Unit Price: ${item.price}</p>
                  <p>Total Cost: ${(item.price * item.quantity).toFixed(2)}</p>
                  <div className="qty-controls">
                    <button onClick={() => handleDecrease(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrease(item)}>+</button>
                  </div>
                  <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}

            <h2>Total Cart Amount: ${totalAmount.toFixed(2)}</h2>

            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
            <Link to="/products">
              <button className="continue-btn">Continue Shopping</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default CartItem;
