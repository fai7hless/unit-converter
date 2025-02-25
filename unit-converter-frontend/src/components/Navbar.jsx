import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return(
        <div>
            <nav className="bg-blue-600 p-4 text-white rounded-t-lg">
                <ul className="flex space-x-4 text-align-center justify-center">
                    <li>
                        <Link to="/length" className="hover:underline">Length</Link>
                    </li>
                    <li>
                        <Link to="/weight" className="hover:underline">Weight</Link>
                    </li>
                    <li>
                        <Link to="/temperature" className="hover:underline">Temperature</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;