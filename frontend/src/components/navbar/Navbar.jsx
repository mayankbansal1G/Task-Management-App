import React, { useState } from "react";
import appLogo from "../../assets/appLogo.png"

const Navbar = () => {
    return (
        <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
            <img src={appLogo} className="h-12 w-12 object-cover" alt="logo" />
            <h2 className="text-xl font-medium text-black py-2">Task Manager</h2>
        </div>
    );
};

export default Navbar;
