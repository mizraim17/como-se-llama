import React, { useState } from "react";
import axios from "axios";
import "./App.css";
 import { Col, Card, CardTitle, Row, Icon } from 'react-materialize'

function App() {
	const [films, setFilms] = useState("");

	const findFilm = () => {
		axios
			.get(
				// ` https://api.themoviedb.org/3/person/5?api_key=3c5bc5cac4d9c2e29d68ab73c21b1cfb&language=en-US`
				` https://api.themoviedb.org/3/discover/movie?api_key=3c5bc5cac4d9c2e29d68ab73c21b1cfb&language=es-MX&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12`

				//https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US
			)
			.then(res => {
				console.log(res.data);
				setFilms(res.data.results);
			});
	};

	return (
		<div className="App">
			<h1>Como se llama la peli?</h1>
			<button
				className="btn waves-effect waves-light"
				type="submit"
				name="action"
			>
				Submit
				<i className="material-icons right">send</i>
			</button>
			<button onClick={findFilm}> obten peli</button>
 
			<div className="fletz red">
				{films
					? films.map((el, index) => {
            return (
                <Row>
                  <Col
                    m={6}
                    s={12}
                  >
                    <Card
                      actions={[
                        <a key="1" href="#">This is a Link</a>
                      ]}
                      closeIcon={<Icon>close</Icon>}
                      header={<CardTitle image={`http://image.tmdb.org/t/p/w185${el.poster_path}`}><h1>{el.title}</h1></CardTitle>}
                      revealIcon={<Icon>more_vert</Icon>}
                    >
                      Here is the standard card with an image thumbnail.
                    </Card>
                  </Col>
                </Row>						 
							);
					  })
					: ""}
			</div>

			<div className="card-panel teal lighten-2">
				This is a card panel with a teal lighten-2 class
			</div>
		</div>
	);
}

export default App;
