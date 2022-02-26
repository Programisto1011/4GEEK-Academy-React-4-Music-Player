import React, { useState, useEffect } from "react";

//include album covers
import dog_cover from "../../img/1.jpg";
import cat_cover from "../../img/2.jpg";
import monkey_cover from "../../img/3.jpg";
//Instalar: npm install react-bootstrap bootstrap@5.1.3
//import Button from 'react-bootstrap/Button';
import { ListGroup, Badge } from "react-bootstrap";
//create your first component
const Main = () => {
	const urlAPI = "https://assets.breatheco.de/apis/sound/";

	const [state, setState] = useState([]);
	//Conseguir url a partir de la id
	const [id, setId] = useState(1);
	const [song, setSong] = useState("files/mario/songs/castle.mp3");

	const getSongsDetails = () => {
		fetch(urlAPI.concat("songs"))
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error("fail to get people details");
			})
			.then((responseAddJSON) => {
				console.log("Response add json", responseAddJSON);
				setState(responseAddJSON);
				console.log(`Store songs detail" ${state}`);
			})
			.catch((err) => {
				console.error(err.message);
			});
	};

	useEffect(() => {
		getSongsDetails();
	}, []);

	useEffect(() => {
		getSongsDetails();
		setSong(
			state.filter((el) => {
				return el.id == id;
			}).url
		);
		console.log(song);
	}, [id]);
	const changeNextSong = () => {};

	const listSongs = state.map((inputValue, index) => (
		<ListGroup.Item
			key={index}
			className="d-flex justify-content-between align-items-start"
			action
			//Onclick que cambie la id
			onClick={() => setId(inputValue.id)}
			variant="light">
			<div className="ms-1 ">
				<img src={cat_cover} alt="Dog cover" height="50px" />
			</div>
			<div className="ms-2 me-auto">
				<div className="fw-bold">{inputValue.name}</div>
				{inputValue.category}
			</div>
			<Badge variant="primary" pill>
				{inputValue.id}
			</Badge>
		</ListGroup.Item>
	));

	return (
		<>
			<ListGroup as="ol" numbered>
				{listSongs}
			</ListGroup>
			{/* Los botones añaden o descuentan uno de la id */}
			<button>Previous</button>
			<audio
				controls
				controlsList="nodownload"
				autoPlay
				className="container">
				<source src={urlAPI + song} type="audio/mpeg"></source>
			</audio>
			<button>Next</button>
		</>
	);
};

export default Main;
