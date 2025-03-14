import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart }) {
    return (
        <div>
            <h2>Shopping Cart</h2>
            <Link to="/">Continue Shopping</Link>

            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item.id}>
                                <td><img src={item.image} alt={item.name} width="50" /></td>
                                <td>{item.name}</td>
                                <td>₹ {item.price}</td>
                                <td>{item.quantity}</td>
                                <td>₹ {item.price * item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Cart;
