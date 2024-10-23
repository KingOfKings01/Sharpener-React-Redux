import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"


export default function Counter() {

    const [amount, setAmount] = useState(15);

    const counter = useSelector(state => state.counter) // The callback function will get called by react-redux
    const showCounter = useSelector(state => state.showCounter)
    const dispatch = useDispatch()

    const incrementHandler = () => {
        dispatch({ type: "increment" })
    }

    const decrementHandler = () => {
        dispatch({ type: "decrement" })
    }

    const incrementByAmountHandler = () => {
        dispatch({ type: "IncrementByAmount", amount: amount })
    }

    const handleToggle = () => {
        dispatch({ type: "showCounter" })
    }


    return (
        <main>
            <h1>Redux Counter</h1>
            {showCounter ?
                <div>{counter}</div>
                :
                <p></p>
            }
            <br />
            <div>
                <button onClick={incrementHandler}>Increment 1</button>
                <button onClick={decrementHandler}>Decrement 1</button>
            </div>
            <div>
                <button onClick={incrementByAmountHandler}>Increment {amount}</button>
            </div>
            <button onClick={handleToggle}>Toggle Counter</button>

        </main>
    )
}
