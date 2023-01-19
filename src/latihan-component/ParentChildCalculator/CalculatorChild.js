import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../App.css'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Chakra imports
import {
    Flex,
    Table,
    Text,
    Input
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

export default function CalculatorChild(props) {

    return (
        <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
            {/* Authors Table */}
            <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb='0px'>
                <CardHeader p='6px 0px 22px 0px'>
                    <Text fontSize='lg' color='#fff' fontWeight='bold'>
                        Shinobi Table
                    </Text>
                </CardHeader>
                <CardBody mb='30px'>
                    <div className='text-center'>
                        <input style={{ width: '71px', display: 'inline-block' }} className='form-control' type="number" value={props.num1} onChange={e => props.setNum1(e.target.value)} />
                        <span style={{ width: '74px', display: 'inline-block' }} className='text-center'>
                            With
                            {/* <div value={props.toastRefPlus()} className="toast" role="alert" aria-live="assertive" aria-atomic="true" ref={props.yourToastRef2}>
                            <i class="fa-solid fa-plus "></i>
                        </div>
                        <i class="fa-solid fa-divide"></i>
                        <i class="fa-solid fa-xmark"></i>
                        <i className="fa-solid fa-calculator"></i> */}
                        </span>
                        <input style={{ width: '71px', display: 'inline-block' }} className='form-control' type="number" value={props.num2} onChange={e => props.setNum2(e.target.value)} />
                    </div>
                    <div className='mt-3 text-left'>
                        <button className='btn btn-primary btn-md btn-block' onClick={() => props.handleCalculate()}> Check</button>
                        <span style={{ width: '75px', display: 'inline-block' }}><i class="fa-solid fa-check-to-slot"></i></span>
                        <div className="mt-3" style={{ width: '65px', display: 'inline-block' }}>
                            <button onClick={() => props.handleReset()} style={{ width: '75px', display: 'inline-block' }} className="toast btn-md btn color-custom-bg" role="alert" aria-live="assertive" aria-atomic="true" ref={props.yourToastRef}>
                                {props.result}
                            </button>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <div className=' card-body' style={{ textAlign: "left" }}>
                        Select Operators :
                        <div>
                            <input type="checkbox" name="operators" value="addition" onChange={e => props.setAdditionChecked(e.target.checked)} checked={props.additionChecked} /> Addition
                        </div>
                        <div>
                            <input type="checkbox" name="operators" value="subtraction" onChange={e => props.setSubtractionChecked(e.target.checked)} checked={props.subtractionChecked} /> Subtraction
                        </div>
                        <div>
                            <input type="checkbox" name="operators" value="multiplication" onChange={e => props.setMultiplicationChecked(e.target.checked)} checked={props.multiplicationChecked} /> Multiplication
                        </div>
                        <div>
                            <input type="checkbox" name="operators" value="division" onChange={e => props.setDivisionChecked(e.target.checked)} checked={props.divisionChecked} /> Division
                        </div>
                    </div>

                </CardBody>
            </Card>
        </Flex>
    );

    return (
        // JSX untuk menampilkan input dan tombol
        <div>
            <div className="card-body">
                <div className='text-center'>
                    <input style={{ width: '71px', display: 'inline-block' }} className='form-control' type="number" value={props.num1} onChange={e => props.setNum1(e.target.value)} />
                    <span style={{ width: '74px', display: 'inline-block' }} className='text-center'>
                        With
                        {/* <div value={props.toastRefPlus()} className="toast" role="alert" aria-live="assertive" aria-atomic="true" ref={props.yourToastRef2}>
                            <i class="fa-solid fa-plus "></i>
                        </div>
                        <i class="fa-solid fa-divide"></i>
                        <i class="fa-solid fa-xmark"></i>
                        <i className="fa-solid fa-calculator"></i> */}
                    </span>
                    <input style={{ width: '71px', display: 'inline-block' }} className='form-control' type="number" value={props.num2} onChange={e => props.setNum2(e.target.value)} />
                </div>
                <div className='mt-3 text-left'>
                    <button className='btn btn-primary btn-md btn-block' onClick={() => props.handleCalculate()}> Check</button>
                    <span style={{ width: '75px', display: 'inline-block' }}><i class="fa-solid fa-check-to-slot"></i></span>
                    <div className="mt-3" style={{ width: '65px', display: 'inline-block' }}>
                        <button onClick={() => props.handleReset()} style={{ width: '75px', display: 'inline-block' }} className="toast btn-md btn color-custom-bg" role="alert" aria-live="assertive" aria-atomic="true" ref={props.yourToastRef}>
                            {props.result}
                        </button>
                    </div>
                </div>
                <br />
                <hr />
                <div className=' card-body' style={{ textAlign: "left" }}>
                    Select Operators :
                    <div>
                        <input type="checkbox" name="operators" value="addition" onChange={e => props.setAdditionChecked(e.target.checked)} checked={props.additionChecked} /> Addition
                    </div>
                    <div>
                        <input type="checkbox" name="operators" value="subtraction" onChange={e => props.setSubtractionChecked(e.target.checked)} checked={props.subtractionChecked} /> Subtraction
                    </div>
                    <div>
                        <input type="checkbox" name="operators" value="multiplication" onChange={e => props.setMultiplicationChecked(e.target.checked)} checked={props.multiplicationChecked} /> Multiplication
                    </div>
                    <div>
                        <input type="checkbox" name="operators" value="division" onChange={e => props.setDivisionChecked(e.target.checked)} checked={props.divisionChecked} /> Division
                    </div>
                </div>
            </div>
        </div>
    );
};

