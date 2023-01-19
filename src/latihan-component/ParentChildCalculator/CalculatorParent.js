import React, { useState, useRef } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../App.css'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CalculatorChild from './CalculatorChild';

export default function CalculatorParent() {
    // state untuk menyimpan input pertama dan kedua
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [op, setOp] = useState('');
    // state untuk menyimpan hasil
    const [result, setResult] = useState(0);

    // fungsi untuk menghitung
    const handleCalculate = () => {
        if (multiplicationChecked) {
            setResult(+num1 * +num2);
            // handleOperator('*');
        }
        else if (additionChecked) {
            setResult(+num1 + +num2);
            // handleOperator('+');
        }
        else if (divisionChecked) {
            setResult(+num1 / +num2);
            // handleOperator('/');
        }
        else if (subtractionChecked) {
            setResult(+num1 - +num2);
            // handleOperator('-');
        }
        handleClick();
    }

    // fungsi untuk notifikasi
    const toastRef = useRef(null);

    // fungsi untuk check button
    const handleClick = () => {
        toastRef.current.classList.add('show');
        setTimeout(() => {
            toastRef.current.classList.remove('show');
        }, 2000);
    };

    // // fungsi untuk operator
    // const toastRefPlus = useRef(null);
    // const handleOperatorPlus = (operator) => {
    //     toastRefPlus.current.classList.add(operator);
    // }

    // const toastRefMinus = useRef(null);
    // const handleOperatorMinus = (operator) => {
    //     toastRefMinus.current.classList.add(operator);
    // }

    // const toastRefTimes = useRef(null);
    // const handleOperatorTimes = (operator) => {
    //     toastRefTimes.current.classList.add(operator);
    // }


    // fungsi untuk reset button
    const handleReset = () => {
        setNum1(0);
        setNum2(0);
        setResult(0);
    }

    const [multiplicationChecked, setMultiplicationChecked] = useState(false);
    const [additionChecked, setAdditionChecked] = useState(false);
    const [divisionChecked, setDivisionChecked] = useState(false);
    const [subtractionChecked, setSubtractionChecked] = useState(false);


    return (
        // JSX untuk menampilkan input dan tombol
        <header className="App-header">
            <div className="mt-4 mb-4 mx-4 d-flex justify-content-center align-items-center text-center">
                <div class="card color-custom-bg" style={{ width: '300px' }}>
                    <div class="card-header bg-primary">
                        <h3 className='text-center'><i className="fa-solid fa-calculator"></i> Calculator</h3>
                    </div>
                    <CalculatorChild
                        num1={num1}
                        setNum1={setNum1}
                        num2={num2}
                        setNum2={setNum2}
                        result={result}
                        setResult={setResult}
                        handleCalculate={handleCalculate}
                        handleReset={handleReset}
                        toastRef={toastRef}

                        multiplicationChecked={multiplicationChecked}
                        setMultiplicationChecked={setMultiplicationChecked}

                        additionChecked={additionChecked}
                        setAdditionChecked={setAdditionChecked}

                        divisionChecked={divisionChecked}
                        setDivisionChecked={setDivisionChecked}

                        subtractionChecked={subtractionChecked}
                        setSubtractionChecked={setSubtractionChecked}

                    // op={op}
                    // setOp={setOp}

                    // toastRefPlus={toastRefPlus}
                    // handleOperatorPlus={handleOperatorPlus}

                    // toastRefMinus={toastRefMinus}
                    // handleOperatorMinus={handleOperatorMinus}

                    // toastRefTimes={toastRefTimes}
                    // handleOperatorTimes={handleOperatorTimes}

                    />
                </div>
            </div>
        </header>
    );
};

