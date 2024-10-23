import { useState } from 'react';
import { authActions } from '../../Store';
import { useDispatch } from 'react-redux';

export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault();
        // Handle form submission
        
        // console.log('Email:', email);
        // console.log('Password:', password);
        
        dispatch(authActions.login())
    };

    return (
        <div style={{background:"grey", padding: "10px 20px", borderRadius: "10px"}}>
            <form onSubmit={submitHandler}>
                <div>
                    <label>
                        Email
                        <br />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password
                        <br />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                        <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
