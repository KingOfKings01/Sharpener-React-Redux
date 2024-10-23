import { useDispatch, useSelector } from "react-redux"
import classes from "./header.module.css"
import { authActions } from "../../Store"

export default function Header() {
    const isAuth = useSelector(state => state.auth.isAuthenticated)
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(authActions.logout())
    }

    return (
        <nav className={classes.nav}>
            <h3>Redux Auth</h3>

            {isAuth &&
                <div>
                    <a href="#">My Products</a>
                    <a href="#">My Sales</a>
                    <button onClick={logoutHandler}>Logout</button>
                </div>
            }
        </nav>
    )
}
