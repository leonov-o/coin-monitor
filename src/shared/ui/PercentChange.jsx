import React from 'react';
import {rounded} from "../utils/index";

export const PercentChange = ({value, precision, className}) => {
    return (
        <div className={className + " ml-3 font-light " + (value < 0 ? "text-red-600" : "text-green-600")}>
            {value < 0 ? "▾" : "▴"}{rounded(value, precision)}
        </div>

    );
};
