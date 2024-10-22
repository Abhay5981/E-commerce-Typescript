import React from 'react';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  onRemoveItem: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onRemoveItem }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-lg">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {cartItems.length > 0 ? (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <h3 className="text-lg">{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                onClick={() => onRemoveItem(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}

      <div className="mt-6">
        <h3 className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</h3>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
