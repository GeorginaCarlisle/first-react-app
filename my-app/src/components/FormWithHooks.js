import React, {useState} from 'react'

function FormWithHooks() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments);
    }

    return (
        <div>
        <h2>Please fill out the controlled form with hooks below</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Your Name:</label>
                <input 
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='category'>Query category:</label>
                <select id='category' name='category' value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="website">Website issue</option>
                    <option value="order">Order issue</option>
                    <option value="general">General inquiry</option>
                </select>
            </div>
            <div>
                <label htmlFor='comments'>Comments:</label>
                <textarea id="comments" name="comments" value={comments} onChange={(e) => setComments(e.target.value)}/>
            </div>


            <input type="submit" value="submit" />
        </form>
    </div> 
    )
}

export default FormWithHooks

