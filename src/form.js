import React from "react";


export default class Form extends React.Component {
    // the form needs to keep track of fullName and lowestAvailableBuyItNowPrice
    // the form does not care about buyPrice, which is why I moved it to app.js
    state = {
        fullName: "",
        lowestAvailableBuyItNowPrice: ""
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value, 
        }, () => {
            // passing this callback function to setState waits until the state is updated to execute
            // which is the issue you ran into
            // updateApp is passed as props because it updates the states of app.js
            this.props.updateApp(this.state);
        });
    }

    render() {
        return (
            // this doesn't need to be a form, so don't make it a form
            // fixes having to suppress the default behavior to refresh the page
            // <> is just a wrapper like a <div> but doesn't actually create a div.

            <>
                <input
                    name="fullName"
                    placeholder="Player Name"
                    value
                    ={this.state.fullName}
                    // don't need to wrap in another function, eg e => this.onChange(e)
                    onChange={this.onChange}/>

                <input
                    name="lowestAvailableBuyItNowPrice"
                    placeholder="Lowest BIN Price"
                    value
                    ={this.state.lowestAvailableBuyItNowPrice}
                    onChange={this.onChange}/>
                <button onClick={this.props.pushCalculation}>Push</button>
            </>
        )
    }
}