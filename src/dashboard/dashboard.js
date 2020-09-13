import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './dashboard.css';
import './table.css';
import Nav from './nav';
import CardList from './cards';
import FilmTable from '../films/films';
import StarshipTable from '../starships/starships';
import PeopleTable from '../people/people';
import VehicleTable from '../vehicles/vehicles';
import SpeciesTable from '../species/species';

const Dashboard = () => {
	return (
		<Router>
			<section id="dashboard-wrapper">
				<Nav />
				<div id="container" style={{ backgroundColor: '#F6F6F6' }}>
					<Route path="/dashboard" exact component={CardList} />
					<Route path="/dashboard" exact component={FilmTable} />
					<Switch>
						<Route path="/dashboard/film" component={FilmTable} />
						<Route path="/dashboard/starships" component={StarshipTable} />
						<Route path="/dashboard/people" component={PeopleTable} />
						<Route path="/dashboard/vehicles" component={VehicleTable} />
						<Route path="/dashboard/species" component={SpeciesTable} />
					</Switch>
				</div>
			</section>
		</Router>
	);
};

export default Dashboard;
