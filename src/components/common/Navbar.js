import React from "react";

const Navbar = () => {

    return (
        <div>
            <div className="flex space-x-10 bg-blue-400">
                <div>
                    <h1>Qayyum Siddiqui</h1>
                </div>
                <div>
                    <ul className="flex space-x-4">
                        <li>Home</li>
                        <li>Blog</li>
                        <li>Projects</li>
                        <li>Resources</li>
                    </ul>
                </div>
            </div>

        </div>
    )
};

export default Navbar;