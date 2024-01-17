import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: '',
            category: 'website',
            comment: '',
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        });   
    }

    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleSelectCategory = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    handelSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h2>Please fill out the form below</h2>
                <form onSubmit={this.handelSubmit}>
                    <div>
                        <label htmlFor="name">Your Name:</label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='category'>Query category:</label>
                        <select id='category' name='category' onChange={this.handleSelectCategory}>
                            <option value="website">Website issue</option>
                            <option value="order">Order issue</option>
                            <option value="general">General inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='comments'>Comments:</label>
                        <textarea id="comments" name="comments" onChange={this.handleCommentChange}/>
                    </div>


                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default ControlledForm