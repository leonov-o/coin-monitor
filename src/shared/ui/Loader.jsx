import React from 'react';

export const Loader = ({className}) => {
    return (
        <div className={"w-16 h-16 border-b-2 border-r-2 border-blue-500 dark:border-purple-800 rounded-[100%] animate-spin " + className}>
        </div>
    );
};
