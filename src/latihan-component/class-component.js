// imrc
import React, { Component } from 'react';

// ccc
class Shinobi extends Component { // penulisan Shinobi diawal kata harus huruf kapital
    // constructor(props) {
    //     super(props);
    // }
    state = { Counter: 0 }
    inc = () => {
        this.setState({ Counter: this.state.Counter + 1 });
    }

    dec = () => {
        this.setState({ Counter: this.state.Counter - 1 });
    }

    render() {
        return (
            <div>
                <h1>Hello Shinobi</h1>
                <h3>Counter : {this.state.Counter}</h3>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        );
    }
}

export default Shinobi;