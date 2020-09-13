import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

function PeopleRow(props) {
	const { name, birth_year, gender, eye_color, hair_color, height, skin_color, created } = props.people;
	return (
		<tr>
			<td>{name}</td>
			<td>{birth_year}</td>
			<td>{gender}</td>
			<td>{eye_color}</td>
			<td>{hair_color}</td>
			<td>{height}</td>
			<td>77 KG</td>
			<td>{skin_color}</td>
			<td style={{ color: '#168865' }}>{created}</td>
		</tr>
	);
}

function PeopleTable(props) {
	const BASE_URL = 'https://swapi.dev/api/';
	const [ query, setQuery ] = useState({
		queryStr: 'people',
		people: []
	});

	const getData = async () => {
		const response = await fetch(`${BASE_URL}people`);
		const data = await response.json();
		const people = data.results;
		setQuery({ people });
	};

	useEffect(() => {
		getData();
	}, []);

	const peopleRows = query.people.map((people, i) => <PeopleRow key={i} people={people} />);
	return (
		<Card className="table-data">
			<Card.Body>
				<Table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Birth Year</th>
							<th>Gender</th>
							<th>Eye Color</th>
							<th>Hair Color</th>
							<th>Height</th>
							<th>Mass</th>
							<th>Skin Color</th>
							<th>Created</th>
						</tr>
					</thead>

					<tbody style={{ borderTop: '1px solid #a3abb727' }}>{peopleRows}</tbody>
				</Table>
			</Card.Body>
		</Card>
	);
}

export default PeopleTable;
