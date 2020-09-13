import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function SpeciesRow(props) {
	const {
		name,
		classification,
		designation,
		average_height,
		average_lifespan,
		eye_colors,
		hair_colors,
		language
	} = props.specie;

	return (
		<tr>
			<td>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" />
				</Form.Group>
			</td>
			<td>{name}</td>
			<td>{classification}</td>
			<td>{designation}</td>
			<td>{average_height}</td>
			<td>{average_lifespan}</td>
			<td>{eye_colors}</td>
			<td>{hair_colors}</td>
			<td>{language}</td>
		</tr>
	);
}

function SpeciesTable(props) {
	const BASE_URL = 'https://swapi.dev/api/';
	const [ query, setQuery ] = useState({
		queryStr: 'species',
		species: []
	});

	const getData = async () => {
		const response = await fetch(`${BASE_URL}species`);
		const data = await response.json();
		const species = data.results;
		setQuery({ species });
	};

	useEffect(() => {
		getData();
	}, []);

	const speciesRows = query.species.map((specie, i) => <SpeciesRow key={i} specie={specie} />);
	return (
		<Card className="table-data small-table-data">
			<Card.Body>
				<Table>
					<thead>
						<tr>
							<th>{''}</th>
							<th>Name</th>
							<th>Classfication</th>
							<th>Designation</th>
							<th>Average Height</th>
							<th>Average Lifespan</th>
							<th>Eye Colors</th>
							<th>Hair Colors</th>
							<th>Language</th>
						</tr>
					</thead>

					<tbody style={{ borderTop: '1px solid #a3abb727' }}>{speciesRows}</tbody>
				</Table>
			</Card.Body>
		</Card>
	);
}

export default SpeciesTable;
