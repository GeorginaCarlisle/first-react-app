import React, { Component } from 'react'
import LifeCyclesCDUchild from './LifeCyclesCDUchild'


export class LifeCyclesCDU extends Component {
    constructor(props) {
        //console.log("Parent constructor called")
        super(props)
        
        this.state = {
            greeting: 'Hello from the Parent!'
        }
    }

    updateGreeting = () => {
        //console.log("Parent update Greeting called")
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === 'Hello from the Parent!' ? 'Goodbye from the Parent' : 'Hello from the Parent!'
            }
        })
    }
    
    componentDidUpdate() {
        //console.log('Parent Component updated')
    }

    render() {
        //console.log('Parent rendered')
        return (
        <div>
            <h2>{this.state.greeting}</h2>
            <button onClick={this.updateGreeting}>Update Greeting</button>
            <LifeCyclesCDUchild />
        </div>
        )
    }
}

export default LifeCyclesCDU