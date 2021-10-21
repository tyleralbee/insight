import '../App.css';

import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {
    Button,
    Navbar,
} from 'reactstrap';

import SignIn from '../components/modals/SignIn';


function HomeScreen() {
    // Modal open state
    const [signInModal, setSignInModal] = React.useState(false);

    // Toggle for Modal
    const toggleSignIn = () => setSignInModal(!signInModal);

    return (
        <div>
            <Navbar className="justify-content-end" color="dark" expand="md">
                <Button color="dark" onClick={toggleSignIn}>
                    Sign In
                </Button>
            </Navbar>

            <SignIn isOpen={signInModal} toggle={toggleSignIn}/>
        </div>
    )
}

export default HomeScreen
