import React, { useState } from "react";

function NumberInput() {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);

    if (isNaN(value)) {
      setMessage("Please enter a number.");
      return;
    }

    if (value < 0) {
      setMessage("Enter a positive value.");
    } else if (value % 2 === 0) {
      const nextEvens = [value + 2, value + 4, value + 6];
      setMessage(`Next 3 even numbers: ${nextEvens.join(", ")}`);
    } else {
      const nextOdds = [value + 2, value + 4, value + 6];
      setMessage(`Next 3 odd numbers: ${nextOdds.join(", ")}`);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 max-w-md w-full bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Number Input</h1>
        <input
          type="number"
          onChange={handleChange}
          placeholder="Enter a number"
          className="w-full p-3 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="mt-4 text-lg text-gray-700 text-center">{message}</p>
      </div>
    </div>
  );
}

export default NumberInput;
