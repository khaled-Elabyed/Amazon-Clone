import React, { useState } from 'react';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleOrder = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  }
    return(
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Checkout</h1>

        <div className="flex justify-between mb-8">
          <div className={`flex-1 text-center ${step >= 1 ? 'text-yellow-500 font-semibold' : 'text-gray-400'}`}>1. Address</div>
          <div className={`flex-1 text-center ${step >= 2 ? 'text-yellow-500 font-semibold' : 'text-gray-400'}`}>2. Payment</div>
          <div className={`flex-1 text-center ${step === 3 ? 'text-yellow-500 font-semibold' : 'text-gray-400'}`}>3. Confirm</div>
        </div>

        <form onSubmit={handleOrder} className="space-y-6">
          {step === 1 && (
            <div>
              <label className="block mb-2 font-medium text-gray-700">Shipping Address</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your full shipping address..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setStep(2)}
                className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-lg"
              >
                Continue to Payment
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <label className="block mb-4 font-medium text-gray-700">Select Payment Method</label>
              <div className="space-y-3">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    required
                  />
                  Credit / Debit Card
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  PayPal
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Cash on Delivery
                </label>
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-gray-600 hover:underline"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-lg"
                  disabled={!paymentMethod}
                >
                  Review Order →
                </button>
              </div>
            </div>
        )}
        </form>
    </div>
    </div>
);
};
export default Checkout;