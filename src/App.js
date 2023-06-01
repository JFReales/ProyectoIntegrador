import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import Favorites from "./components/favorite/Favorites";
import { useState } from "react";
import axios from "axios";
import { Routes, Route, useLocation } from "react-router-dom";

const URL = "https://rickandmortyapi.com/api/character";

function App() {
	const [characters, setCharacters] = useState([]);
	const { pathname } = useLocation();

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
		<div
			className="App"
			style={{
				backgroundImage: "url(/img/fondo.png",
				backgroundSize: "100%",
				cover: "100%",
			}}
		>
			{pathname !== "/" && <Nav onSearch={onSearch} />}
			<Routes>
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/" element={<Form />} />
				<Route
					path="/home"
					element={<Cards characters={characters} onClose={onClose} />}
				/>
				<Route path="/about" element={<About />} />
				<Route path="/detail/:id" element={<Detail />} />
			</Routes>
		</div>
	);
}

export default App;
