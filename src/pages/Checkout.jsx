export default function Checkout({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart 🛒</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty. Add some food!</p>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow-md p-4">
            <ul className="divide-y">
              {cart.map((item, idx) => (
                <li key={idx} className="flex justify-between py-2">
                  <span>{item.name}</span>
                  <span className="font-medium">₹{item.price}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-4 font-bold text-lg">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
          <button className="mt-6 w-full bg-green-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-600">
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
}
