import React from 'react';

export const PageDescription = ({title, description}) => {
    return (
        <div className="py-12 text-center dark:text-white">
            <div className="bg-gradient-to-r from-pink-700 to-blue-600 bg-clip-text text-4xl md:text-5xl text-transparent animate-text">{title}</div>
            <div className="mt-3 text-lg md:text-2xl font-light">{description}</div>
        </div>
    );
};
