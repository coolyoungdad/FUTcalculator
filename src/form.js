import React from "react";


export default class Form extends React.Component {
    state = {
        fullName: "",
        lowestAvailableBuyItNowPrice: ""
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value, 
        }, () => {
            this.props.updateApp(this.state);
        });
    }

    render() {
        return (
            <>
                <input
                    name="fullName"
                    placeholder="Player Name"
                    value
                    ={this.state.fullName}
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