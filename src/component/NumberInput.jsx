import React,{useState} from 'react'



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
    <div style={{ padding: "20px" }}>
      <h1>Number Input</h1>
      <input
        type="number"
        onChange={handleChange}
        placeholder="Enter a number"
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <p style={{ marginTop: "20px", fontSize: "18px" }}>{message}</p>
    </div>
  );
  
}

export default NumberInput