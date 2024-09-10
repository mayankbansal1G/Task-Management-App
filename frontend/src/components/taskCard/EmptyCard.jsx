import React from 'react';
import imgSrc from "../../assets/empltyClipboard.svg";

const EmptyCard = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full px-4 py-16">
            <img
                src={imgSrc}
                alt="No tasks"
                className="w-40 sm:w-48 md:w-60 lg:w-72"
            />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-slate-700 text-center leading-6 sm:leading-7 mt-4 sm:mt-5">
                No Tasks Here. Please Add One
            </p>
        </div>
    );
};

export default EmptyCard;
