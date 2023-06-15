const http = require("http");

const PORT = 3001;
const getCharById = require("./controllers/getCharById");

const server = http.createServer((req, res) => {
	// Establecer el encabezado para permitir el acceso desde cualquier origen (CORS)
	res.setHeader("Access-Control-Allow-Origin", "*");

	const { url } = req;
	if (url.includes("/rickandmorty/character")) {
		const id = Number(url.split("/").at(-1));
		getCharById(res, id);
	} else {
		// Enviar una respuesta de error si la URL no cumple con los requisitos
		res.writeHead(403, { "Content-Type": "application/json" });
		res.end(JSON.stringify({ message: "Url no encontrada" }));
	}
});

server.listen(PORT, () => {
	console.log("Servidor HTTP levantado en el puerto 3001");
});
