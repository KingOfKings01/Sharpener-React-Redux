import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { counterActions } from "../../Store";


export default function Counter() {

    const [amount, setAmount] = useState(10);

    const counter = useSelector(state => state.counter) // The callback function will get called by react-redux
    const showCounter = useSelector(state => state.showCounter)
    const dispatch = useDispatch()

    const incrementHandler = () => {
        // dispatch({ type: "increment" })
        dispatch(counterActions.increment())
    }

    const decrementHandler = () => {
        // dispatch({ type: "decrement" })
        dispatch(counterActions.decrement())
    }

    const incrementByAmountHandler = () => {
        // dispatch({ type: "IncrementByAmount", amount: amount })
        dispatch(counterActions.incrementByAmount(amount))
    }

    const handleToggle = () => {
        // dispatch({ type: "showCounter" })
        dispatch(counterActions.showCounter())
    }


    return (
        <main>
            <h3>Redux Counter</h3>
            {showCounter ?
                <div>{counter}</div>
                :
                <p></p>
            }
            <br />
            <div>
                <button onClick={incrementHandler}>Increment 1</button>
                <button onClick={incrementByAmountHandler}>Increment {amount}</button>
                <button onClick={decrementHandler}>Decrement 1</button>
            </div>
            <button onClick={handleToggle}>Toggle Counter</button>

        </main>
    )
}
