import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import Favorites from "./components/favorite/Favorites";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

const URL = "http://localhost:3001/rickandmorty/character";

function App() {
	const [characters, setCharacters] = useState([]);
	const { pathname } = useLocation();
	const [access, setAccess] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		!access && navigate("/");
	}, [access]);

	const onSearch = async (id) => {
		try {
			const { data } = await axios(`${URL}/${id}`);
			if (data.name) {
				setCharacters([...characters, data]);
			} else {
				window.alert("¡No hay personajes con este ID!");
			}
		} catch (error) {
			window.alert(error.message);
		}
	};
	// const onSearch = (id) => {
	// 	axios(`${URL}/${id}`)
	// 		.then(({ data }) => {
	// 			setCharacters([...characters, data]);
	// 		})
	// 		.catch((error) => {
	// 			window.alert("¡No hay personajes con este ID!");
	// 		});
	// };

	const onClose = (id) => {
		const filtered = characters.filter((chars) => chars.id !== id);
		setCharacters(filtered);
	};

	const login = async (userData) => {
		const URL = "http://localhost:3001/rickandmorty/login/";
		try {
			const { email, password } = userData;
			const { data } = await axios(
				URL + `?email=${email}&password=${password}`
			);
			const { access } = data;
			setAccess(access);
			access && navigate("/home");
		} catch (error) {
			console.log(error);
		}
	};
	// const login = (userData) => {
	// 	const { email, password } = userData;
	// 	const URL = "http://localhost:3001/rickandmorty/login/";
	// 	axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
	// 		const { access } = data;
	// 		setAccess(access);
	// 		access && navigate("/home");
	// 	});
	// };
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
				<Route path="/" element={<Form login={login} />} />
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
