import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	Card,
	Button,
	Row,
	Col,
	Container,
	InputGroup,
	FormControl,
} from "react-bootstrap";

function App() {
	const [films, setFilms] = useState("");
	const [nameFilm, setnameFilm] = useState("");

	const onChange = (e) => {
		setnameFilm(e.target.value);
		console.log("name", nameFilm);
	};

	const findFilm = () => {
		// axios.get(
		// 	` https://api.themoviedb.org/3/discover/movie?api_key=3c5bc5cac4d9c2e29d68ab73c21b1cfb&language=es-MX&?with_people=108916,7467&sort_by=popularity.desc`
		// );

		axios
			.get(
				// ` https://api.themoviedb.org/3/person/5?api_key=3c5bc5cac4d9c2e29d68ab73c21b1cfb&language=en-US`
				// ` https://api.themoviedb.org/3/discover/movie?api_key=3c5bc5cac4d9c2e29d68ab73c21b1cfb&language=es-MX&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12`
				// ` https://api.themoviedb.org/3/discover/movie?api_key=3c5bc5cac4d9c2e29d68ab73c21b1cfb&language=es-MX&?with_people=108916,7467&sort_by=popularity.desc``
				`https://api.themoviedb.org/3/search/movie?api_key=3c5bc5cac4d9c2e29d68ab73c21b1cfb&language=es-MX&query=${nameFilm}`
				//https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US
			)
			.then((res) => {
				console.log(res.data);
				setFilms(res.data.results);
			});
	};

	return (
		<div className="App">
			<h1>Como se llama la peli?</h1>
			<Button onClick={findFilm}> get film</Button>

			<div>
				<Container>
					<Row>
						{films
							? films.map((el, index) => {
									return (
										<Col md={6} lg={4} sm={12} key={index}>
											<Card style={{ width: "18rem" }}>
												{el.poster_path == null ? (
													<Card.Img
														variant="top"
														src={`https://thumbs.dreamstime.com/b/hombre-desconocido-con-el-signo-de-interrogaci%C3%B3n-71946678.jpg`}
													/>
												) : (
													<Card.Img
														variant="top"
														src={`http://image.tmdb.org/t/p/w185${el.poster_path}`}
													/>
												)}

												<Card.Body>
													<Card.Title>{el.title}</Card.Title>
													<Card.Text>{el.overview}</Card.Text>
													<Button variant="primary">Go somewhere</Button>
												</Card.Body>
											</Card>
										</Col>
									);
							  })
							: ""}
					</Row>
				</Container>
				<Container>
					<InputGroup className="mb-3">
						<FormControl
							placeholder="Recipient's username"
							aria-label="Recipient's username"
							aria-describedby="basic-addon2"
							onChange={onChange}
						/>
						<InputGroup.Append>
							<Button onClick={findFilm}> get film</Button>
						</InputGroup.Append>
					</InputGroup>
				</Container>
				<Container>
					<Row>
						<Col lg={4} md={6} sm={12} className="red">
							<p>sajksakj</p>
						</Col>
						<Col lg={4} md={6} sm={12} className="green">
							<p>sajksakj</p>
						</Col>
						<Col lg={4} md={6} sm={12} className="yellow">
							<p>sajksakj</p>
						</Col>
						<Col lg={4} md={6} sm={12} className="blue">
							<p>sajksakj</p>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
}

export default App;
