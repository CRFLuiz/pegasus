import React from 'react';

const Login = props => {

    return (
        <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
                <div className="form sign-in text-dark">
                    <div className="input-group">
                        <i className='bx bxs-user'></i>
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="input-group">
                        <i className='bx bxs-lock-alt'></i>
                        <input type="password" placeholder="Password" />
                    </div>

                    <button>Sign in</button>

                    <p><b>Forgot password?</b></p>

                    <p><span>Don't have an account?</span> <b onClick={props.toggle} className="pointer">Sign up here</b></p>
                </div>
            </div>
            <div className="form-wrapper">
        
            </div>
        </div>
    );
}

export default Login;