import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

function FilmRow(props) {
	const { title, director, producer, release_date, characters, episode_id } = props.film;
	return (
		<tr>
			<td>
				<img src={'./assets/svgs/video-camera.svg'} alt="" className="pr-4" />
			</td>
			<td>{title}</td>
			<td>{director}</td>
			<td>{producer}</td>
			<td>{release_date}</td>
			<td>{episode_id}</td>
			<td style={{ color: '#178924' }}>{characters[0]}</td>
		</tr>
	);
}

function FilmTable(props) {
	const BASE_URL = 'https://swapi.dev/api/';
	const [ query, setQuery ] = useState({
		queryStr: 'films',
		films: []
	});

	const getData = async () => {
		const response = await fetch(`${BASE_URL}films`);
		const data = await response.json();
		const films = data.results;
		setQuery({ films });
	};

	useEffect(() => {
		getData();
	});

	const filmRows = query.films.map((film, i) => <FilmRow key={i} film={film} />);
	return (
		<Card className="table-data">
			<Card.Header>Films</Card.Header>
			<Card.Body>
				<Table responsive>
					<thead>
						<tr>
							<th>{''}</th>
							<th>Film Title</th>
							<th>Director</th>
							<th>Producer</th>
							<th>Release Date</th>
							<th>Episode ID</th>
							<th>Characters</th>
						</tr>
					</thead>
					<tbody>{filmRows}</tbody>
				</Table>
			</Card.Body>
		</Card>
	);
}

export default FilmTable;
