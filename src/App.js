import React, { Component } from 'react';
import './App.css';
import Form from './form';
import { render } from '@testing-library/react';


class App extends Component {

state = {
  fields: {}
}

onSubmit = fields => {
  this.setState({fields});
  console.log(fields.fullName + ": " + fields.binPrice)
}

  render() {
    return (
        <div className="App">
            <div>
                <Form onSubmit={fields => this.onSubmit(fields)} />
                <p>{JSON.stringify(this.state.fields, null, 3)}</p>
            </div>
        </div>

    );
  }
}

export default App;
