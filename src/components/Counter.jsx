import { useDispatch, useSelector } from "react-redux"


export default function Counter() {

    const counter = useSelector(state => state.counter) // The callback function will get called by react-redux
    const dispatch = useDispatch()

    const incrementHandler = () => {
        dispatch({ type: "increment" })
    }

    const decrementHandler = () => {
        dispatch({ type: "decrement" })
    }

    const incrementBy5Handler = () => {
        dispatch({ type: "INCREMENTBY5" })
    }
    
    const decrementBy5Handler = () => {
        dispatch({ type: "DECREMENTBY5" })
    }

    return (
        <main>
            <h1>Redux Counter</h1>
            <div>{counter}</div>
            <br />
            <div>
                <button onClick={incrementHandler}>Increment 1</button>
                <button onClick={decrementHandler}>Decrement 1</button>
            </div>
            <div>
                <button onClick={incrementBy5Handler}>Increment 5</button>
                <button onClick={decrementBy5Handler}>Decrement 5</button>
            </div>
            {/* <button>Toggle Counter</button> */}

        </main>
    )
}
