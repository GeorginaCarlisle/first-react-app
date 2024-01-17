import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)
        this.inputName = React.createRef();
        this.inputQuery = React.createRef();
        this.inputComment = React.createRef();
    }



    handelSubmit = (event) => {
        event.preventDefault();
        console.log(`${this.inputName.current.name}: ${this.inputName.current.value}`);
        console.log(`${this.inputQuery.current.name}: ${this.inputQuery.current.value}`);
        console.log(`${this.inputComment.current.name}: ${this.inputComment.current.value}`);
    }

    render() {
        return (
            <div>
                <h2>Please fill out the uncontrolled form below</h2>
                <form onSubmit={this.handelSubmit}>
                    <div>
                        <label htmlFor="name">Your Name:</label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            ref={this.inputName}
                        />
                    </div>
                    <div>
                        <label htmlFor='category'>Query category:</label>
                        <select id='category' name='category' ref={this.inputQuery}>
                            <option value="website">Website issue</option>
                            <option value="order">Order issue</option>
                            <option value="general">General inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='comments'>Comments:</label>
                        <textarea id="comments" name="comments" ref={this.inputComment}/>
                    </div>


                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default ControlledForm