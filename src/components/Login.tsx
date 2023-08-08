import React, { useState } from "react";
import './Login.css';
import { ILogin } from '../model/ILogin'

interface IState {
    user: ILogin;
}

const Login: React.FC = () => {
    const [state, setState] = useState<IState>({
        user: {
            email: "",
            password: "",
        }
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setState({
            user: {
                ...state.user,
                [event.target.name]: event.target.value
            }
        })
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log(state.user)
    }

    return (
        <>
            <div className="upper-form">
                <h1>Login Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={state.user.email}
                            className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password"
                            name="password"
                            onChange={handleChange}
                            value={state.user.password} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
        </>

    )


}

export default Login