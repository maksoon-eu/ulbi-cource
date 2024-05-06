import { useState } from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter => counter + 1);
    }

    const decrement = () => {
        setCounter(counter => counter - 1);
    }

    return (
        <div className={classes.btn}>
            <button onClick={increment}>Increment</button>
            <h1>{counter}</h1>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}