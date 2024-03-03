import React from 'react';

export const Card = ({name, value, image, className}) => {
    return (
        <div
            className={"flex justify-between items-center rounded-2xl bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-90 px-6 py-1 shadow-lg md:w-52 h-16 mr-3 mb-3 " + className}>
            <div className="">
                <div className="text-sm font-medium text-gray-400">{name}</div>
                <div className="text-xl">{value}</div>
            </div>
            <div className="">
                {image}
            </div>
        </div>
    );
};
