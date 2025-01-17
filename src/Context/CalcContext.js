import React, { createContext, useState } from 'react';

export const CalcContext = createContext();

const CalcProviderComponent = ({ children }) => {
    const [calc, setCalc] = useState({
        sign: "",
        num: 0,
        res: 0
    });

    return (
        <CalcContext.Provider value={{ calc, setCalc }}>
            {children}
        </CalcContext.Provider>
    );
};

export default CalcProviderComponent;
