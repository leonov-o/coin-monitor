import React from 'react';

export const PageDescription = ({title, description}) => {
    return (
        <div className="p-12 text-center ">
            <div className="text-5xl animate-text bg-gradient-to-r from-pink-700 to-blue-600 bg-clip-text text-transparent">{title}</div>
            <div className="mt-3 text-2xl font-light">{description}</div>
        </div>
    );
};
