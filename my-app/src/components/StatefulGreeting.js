import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) =>{
            return {
                introduction: prevState.introduction === "Hello" ? "Goodbye" : "Hello",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            }
        }, () =>{
            console.log("Handle Click correctly called");
            console.log("new state", this.state.introduction);
        });
    }

    handleCounter() {
        this.setState((prevState, prevProps) =>{
            return {
                count: prevState.count +1
            }
        }, () =>{
            console.log("Handle counter correctly called");
            console.log("new count is", this.state.count);
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name}, {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.handleCounter()}>Counter</button>
                <p>The counter has been clicked {this.state.count} times</p>
            </div>

        )
    }
}

export default StatefulGreeting;