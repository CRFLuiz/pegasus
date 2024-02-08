import React from 'react';

import Signup from '../../components/Signup';
import Login from '../../components/Login';
import TextLoginSignup from '../../components/TextLoginSignup';

const LoginSignup = () => {
    const toggle = () => {
        let container = document.getElementById('container')
        container.classList.toggle('sign-in')
        container.classList.toggle('sign-up')
    };

    setTimeout(() => {
        let container = document.getElementById('container')
        container.classList.add('sign-in')
    }, 200);

    return(
      <div id="container" className="container">
            {/* <!-- FORM SECTION --> */}
            <div className="row">
                <Signup toggle={toggle} />
                <Login toggle={toggle} />
            </div>
            {/* <!-- END FORM SECTION --> */}

            {/* <!-- CONTENT SECTION --> */}
            <TextLoginSignup />
            {/* <!-- END CONTENT SECTION --> */}
      </div>
    );
  
}

export default LoginSignup;