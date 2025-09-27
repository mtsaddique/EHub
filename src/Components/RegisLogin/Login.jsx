import React from 'react'

export default function Login() {
    return (
        <>
            <div className="blurbg"></div>
            <div className="alg-cen">
                <div className="main-login">
                    <div className="content-div">
                        <h1>Welcome Back!!</h1>
                        {/* <h3>Login Page</h3> */}
                        <p className='subtext-para'>We are happy to see you again.
                            Sign in and continue your journey with us.
                        </p>
                    </div>
                    <div className="design-login">
                        <div className="logo-hub-form">
                            <h2>eHub</h2>
                        </div>
                        <div className="email-div">
                            <input type="email" className='common-design emailDesign' name="Email" id="Name" placeholder='Enter Your Email' />
                        </div>
                        <div className="password-div">
                            <input type="password" className='common-design passwordDesign' name="Password" id="Password" placeholder='Enter Your Password' />
                        </div>
                        <button className='btn-login'>Login</button>

                        <p className='reg'>Do not any account-<a href="#">Register</a></p>

                        <div className="socialMedia">
                           
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
