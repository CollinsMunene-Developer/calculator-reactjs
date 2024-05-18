import React, { useContext } from 'react'
import { CalcContext } from '../Context/CalcContext'

const getStyleName = btn => {
    const className = {
        '=': 'equals',
        'X': 'opt',
        '-': 'opt',
        '+': 'opt',
        '/': 'opt',
        '*': 'opt',
        '()': 'opt',
        '': 'opt',
    }
    return className[btn]
}

const Button = ({ value }) => {
    const { calc, setCalc } = useContext(CalcContext)

    // clickComma
    const commaClick = () => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
        })
    }

    // resetClick
    const resetClick = () => {
        setCalc({
            sign: '', num: 0, res: 0
        })
    }

    // User Click number
    const handleClickButton = () => {
        const numberString = value.toString()
        let numberValue
        if (numberString === '0' && calc.num === 0) {
            numberValue = "0"
        } else {
            numberValue = Number(calc.num + numberString)
        }
        setCalc({
            ...calc,
            num: numberValue
        })
    }

    //UserClick Operation
    const signClick = () => {
        setCalc({
            sign: value,
            res: !calc.res  && calc.num? calc.num : calc.res,
            num: 0
        })
    }
    // userClick equalsClick

    const equalsClick = () =>{

        if(calc.res && calc.num){
            const Math = (a,b, sign) => {
                const result = {
                    '+': (a, b) => a + b,
                    '-': (a, b) => a - b,
                    '*': (a, b) => a * b,
                    '/': (a, b) => a / b,
                }
                return result[sign](a, b)
            }
            
        setCalc({
            res: Math(calc.res, calc.num, calc.sign),
            sign: '',
            num: 0
        })
        }

    }

    // Userclick percClick
    const percClick = () =>{
        setCalc({
            num: (calc.num/ 100),
            res: (calc.res/ 100),
            sign: ''
        })
    }
    // userlick invertClick\
    const invertClick = () => {
        setCalc({
            num: calc.num ? calc.num * -1 : 0,
            res: calc.num ? calc.res * -1 : 0,
            sign: ''
        })
    }

    const handleBtnClick = () => {
        console.log(value)

        const results = {
            '.': commaClick,
            'C': resetClick,
            '/': signClick,
            '+': signClick,
            '-': signClick,
            '*': signClick,
            'X': signClick,
            '()': signClick,
            '=': equalsClick,
            '%': percClick,
            '+-': invertClick,
        }

        if (results[value]) {
            return results[value]()
        } else {
            return handleClickButton()
        }
    }

    return (
        <div>
            <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
        </div>
    )
}

export default Button
