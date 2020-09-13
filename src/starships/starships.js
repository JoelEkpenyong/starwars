import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function StarshipRow(props) {
	const { name, model, starship_class, cost_in_credits, passengers, length, crew } = props.ship;
	return (
		<tr>
			<td>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" />
				</Form.Group>
			</td>
			<td>{name}</td>
			<td>{model}</td>
			<td>{starship_class}</td>
			<td style={{ color: '#3620B1' }}>{cost_in_credits}</td>
			<td>{passengers}</td>
			<td>{length}</td>
			<td>{crew}</td>
		</tr>
	);
}

function StarshipTable(props) {
	const BASE_URL = 'https://swapi.dev/api/';
	const [ query, setQuery ] = useState({
		queryStr: 'starships',
		ships: []
	});

	const getData = async () => {
		const response = await fetch(`${BASE_URL}starships`);
		const data = await response.json();
		const ships = data.results;
		setQuery({ ships });
	};

	useEffect(() => {
		getData();
	}, []);

	const shipRows = query.ships.map((ship, i) => <StarshipRow key={i} ship={ship} />);
	return (
		<Card className="table-data">
			<Card.Body>
				<Table>
					<thead>
						<tr>
							<th>{''}</th>
							<th>Name</th>
							<th>Model</th>
							<th>Class</th>
							<th>Cost(inGC)</th>
							<th>Passengers</th>
							<th>Length</th>
							<th>Crew</th>
						</tr>
					</thead>
					<tbody>{shipRows}</tbody>
				</Table>
			</Card.Body>
		</Card>
	);
}

export default StarshipTable;
