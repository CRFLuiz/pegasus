import React from 'react';

const TextLoginSignup = props => {

    return (
        <div className="row content-row">

            {/* <!-- SIGN IN CONTENT --> */}
            <div className="col align-items-center flex-col">
                <div className="text sign-in">
                    <h2>
                        Welcome
                    </h2>
                </div>
                <div className="img sign-in">
            
                </div>
            </div>
            {/* <!-- END SIGN IN CONTENT --> */}

            {/* <!-- SIGN UP CONTENT --> */}
            <div className="col align-items-center flex-col">
                <div className="img sign-up">
                
                </div>
                <div className="text sign-up">
                    <h2>
                        Join with us
                    </h2>
                </div>
            </div>
            {/* <!-- END SIGN UP CONTENT --> */}

        </div>
    );
}

export default TextLoginSignup;