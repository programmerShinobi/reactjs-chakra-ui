import React, { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function CalculatorMultiplication() {
    // state untuk menyimpan input pertama dan kedua
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    // state untuk menyimpan hasil
    const [result, setResult] = useState(0);

    // fungsi untuk menjumlahkan
    const handleCalculate = () => {
        setResult(+num1 * +num2);
        handleClick();
    }

    const toastRef = useRef(null);

    const handleClick = () => {
        toastRef.current.classList.add('show');
        setTimeout(() => {
            toastRef.current.classList.remove('show');
        }, 2000);
    };

    const handleReset = () => {
        setNum1(0);
        setNum2(0);
        setResult(0);
    }

    return (
        // JSX untuk menampilkan input dan tombol
        <header className="App-custom">
            <div className="mt-4 mb-4 mx-4 d-flex justify-content-center align-items-center text-center">
                <div class="card color-custom-bg" style={{ width: '300px' }}>
                    <div class="card-header bg-primary">
                        <h3 className='text-center'><i className="fa-solid fa-calculator"></i> Multiplication</h3>
                    </div>
                    <div class="card-body">
                        <div className='text-center'>
                            <input style={{ width: '71px', display: 'inline-block' }} className='form-control' type="number" value={num1} onChange={e => setNum1(e.target.value)} />
                            <span style={{ width: '74px', display: 'inline-block' }} className='text-center'><i class="fa-solid fa-xmark"></i></span>
                            <input style={{ width: '71px', display: 'inline-block' }} className='form-control' type="number" value={num2} onChange={e => setNum2(e.target.value)} />
                        </div>
                        <div className='mt-3 text-left'>
                            <button className='btn btn-primary btn-md btn-block' onClick={handleCalculate}> Check</button>
                            <span style={{ width: '75px', display: 'inline-block' }} ><i class="fa-solid fa-check-to-slot"></i></span>
                            <div className="mt-2" style={{ width: '65px', display: 'inline-block' }}>
                                <button onClick={handleReset} style={{ width: '75px', display: 'inline-block' }} className="toast btn-md btn color-custom-bg" role="alert" aria-live="assertive" aria-atomic="true" ref={toastRef} readonly>
                                    {result}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

