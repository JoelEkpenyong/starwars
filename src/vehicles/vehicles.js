import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function VehicleRow(props) {
	const { name, model, vehicle_class, manufacturer, length, crew, passengers, cargo_capacity } = props.vehicle;
	return (
		<tr>
			<td>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" />
				</Form.Group>
			</td>
			<td>{name}</td>
			<td>{model}</td>
			<td>{vehicle_class}</td>
			<td>{manufacturer}</td>
			<td>{length}</td>
			<td>{crew}</td>
			<td>{passengers}</td>
			<td>{cargo_capacity}</td>
		</tr>
	);
}

function VehicleTable(props) {
	const BASE_URL = 'https://swapi.dev/api/';
	const [ query, setQuery ] = useState({
		queryStr: 'vehicles',
		vehicles: []
	});

	const getData = async () => {
		const response = await fetch(`${BASE_URL}vehicles`);
		const data = await response.json();
		const vehicles = data.results;
		setQuery({ vehicles });
	};

	useEffect(() => {
		getData();
	}, []);

	const vehicleRows = query.vehicles.map((vehicle, i) => <VehicleRow key={i} vehicle={vehicle} />);
	return (
		<Card className="table-data small-table-data">
			<Card.Body>
				<Table>
					<thead>
						<tr>
							<th>{''}</th>
							<th>Vehicle Name</th>
							<th>Vehicle Model</th>
							<th>Vehicle Class</th>
							<th>Vehicle Manufacturer</th>
							<th>Vehicle Length</th>
							<th>Crew</th>
							<th>Passengers</th>
							<th>Cargo Capacity</th>
						</tr>
					</thead>

					<tbody style={{ borderTop: '1px solid #a3abb727' }}>{vehicleRows}</tbody>
				</Table>
			</Card.Body>
		</Card>
	);
}

export default VehicleTable;
