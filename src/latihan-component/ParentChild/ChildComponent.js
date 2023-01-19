import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const ChildComponent = (props) => { // props : properties
    return (
        <div>
            <header className="App-custom">
                <div className="mt-4 mb-4 mx-4 d-flex justify-content-center align-items-center text-center">
                    <div className="card color-custom-bg" style={{ width: '500px' }}>
                        <div className="card-body">
                            <h1>Quiz Promgrammiing</h1>
                            <p>What programming for build cross-platform app?</p>
                            <button onClick={() => props.onQuiz('react')}>React</button>
                            <button onClick={() => props.onQuiz('phyton')}>Phyton</button>
                            <button onClick={() => props.onQuiz('golang')}>Golang</button>
                            <h2>{props.yourAnswer}</h2>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default ChildComponent;