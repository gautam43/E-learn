import React from 'react'
import "./register.css"
import { NavLink } from 'react-router-dom'

const signup = () => {
    return (
        <div style={{ backgroundColor: "#f2f6ff", margin: "0" }}>
            <form id="form">
                <div>
                    <h1 id="register"> Sign Up </h1>
                </div>
                <div id="input-wrapper">
                    <table>
                        <tr>
                            <td style={{ width: "300px" }}>
                                <div class="input-box">
                                    <input type="text" name="username" placeholder="Username" style={{ outline: "none", border: "none " }} />
                                </div>
                            </td>
                            <td rowspan="4s">
                                <img src="https://drive.google.com/uc?export=view&id=1sjtwWDxx05eMyteDmDFGT5lJ7whJF-We" alt="Register Logo" id="image1" style={{ height: "250px", textAlign: "right" }} />
                            </td>


                        </tr>
                        <tr>
                            <td>
                                <div class="input-box">
                                    <input type="email" name="email" placeholder="Email" style={{ border: "none" }} />

                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="input-box">
                                    <input type="password" name="password" placeholder="Password" style={{ border: "none" }} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="input-box">
                                    <input type="password" name="confirm-password" placeholder="Confirm Password" style={{ border: "none" }} />

                                </div>
                            </td>
                        </tr>
                    </table>

                    <div style={{ textAlign: "left" }}>
                        <input type="button" name="Register" value="Register" id="but1" />
                    </div><a class="already" to="#">You already have an account?
                        <button style={{ borderStyle: "none" }}>
                            <NavLink class="nav-link" to="/Signin">
                                Sign in here.
                            </NavLink>
                        </button>.
                    </a>
                </div>
            </form>
        </div>
    )
}

export default signup;