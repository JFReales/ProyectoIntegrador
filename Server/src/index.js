const http = require("http");
const url = require("url");
const data = require("./utils/data");
const PORT = 3001;

const server = http.createServer((req, res) => {
	// Establecer el encabezado para permitir el acceso desde cualquier origen (CORS)
	res.setHeader("Access-Control-Allow-Origin", "*");

	// Obtener la URL y extraer el path y el ID del personaje
	const { pathname } = url.parse(req.url, true);
	const pathParts = pathname.split("/");
	const id = pathParts[pathParts.length - 1];

	// Verificar si la URL incluye "/rickandmorty/character" y si se proporciona un ID
	if (pathname.includes("/rickandmorty/character") && id) {
		// Buscar el personaje por su ID en el archivo data.js
		const character = data.find((character) => character.id === Number(id));

		if (character) {
			// Enviar la respuesta como JSON con el personaje encontrado
			res.setHeader("Content-Type", "application/json");
			res.end(JSON.stringify(character));
		} else {
			// Enviar una respuesta de error si no se encuentra ningún personaje con el ID proporcionado
			res.statusCode = 404;
			res.end("Personaje no encontrado");
		}
	} else {
		// Enviar una respuesta de error si la URL no cumple con los requisitos
		res.statusCode = 400;
		res.end("URL inválida");
	}
});

server.listen(PORT, () => {});
