import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyComponent() {
    const toastRef = useRef(null);

    const handleClick = () => {
        toastRef.current.classList.add('show');
        setTimeout(() => {
            toastRef.current.classList.remove('show');
        }, 3000);
    };

    return (
        <div>
            <button onClick={handleClick}>Show Toast</button>
            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" ref={toastRef}>
                <div className="toast-header">
                    <strong className="mr-auto">Bootstrap</strong>
                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="toast-body">
                    Hello, this is a toast message!
                </div>
            </div>
        </div>
    );
}

export default MyComponent;
