const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = (res, id) => {
	axios(`${URL}/${id}`)
		.then(({ data }) => {
			const {
				name,
				gender,
				species,
				origin = origin.name,
				image,
				status,
			} = data;
			const character = {
				id,
				name,
				gender,
				species,
				origin,
				image,
				status,
			};
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(JSON.stringify(character));
		})
		.catch((reason) => {
			res.writeHead(500, { "Content-Type": "text/plain" });
			res.end(reason.message);
		});
};

module.exports = getCharById;
