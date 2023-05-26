import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav";
import background from "./img/fondo.png";
import { useState } from "react";
import axios from "axios";
const URL = "https://rickandmortyapi.com/api/character";

function App() {
	const [characters, setCharacters] = useState([]);

	const onSearch = (id) => {
		axios(`${URL}/${id}`)
			.then(({ data }) => {
				setCharacters([...characters, data]);
			})
			.catch((error) => {
				window.alert("¡No hay personajes con este ID!");
			});
	};

	const onClose = (id) => {
		const filtered = characters.filter((chars) => chars.id !== id);
		setCharacters(filtered);
	};
	return (
		<div className="App" style={{ backgroundImage: `url(${background})` }}>
			<Nav onSearch={onSearch} />
			<Cards characters={characters} onClose={onClose} />
		</div>
	);
}

export default App;
