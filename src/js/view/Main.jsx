import React from "react";

//include album covers
import dog_cover from "../../img/dog_cover.jpg";
import cat_cover from "../../img/cat_cover.jpg";
import monkey_cover from "../../img/monkey_cover.jpg";
//Instalar: npm install react-bootstrap bootstrap@5.1.3
//import Button from 'react-bootstrap/Button';
import { ListGroup, Badge } from "react-bootstrap";
//create your first component
const Main = () => {
	return (
		<>
			<ListGroup as="ol" numbered>
				<ListGroup.Item
					className="d-flex justify-content-between align-items-start"
					action
					variant="light">
					<div className="ms-1 ">
						<img src={cat_cover} alt="Dog cover" height="50px" />
					</div>
					<div className="ms-2 me-auto">
						<div className="fw-bold">Subheading</div>
						Cras justo odio
					</div>
					<Badge variant="primary" pill>
						1
					</Badge>
				</ListGroup.Item>
				<ListGroup.Item
					className="d-flex justify-content-between align-items-start"
					action
					variant="light">
					<div className="ms-1 ">
						<img src={dog_cover} alt="Dog cover" height="50px" />
					</div>
					<div className="ms-2 me-auto">
						<div className="fw-bold">Subheading</div>
						Cras justo odio
					</div>
					<Badge variant="primary" pill>
						2
					</Badge>
				</ListGroup.Item>
				<ListGroup.Item
					className="d-flex justify-content-between align-items-start"
					action
					variant="light">
					<div className="ms-1 ">
						<img
							src={monkey_cover}
							alt="Monkey cover"
							height="50px"
						/>
					</div>
					<div className="ms-2 me-auto">
						<div className="fw-bold">Subheading</div>
						Cras justo odio
					</div>
					<Badge variant="primary" pill>
						3
					</Badge>
				</ListGroup.Item>
			</ListGroup>
		</>
	);
};

export default Main;
