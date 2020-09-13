import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './cards.css';

const CardTile = ({ caption, logo }) => {
	let tag = caption.toLowerCase();
	return (
		<Link to={`/dashboard/${tag}`}>
			<Card>
				<Card.Header className="d-flex justify-content-between">
					{caption}
					<span className="card_img">
						<img src={logo} alt="camera" />
					</span>
				</Card.Header>
				<Card.Body>
					<Card.Title>200</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						<span>
							<i
								className="iconify"
								data-icon="bi:arrow-up"
								data-inline="false"
								style={{ color: '#5FB960' }}
							/>20
						</span>More than yesterday
					</Card.Subtitle>
				</Card.Body>
			</Card>
		</Link>
	);
};

CardList.defaultProps = {
	tabs: [
		{ caption: 'Film', logo: './assets/svgs/video-camera.svg' },
		{ caption: 'Starships', logo: './assets/svgs/ufo.svg' },
		{ caption: 'People', logo: './assets/svgs/students.svg' },
		{ caption: 'Vehicles', logo: './assets/svgs/taxi.svg' }
	]
};

export default function CardList(props) {
	const cards = props.tabs.map((card, i) => <CardTile key={card.caption} caption={card.caption} logo={card.logo} />);
	return <div className="cards-wrapper">{cards}</div>;
}
