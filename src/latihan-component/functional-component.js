import React, { useState } from 'react';

export default function HelloShinobi() {
    const [count, set] = useState(0);
    let inc = () => {
        set(count + 1);
    }

    let dec = () => {
        set(count - 1);
    }

    return (
        <div>
            <h1>Hello Shinobi3</h1>
            <h3>Counter : {count}</h3>
            <button type='button' onClick={inc}>+</button>
            <button type='button' onClick={dec}>-</button>
        </div>
    )
}