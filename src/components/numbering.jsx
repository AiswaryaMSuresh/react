import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter;
