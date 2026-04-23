import React, { useState } from "react";
import './counter.css'

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const handleIncrement = () => {
        setCount((prev: number) => prev + 1);
    }

    const handleDecrement = () => {
        setCount((prev: number) => prev - 1);
    }

    const handleReset = () => {
        setCount(0)
    }

    return (
        <div className="counter-container">
            <section className="counter-display">
                <p>{count}</p>
            </section>
            <section className="counter-buttons">
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleReset}>RESET</button>
                <button onClick={handleDecrement}>-</button>
            </section>
        </div>
    )
}

export default Counter;