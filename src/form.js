import React from "react";

export default class Form extends React.Component {
    state = {
        fullName: "",
        binPrice: "",
        buyPrice: ""
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });

        this.setState({
            [this.state.buyPrice]: ((this.state.binPrice * 0.95) - 300)
        });

    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this
            .props
            .onSubmit(this.state);

        this.setState({
            fullName: "", binPrice: "",
            // buyPrice: ""
        })

    }

    render() {
        return (
            <form>
                <input
                    name="fullName"
                    placeholder="Player Name"
                    value
                    ={this.state.fullName}
                    onChange={e => this.change(e)}/>

                <input
                    name="binPrice"
                    placeholder="Lowest BIN Price"
                    value
                    ={this.state.binPrice}
                    onChange={e => this.change(e)}/>

                <button onClick={e => this.onSubmit(e)}>
                    Submit
                </button>
            </form>
        )
    }
}