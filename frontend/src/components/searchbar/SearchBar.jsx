import React from "react";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, onClearSearch }) => {
    return (
        <div className="w-80 flex items-center bg-slate-100 rounded-md px-4">
            <input
                type="text"
                placeholder="Search Notes"
                className="w-full text-xs bg-transparent py-[11px] outline-none"
                value={value}
                onChange={onChange}
            />
            {value &&<IoMdClose className="text-xl text-slate-500 cursor-pointer hover:text-black mr-3" onClick={onClearSearch}/>}
        </div>
    );
};

export default SearchBar;
