import React, { Component } from 'react'

export class LifeCyclesCDUchild extends Component {
    constructor(props) {
        console.log("Child constructor called")
        super(props)
        
        this.state = {
            greeting: 'Hello from the child!'
        }
    }

    updateGreeting = () => {
        console.log("Child update Greeting called")
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === 'Hello from the child!' ? 'Goodbye from the child' : 'Hello from the child!'
            }
        })
    }
    
    componentDidUpdate() {
        console.log('Child Component updated')
    }

    render() {
        console.log('Child rendered')
        return (
        <div>
            <h2>{this.state.greeting}</h2>
            <button onClick={this.updateGreeting}>Update Greeting</button>
        </div>
        )
    }
}

export default LifeCyclesCDUchild