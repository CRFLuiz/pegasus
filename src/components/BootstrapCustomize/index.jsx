import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';

class VariantsExample extends Component {
    render(){
        return (
            <>
                <style type="text/css">
                    {`
                    .navbar-corum {
                    background-color: purple;
                    color: white;
                    }

                    .btn-xxl {
                    padding: 1rem 1.5rem;
                    font-size: 1.5rem;
                    }
                    `}
                </style>

                {/* <Button variant="flat" size="xxl">
                    flat button
                </Button> */}
            </>
        );
    }
}

export default VariantsExample;