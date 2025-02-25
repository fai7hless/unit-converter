import React, { useState } from "react";
import axios from "axios";

const LengthConverter = () => {
    const [value, setValue] = useState("");
    const [fromUnit, setFromUnit] = useState("meter");
    const [toUnit, setToUnit] = useState("foot");
    const [result, setResult] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("/convert-length", {
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
        <div className="m-auto  bg-white p-10 rounded-b-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-5 text-center">Length Converter</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
                
                <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="text-center border-solid border-1 rounded-lg p-1">
                    <option value="milimeter">Milimeter</option>
                    <option value="centimeter">Centimeter</option>
                    <option value="meter">Meter</option>
                    <option value="kilometer">Kilometer</option>
                    <option value="inch">Inch</option>
                    <option value="foot">Foot</option>
                    <option value="yard">Yard</option>
                    <option value="mile">File</option>

                </select>
                <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="text-center border-solid border-1 rounded-lg p-1">
                    <option value="milimeter">Milimeter</option>
                    <option value="centimeter">Centimeter</option>
                    <option value="meter">Meter</option>
                    <option value="kilometer">Kilometer</option>
                    <option value="inch">Inch</option>
                    <option value="foot">Foot</option>
                    <option value="yard">Yard</option>
                    <option value="mile">Mile</option>
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

export default LengthConverter;