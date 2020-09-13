import React from 'react';
import './nav.css';
import Form from 'react-bootstrap/Form';
import { Route, NavLink, Link, Switch } from 'react-router-dom';

export default function Nav() {
	return (
		<header>
			<nav id="top_nav" className="d-flex flex-column">
				<div className="top_tab d-flex flex-row justify-content-between align-items-center">
					<h4>Dashboard</h4>
					<span className="nav_icons d-inline-flex align-items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							focusable="false"
							width="1em"
							height="1em"
							preserveAspectRatio="xMidYMid meet"
							viewBox="0 0 15 15"
						>
							<g fill="none">
								<path
									d="M3.5 11.493H4v-.5h-.5v.5zm0 2.998H3a.5.5 0 0 0 .8.4l-.3-.4zm4-2.998v-.5h-.167l-.133.1l.3.4zm-3-7.496H4v1h.5v-1zm6 1h.5v-1h-.5v1zm-6 1.998H4v1h.5v-1zm4 1H9v-1h-.5v1zM3 11.493v2.998h1v-2.998H3zm.8 3.398l4-2.998l-.6-.8l-4 2.998l.6.8zm3.7-2.898h6v-1h-6v1zm6 0c.829 0 1.5-.67 1.5-1.5h-1c0 .277-.223.5-.5.5v1zm1.5-1.5V1.5h-1v8.994h1zM15 1.5C15 .67 14.329 0 13.5 0v1c.277 0 .5.223.5.5h1zM13.5 0h-12v1h12V0zm-12 0C.671 0 0 .67 0 1.5h1c0-.277.223-.5.5-.5V0zM0 1.5v8.993h1V1.5H0zm0 8.993c0 .83.671 1.5 1.5 1.5v-1a.499.499 0 0 1-.5-.5H0zm1.5 1.5h2v-1h-2v1zm3-6.996h6v-1h-6v1zm0 2.998h4v-1h-4v1z"
									fill="#808B9D"
								/>
							</g>
							<rect x="0" y="0" width="15" height="15" fill="rgba(0, 0, 0, 0)" />
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							focusable="false"
							width="1em"
							height="1em"
							preserveAspectRatio="xMidYMid meet"
							viewBox="0 0 36 36"
						>
							<path
								className="clr-i-outline--badged clr-i-outline-path-1--badged"
								d="M18 34.28A2.67 2.67 0 0 0 20.58 32h-5.26A2.67 2.67 0 0 0 18 34.28z"
								fill="#808B9D"
							/>
							<path
								className="clr-i-outline--badged clr-i-outline-path-2--badged"
								d="M32.51 27.83A14.4 14.4 0 0 1 30 24.9a12.63 12.63 0 0 1-1.35-4.81v-4.94a10.92 10.92 0 0 0-.16-1.79a7.44 7.44 0 0 1-2.24-.84a8.89 8.89 0 0 1 .4 2.64v4.94a14.24 14.24 0 0 0 1.65 5.85a16.17 16.17 0 0 0 2.44 3H5.13a16.17 16.17 0 0 0 2.44-3a14.24 14.24 0 0 0 1.65-5.85v-4.95A8.8 8.8 0 0 1 18 6.31a8.61 8.61 0 0 1 4.76 1.44A7.49 7.49 0 0 1 22.5 6v-.63a10.58 10.58 0 0 0-3.32-1V3.11a1.33 1.33 0 1 0-2.67 0v1.31a10.81 10.81 0 0 0-9.3 10.73v4.94a12.63 12.63 0 0 1-1.35 4.81a14.4 14.4 0 0 1-2.47 2.93a1 1 0 0 0-.34.75v1.36a1 1 0 0 0 1 1h27.8a1 1 0 0 0 1-1v-1.36a1 1 0 0 0-.34-.75z"
								fill="#808B9D"
							/>
							<circle
								className="clr-i-outline--badged clr-i-outline-path-1--badged clr-i-badge"
								cx="30"
								cy="6"
								r="5"
								fill="#FF0000"
							/>
							<rect x="0" y="0" width="36" height="36" fill="rgba(0, 0, 0, 0)" />
						</svg>
						<img className="px-4" src={'./assets/imgs/brand.png'} alt="" />
					</span>
				</div>
				<Switch>
					<Route path="/dashboard" exact>
						<div className="bottom_tab d-flex justify-content-end align-items-center">
							<Form className="d-inline-flex justify-content-center align-items-center">
								<Form.Group controlId="yearOption" className="w-100">
									<Form.Control as="select" name="yearOption" size="lg">
										<option value="2020">Current Year</option>
										<option value="2019">Last Year</option>
										<option value="2018">2018</option>
										<option vaue="2017">2017</option>
									</Form.Control>
								</Form.Group>

								<Form.Group controlId="weekOption" className="w-100">
									<Form.Control as="select" name="weekOption" size="lg">
										<option>Current Week</option>
										<option>Last Week</option>
										<option>week 20 - 04/19 - 04/25</option>
										<option>week 20 - 04/19 - 04/26</option>
									</Form.Control>
								</Form.Group>
							</Form>
						</div>
					</Route>
					<Route path="/dashboard/">
						<div className="bottom_tab d-flex justify-content-between align-items-center">
							<div className="d-inline-flex info_area">
								<Link to="/dashboard">
									<p className="back_btn">{'<'} Back</p>
								</Link>
								<p>200 Total</p>
								<p>
									Showing 1 - 20 of 200<span className="pl-3">
										<Link className="pr-4" to="/dashboard">
											{'<'}
										</Link>
										<Link to="/dashboard">{'>'}</Link>
									</span>
								</p>
							</div>
							<Form
								className="d-inline-flex justify-content-center align-items-center"
								onSubmit={(e) => e.preventDefault()}
							>
								<Form.Group controlId="yearOption" className="w-100">
									<Form.Control
										type="search"
										name="yearOption"
										size="lg"
										placeholder="Search ..."
										autoComplete="off"
									/>
								</Form.Group>
							</Form>
						</div>
					</Route>
				</Switch>
			</nav>
			<aside id="side_nav" className="d-inline-flex justify-content-start align-items-start flex-column">
				<img id="logo" src={'./assets/imgs/logo.png'} alt="logo" />
				<ul className="pt-5 pl-0 w-100">
					<NavLink activeClassName="active_link" exact to="/dashboard">
						<li>
							<svg
								className="stretched-link"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								focusable="false"
								width="1em"
								height="1em"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
							>
								<path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z" />
								<rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" />
							</svg>Dashboard
						</li>
					</NavLink>
					<NavLink activeClassName="active_link" to="/dashboard/starships">
						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								focusable="false"
								width="1em"
								height="1em"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
							>
								<path d="M5 3v18h6v-3.5h2V21h6V3H5m2 2h2v2H7V5m4 0h2v2h-2V5m4 0h2v2h-2V5M7 9h2v2H7V9m4 0h2v2h-2V9m4 0h2v2h-2V9m-8 4h2v2H7v-2m4 0h2v2h-2v-2m4 0h2v2h-2v-2m-8 4h2v2H7v-2m8 0h2v2h-2v-2z" />
								<rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" />
							</svg>Starships
						</li>
					</NavLink>
					<NavLink to="/dashboard/people">
						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								focusable="false"
								width="1.13em"
								height="1em"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 576 512"
							>
								<path d="M576 216v16c0 13.255-10.745 24-24 24h-8l-26.113 182.788C514.509 462.435 494.257 480 470.37 480H105.63c-23.887 0-44.139-17.565-47.518-41.212L32 256h-8c-13.255 0-24-10.745-24-24v-16c0-13.255 10.745-24 24-24h67.341l106.78-146.821c10.395-14.292 30.407-17.453 44.701-7.058c14.293 10.395 17.453 30.408 7.058 44.701L170.477 192h235.046L326.12 82.821c-10.395-14.292-7.234-34.306 7.059-44.701c14.291-10.395 34.306-7.235 44.701 7.058L484.659 192H552c13.255 0 24 10.745 24 24zM312 392V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24zm112 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24zm-224 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24z" />
								<rect x="0" y="0" width="576" height="512" fill="rgba(0, 0, 0, 0)" />
							</svg>
							People
						</li>
					</NavLink>
					<NavLink to="/dashboard/vehicles">
						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								focusable="false"
								width="1em"
								height="1em"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
							>
								<path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-9v-6h9v6z" />
								<rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" />
							</svg>Vehicles
						</li>
					</NavLink>
					<NavLink to="/dashboard/species">
						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								focusable="false"
								width="1em"
								height="1em"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
							>
								<g>
									<path d="M8 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0z" />
									<path d="M8 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0z" />
									<path d="M6 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" />
									<path d="M14 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0z" />
									<path d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" />
									<path d="M14 18a2 2 0 1 1-4 0a2 2 0 0 1 4 0z" />
									<path d="M18 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" />
									<path d="M20 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0z" />
									<path d="M18 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" />
								</g>
								<rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" />
							</svg>Species
						</li>
					</NavLink>
				</ul>
			</aside>
		</header>
	);
}
