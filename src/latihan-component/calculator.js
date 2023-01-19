import React, { useState } from 'react';

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);
    const [value, setValue] = useState(null);

    const inputDigit = digit => {
        const newValue = waitingForOperand ? digit : displayValue + digit;
        setDisplayValue(newValue);
        setWaitingForOperand(false);
    };

    const inputDot = dot => {
        if (waitingForOperand) {
            setDisplayValue('.');
            setWaitingForOperand(false);
        } else if (displayValue.indexOf('.') === -1) {
            setDisplayValue(displayValue + dot);
        }
    };

    const handleOperator = nextOperator => {
        const currentValue = parseFloat(displayValue);
        if (value == null) {
            setValue(currentValue);
        } else if (operator) {
            const result = performCalculation[operator](value, currentValue);
            setValue(result);
            setDisplayValue(String(result));
        }
        setWaitingForOperand(true);
        setOperator(nextOperator);
    };

    const performCalculation = {
        '/': (prevValue, nextValue) => prevValue / nextValue,
        '*': (prevValue, nextValue) => prevValue * nextValue,
        '+': (prevValue, nextValue) => prevValue + nextValue,
        '-': (prevValue, nextValue) => prevValue - nextValue,
        '=': (prevValue, nextValue) => nextValue
    };

    const handleClear = () => {
        setDisplayValue('0');
        setOperator(null);
        setWaitingForOperand(false);
        setValue(null);
    };

    return (
        <div>
            <div>{displayValue}</div>
            <div>
                <button onClick={() => inputDigit(1)}>1</button>
                <button onClick={() => inputDigit(2)}>2</button>
                <button onClick={() => inputDigit(3)}>3</button>
                <button onClick={() => handleOperator('+')}>+</button>
            </div>
            <div>
                <button onClick={() => inputDigit(4)}>4</button>
                <button onClick={() => inputDigit(5)}>5</button>
                <button onClick={() => inputDigit(6)}>6</button>
                <button onClick={() => handleOperator('-')}>-</button>
            </div>
            <div>
                <button onClick={() => inputDigit(7)}>7</button>
                <button onClick={() => inputDigit(8)}>8</button>
                <button onut={() => inputDigit(9)}>9</button>
                <button onClick={() => handleOperator('')}></button>
            </div>
            <div>
                <button onClick={() => inputDot('.')}>.</button>
                <button onClick={() => inputDigit(0)}>0</button>
                <button onClick={() => handleOperator('=')}>=</button>
                <button onClick={() => handleOperator('/')}>/</button>
            </div>
            <div>
                <button onClick={() => handleClear()}>Clear</button>
            </div>
        </div>
    );
};

export default Calculator;
