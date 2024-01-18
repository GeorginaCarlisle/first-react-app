import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = count;
    }, [count]);
    const [count2, setCount2] = useState(0);
    useEffect(() => {
        document.title = count2;
    }, [count2]);

    return (
        <div>
            <h2>useEffect used to keep document title insync with count</h2>
            <p>The count is: <span>{count}</span></p>
            <button onClick={
                () => setCount(count => count +1)
            }>Increase count</button>
            
            <h2>conditional effects used to prevent everything always updating regardless of what's needed</h2>
            <p>The second count is: <span>{count2}</span></p>
            <button onClick={
                () => setCount2(count2 => count2 +1)
            }>Increase count 2</button>
        </div>
    )
}

export default UseEffectCounter