import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const ParentComponent = () => {
    const [message, setAnswer] = useState('')
    const setQuiz = (quiz) => {
        if (quiz === 'react') {
            setAnswer(`your answer ${quiz} is true`);
        } else {
            setAnswer(`your answer ${quiz} is false`);
        }
    }

    return (
        <div>
            <header className="App-custom">
                <div className="mt-4 mb-4 mx-4 d-flex justify-content-center align-items-center text-center">
                    <div className="color-custom-bg" style={{ width: '500px' }}>
                        <div className="card-body">
                            <ChildComponent
                                yourAnswer={message}
                                onQuiz={setQuiz}
                            />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default ParentComponent;