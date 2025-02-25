import React, { useState } from "react";
import axios from "axios";

const TemperatureConverter = () => {
    const [value, setValue] = useState("");
    const [fromUnit, setFromUnit] = useState("celsius");
    const [toUnit, setToUnit] = useState("fahrenheit");
    const [result, setResult] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("/convert-temperature", {
            value,
            fromUnit,
            toUnit,
          });
          setResult(response.data.convertedValue);
        } catch (error) {
          console.error("Error converting units:", error);
        }
    };

    return (
        <div className="m-auto  bg-white p-10 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-5 text-center">Temperature Converter</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
                
                <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="text-center border-solid border-1 rounded-lg p-1">
                    <option value="celsius">Celsius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="kelvin">Kelvin</option>

                </select>
                <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="text-center border-solid border-1 rounded-lg p-1">
                    <option value="celsius">Celsius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="kelvin">Kelvin</option>
                </select>
                <input 
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter value"
                className="text-center border-solid border-1 rounded-lg p-1"
                required />
                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Convert</button>
            </form>
            {result && (
                <div className="">
                <p className="text-lg">
                    {value} {fromUnit} = {result} {toUnit}
                </p>
                </div>
            )}
        </div>
    );
}

export default TemperatureConverter;