import React, { useState } from "react";
import appLogo from "../../assets/appLogo.png"

const Navbar = () => {
    return (
        <div className="bg-white flex items-center justify-between px-12 py-2 drop-shadow">
            <img src={appLogo} className="h-12 w-12 object-cover" alt="logo" />
            <h2 className="text-2xl font-medium py-2 text-primary">Task Manager</h2>
        </div>
    );
};

export default Navbar;
