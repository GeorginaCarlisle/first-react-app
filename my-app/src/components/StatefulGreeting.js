import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introdution: "Hello",
            buttonText: "Exit",
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.introdution} {this.props.name}, {this.props.greeting}</h1>
                <button>{this.state.buttonText}</button>
            </div>

        )
    }
}

export default StatefulGreeting;