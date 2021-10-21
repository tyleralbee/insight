import '../../App.css';

import React, { useState } from 'react';
import {
    Button,
    Modal, 
    ModalFooter, 
    TabContent, 
    TabPane, 
    Nav, 
    NavItem, 
    NavLink, 
    Row, 
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    ModalHeader
} from 'reactstrap';
import classnames from 'classnames';

const SignIn = (props) => {
    const {
        isOpen,
        toggle
    } = props;

    const [activeTab, setActiveTab] = useState('Sign In');

    const toggleTab = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle} size="lg">
                <div>
                <ModalHeader>Welcome to Association Insights</ModalHeader>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === 'Sign In' })}
                                onClick={() => { toggleTab('Sign In'); }}
                            >
                                Sign In
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === 'New Account' })}
                                onClick={() => { toggleTab('New Account'); }}
                            >
                                New Account
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="Sign In">
                            <Row className="sign-in-input">
                                <InputGroup >
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>Email</InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Enter email" />
                                </InputGroup>
                            </Row>
                            <Row className="sign-in-input">
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>Password</InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Enter password" />
                                </InputGroup>
                            </Row>
                            <Row>
                                <Button style={{ backgroundColor: 'white', color: 'blue', textAlign: 'left', border: 'none', width: '25%', marginLeft: '2rem'}}>
                                    Forgot your password?
                                </Button>
                            </Row>
                        </TabPane>
                        <TabPane tabId="New Account">
                        <Row className="sign-in-input">
                                <InputGroup >
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>First Name</InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Enter first name" />
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>Last Name</InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Enter last name" />
                                </InputGroup>
                                
                            </Row>
                            <Row className="sign-in-input">
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>Email</InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Enter email" />
                                </InputGroup>
                            </Row>
                            <Row className="sign-in-input">
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>Password</InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Enter password" />
                                </InputGroup>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>{activeTab === 'New Account' ? 'Create Account' : 'Sign In'}</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default SignIn;