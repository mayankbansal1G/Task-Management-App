import React from "react";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, onClearSearch }) => {
    return (
        <div className="w-80 flex items-center bg-slate-100 rounded-md">
            <input
                type="text"
                placeholder="Search Notes"
                className="w-full text-xs bg-transparent py-[11px] outline-none"
                value={value}
                onChange={onChange}
            />
            {value && <div className="text-xl text-slate-500 cursor-pointer hover:text-black hover:bg-hoverColor mr-3" onClick={onClearSearch}>Close</div>}
        </div>
    );
};

export default SearchBar;
