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
  console.log('App comp got: ', fields)
}

  render() {
    return (
        <div className="App">
            <div>
                <Form onSubmit={fields => this.onSubmit(fields)} />
                <p>{JSON.stringify(this.state.fields, null, 2)}</p>
            </div>
        </div>

    );
  }
}

export default App;
