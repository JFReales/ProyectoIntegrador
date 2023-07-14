const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
	try {
		const { id } = req.params;
		const { data } = await axios(`${URL}/${id}`);
		const { status, name, species, origin, image, gender } = data;

		const character = { id, status, name, species, origin, image, gender };
		return name
			? res.json(character)
			: res.status(404).json({ message: error });
	} catch (reason) {
		return res.status(500).json({ message: reason });
	}
};

// const getCharById = (req, res) => {
// 	const { id } = req.params;
// 	axios(`${URL}/${id}`)
// 		.then(({ data }) => {
// 			const { id, status, name, species, origin, image, gender, error } = data;
// 			const character = { id, status, name, species, origin, image, gender };
// 			return name
// 				? res.json(character)
// 				: res.status(404).json({ message: error });
// 		})
// 		.catch((reason) => {
// 			return res.status(500).json({ message: reason });
// 		});
// };

module.exports = getCharById;
