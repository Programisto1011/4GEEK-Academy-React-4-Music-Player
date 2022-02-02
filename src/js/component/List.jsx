import React from "react";

//include album covers
import rigoImage from "../../img/rigo-baby.jpg";
import dog_cover from "../../img/dog_cover.jpg";
//Instalar: npm install react-bootstrap bootstrap@5.1.3
//import Button from 'react-bootstrap/Button';
import { ListGroup, Badge } from "react-bootstrap";
//create your first component

//1. Preparación del dataset
////Clase canción
function Song (name, author, urlCover) {

	this.name = name;
	this.author = author;
	this.urlCover = urlCover;

}
////Objeto lista con todas las canciones
function List (){

}

const List = () => {
	return (
		<>
			<ListGroup as="ol" numbered>
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
						<img src={dog_cover} alt="Dog cover" height="50px" />
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

export default List;
