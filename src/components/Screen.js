import React, { useContext } from 'react';
import { CalcContext } from '../Context/CalcContext';
import { Textfit } from 'react-textfit';

const Screen = () => {
    const { calc } = useContext(CalcContext);
    return (
        <Textfit className='Screen' max={70} mode='single'>
            {calc.num ? calc.num : calc.res}
        </Textfit>
    );
}

export default Screen;
