import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = count;
    });

    return (
        <div>
            <h2>useEffect used to keep document title insync with count</h2>
            <p>The count is: <span>{count}</span></p>
            <button onClick={
                () => setCount(count => count +1)
            }>Increase count</button>
        </div>
    )
}

export default UseEffectCounter