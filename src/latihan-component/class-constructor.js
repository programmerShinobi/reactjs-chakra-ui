import React, { Component } from 'react';


class Shinobi2 extends Component {
    constructor(props) {
        super(props);
        this.state = { Counter: 0 }
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
    }
    inc() {
        this.setState({ Counter: this.state.Counter + 1 });
    }

    dec() {
        this.setState({ Counter: this.state.Counter - 1 });
    }
    render() {
        return (
            <div>
                <h1>Hello Shinobi2</h1>
                <h3>Counter : {this.state.Counter}</h3>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        );
    }
}

export default Shinobi2;