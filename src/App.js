import React, {Component} from 'react';
import './App.css';
import Form from './form';
import {render} from '@testing-library/react';
class App extends Component {

    state = {
        fullName: "",
        lowestAvailableBuyItNowPrice: "",
        buyPrice: "",
        calculationTape: []
    }

    updateApp = fields => {
        this.setState(fields,
            () => this.setState({buyPrice: (Math.floor(this.state.lowestAvailableBuyItNowPrice * 0.95)-300)})
        );
    }

    pushCalculation = () => {
        // you can't call this.state.calculations.push because react doesn't let you modify its state directly
        // only through setState. [...spread] notation for arrays creates a new array with all the elements of the old one
        // you can add new elements afterwards with commas, effectively pushing
        this.setState({calculationTape: [...this.state.calculationTape, {name: this.state.fullName, buyPrice: this.state.buyPrice}]})
    }

    render() {
        return (
            <div className="App">
                <div>
                    <Form updateApp={this.updateApp} pushCalculation={this.pushCalculation}/>
                    <p>Name: {this.state.fullName}</p>
                    <p>Buy Price: {this.state.buyPrice}</p>
                    <p>Sell Price (lowest BIN): {this.state.lowestAvailableBuyItNowPrice}</p>
                </div>
                <p>tape {JSON.stringify(this.state.calculationTape)}</p>
            </div>

        );
    }
}

export default App;
