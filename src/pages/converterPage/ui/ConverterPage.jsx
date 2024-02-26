import React from 'react';
import {Converter, PageDescription} from "../../../widgets/";

export const ConverterPage = () => {
    return (
        <div>
            <PageDescription title="Converter" description="Convert from one currency to another"/>
            <Converter/>
        </div>
    );
};
