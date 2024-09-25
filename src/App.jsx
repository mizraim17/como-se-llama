import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
 
import axios from "axios";


import './App.css'

function App() {

	const apiKey = import.meta.env.VITE_API_KEY;
 
  	const [films, setFilms] = useState("");
	const [nameFilm, setnameFilm] = useState("");

	const onChange = (e) => {
		setnameFilm(e.target.value);
		console.log("name", nameFilm);
	};


  	const findFilm = () => {
		// axios.get(
		// 	` https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-MX&?with_people=108916,7467&sort_by=popularity.desc`
		// );

		axios
			.get(
				// ` https://api.themoviedb.org/3/person/5?api_key=${apiKey}&language=en-US`
				// ` https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-MX&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12`
				// ` https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-MX&?with_people=108916,7467&sort_by=popularity.desc``
				`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-MX&query=${nameFilm}`
				//https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US
			)
			.then((res) => {
				console.log(res.data);
				setFilms(res.data.results);
			});
	};

  return (
    <>
    
    
      <Container>
        <h1>Como se llama la peli?</h1>
			  {/* <Button onClick={findFilm}> get film</Button> */}
 
					<Row  fluid="lg" >
						{films
							? films.map((el, index) => {
									return (
										<Col md={6} lg={4} sm={12} key={index}>
											<Card style={{ width: "18rem" }} className="mt-4">
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
					<InputGroup className="mb-3 mt-5">
						<FormControl
							placeholder="Nombre de la pelicula  "
							aria-label="Recipient's username"
							aria-describedby="basic-addon2"
							onChange={onChange}
						/>
						 
							<Button onClick={findFilm}> get film</Button>
				 
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
		 
    </>
  )
}

export default App
