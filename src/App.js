import React, {Component} from 'react';
import './App.css';
import Form from './form';
import {render} from '@testing-library/react';
class App extends Component {

    state = {
        fields: {}
    }

    onSubmit = fields => {
        this.setState({fields});
        console.log(fields);
    }

    render() {
        return (
            <div className="App">
                <div>
                    <Form onSubmit={fields => this.onSubmit(fields)}/>
                    <p>Name: {this.state.fields.fullName}</p>
                    <p>Buy Price: {this.state.fields.buyPrice}</p>
                    <p>Sell Price: {this.state.fields.binPrice}</p>
                </div>
            </div>

        );
    }
}

export default App;
