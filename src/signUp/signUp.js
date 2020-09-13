import React from 'react';
import { Link } from 'react-router-dom';
import './signUp.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Icon } from '@iconify/react';
import caretDownFilled from '@iconify/icons-ant-design/caret-down-filled';

const SignUp = () => {
	const validateInput = (input) => {
		let validityState_object = input.validity;
		if (validityState_object.patternMismatch) {
			input.setCustomValidity('Password must be a combination of letters and numbers');
		}
	};
	return (
		<section id="sign_up">
			<Row className="m-0">
				<Col
					sm={6}
					lg={5}
					className="welcome_text d-none d-lg-flex flex-column justify-content-center align-items-center p-0"
				>
					<div className="w-100 text-center mt-auto p-lg-3">
						<h3 className=" pb-5 mx-auto text-xl-left">Welcome to Star Wars the Clone Wars</h3>
						<img src={'./assets/svgs/rocket.svg'} alt="Rocket" />
					</div>
					<div style={{ padding: '1em 0', backgroundColor: '#000', width: '100%' }} className="mt-auto" />
				</Col>
				<Col className="login_form d-flex flex-column justify-content-center align-items-center px-3 px-sm-0 pl-lg-5">
					<img
						className="align-self-end d-none d-sm-block"
						src={'./assets/svgs/moon-candy.svg'}
						alt="moon"
						style={{ opacity: '.7' }}
					/>
					<div className="form_wrapper align-self-lg-start my-auto">
						<h3 className="w-100 w-sm-75 pb-5">Sign in to continue to your account</h3>
						<div className="form">
							<Form>
								<Form.Group className="pb-2" controlId="Email">
									<Form.Label>Email address</Form.Label>
									<Form.Control
										type="email"
										name="Email"
										placeholder="Email address"
										autoComplete="off"
										required
									/>
								</Form.Group>

								<Form.Group className="pb-4" controlId="Password">
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										minLength="8"
										autoComplete="off"
										name="Password"
										placeholder="Enter strong password"
										required
										pattern="[A-Za-z0-9]+"
										onChange={(e) => validateInput(e.target)}
									/>
								</Form.Group>
								<Link to="/dashboard">
									<Button type="submit" id="submitButton">
										Sign in
									</Button>
								</Link>
							</Form>
						</div>
					</div>
					<footer className="d-flex flex-column flex-sm-row justify-content-between align-items-center w-100 p-4 mt-auto">
						<p className="mr-md-auto">All rights reserved &copy; 2020 STAR WARS</p>
						<p className="mr-md-auto">
							Privacy | Terms{' '}
							<span className="pl-4">
								English <Icon icon={caretDownFilled} color="#859BBCF5" />
							</span>{' '}
						</p>
					</footer>
				</Col>
			</Row>
		</section>
	);
};

export default SignUp;
