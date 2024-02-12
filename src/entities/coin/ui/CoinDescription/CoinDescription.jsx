import React from 'react';

export const CoinDescription = ({description}) => {
    return (
        <div className="mt-4 rounded-2xl bg-white bg-opacity-90 px-10 py-4 shadow-lg">
            <div className="text-2xl font-medium">About</div>
            <div className="mt-3" dangerouslySetInnerHTML={{"__html" : description}}>
            </div>
        </div>
    );
};
