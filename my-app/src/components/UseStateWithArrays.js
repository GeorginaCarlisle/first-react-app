import React, {useState} from 'react'

function UseStateWithArrays() {
    const [nums, setNums] = useState([1,2,3]);

    const addNums = () => {
        setNums([...nums, nums.length +1]);
    }

    const removeNum = () => {
        setNums(
            nums.filter((item, idx) => {
                return idx !== nums.length -1;
            })
        )
    }

    return (
        <div>
            <h2>Array created and controlled with useState hook</h2>
            <button onClick={addNums}>Add number to list</button>
            <button onClick={removeNum}>Remove number from list</button>
            <ul>
                {nums.map(num => <li key={num}>{num}</li>)}
            </ul>
            
        </div>
    )
}

export default UseStateWithArrays