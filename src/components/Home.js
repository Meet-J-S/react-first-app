import React, {} from 'react';
import {Form, Col, Row, Button} from 'react-bootstrap';
import { notification } from 'antd';
import '../styles/App.scss';
import axios from 'axios';
import 'antd/dist/antd.css';

const INITIAL_STATE = {
    validated: false,
    username: '',
    password: '',
};

class Home extends React.Component {

    componentDidCatch(error, errorInfo) {
        alert(error);
        console.log(error);
    }

    constructor(props) {
        super(props);
        this.state = INITIAL_STATE;
    }

    componentDidMount() {
        // alert(JSON.stringify(this.props));
    }

    handleChange = (event) => {
        const form = this.refs.myform;
        this.setState({[event.target.name]: event.target.value, validated: !form.checkValidity()});
    };

    onSubmit = async () => {
        const {username, password} = this.state;
        const {handleLocalAction, localActions} = this.props;
        const user = {
            user_name: username,
            user_pass: password
        };

        debugger;

        handleLocalAction({
            type: localActions.LOGIN_USER, data:user
        }).then(res=>{
            if(res.status && res.status === 200){
                debugger;
                this.setState(INITIAL_STATE);
                notification.open({
                    message: 'Notification !!',
                    description: res.message || 'Login Successful'
                });
                sessionStorage.setItem('token',res.token || '');
            }
        }).catch(err=>{
            alert(err.message)
        });
    };

    onRegister = () => {
        this.props.history.push("/signup");
    };

    render() {
        const {validated, username, password} = this.state;
        return (
            <div className="form-modal">
                <Form
                    noValidate
                    className="my-form"
                    validated={validated}
                    onSubmit={e => this.handleSubmit(e)}
                    ref='myform'
                >
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}> Username </Form.Label>
                        <Col sm={2} md={2} lg={5} xs={4}>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                name={'username'}
                                required
                                onChange={this.handleChange}
                                value={username}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide valid username.
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassw ord">
                        <Form.Label column sm={2}> Password</Form.Label>
                        <Col sm={2} md={2} lg={5} xs={4}>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name={'password'}
                                required
                                onChange={this.handleChange}
                                value={password}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide Password.
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalCheck">
                        <Col sm={{span: 10, offset: 2}}>
                            <Form.Check label="Remember me"/>
                        </Col>
                    </Form.Group>

                    <Row>

                    <Form.Group as={Col}>
                        <Col sm={{span: 10, offset: 2}}>
                            <Button type="button" onClick={this.onSubmit} disabled={this.state.validated}>Sign in</Button>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Row sm={{span: 10, offset: 2}}>
                            <Button type="button" onClick={this.onRegister} variant={'success'}>Sign up</Button>
                        </Row>
                    </Form.Group>

                    </Row>
                </Form>
            </div>
        );
    }
}

export default Home;