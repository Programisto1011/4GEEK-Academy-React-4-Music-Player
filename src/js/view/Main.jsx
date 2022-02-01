import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//Instalar: npm install react-bootstrap bootstrap@5.1.3
//import Button from 'react-bootstrap/Button';
import ListGroup from "react-bootstrap/ListGroup";

//create your first component
const Main = () => {
	return (
		<>
			<ListGroup>
				<ListGroup.Item>No style</ListGroup.Item>
				<ListGroup.Item variant="primary">Primary</ListGroup.Item>
				<ListGroup.Item action variant="secondary">
					Secondary
				</ListGroup.Item>
				<ListGroup.Item action variant="success">
					Success
				</ListGroup.Item>
				<ListGroup.Item action variant="danger">
					Danger
				</ListGroup.Item>
				<ListGroup.Item action variant="warning">
					Warning
				</ListGroup.Item>
				<ListGroup.Item action variant="info">
					Info
				</ListGroup.Item>
				<ListGroup.Item action variant="light">
					Light
				</ListGroup.Item>
				<ListGroup.Item action variant="dark">
					Dark
				</ListGroup.Item>
			</ListGroup>
		</>
	);
};

export default Main;
