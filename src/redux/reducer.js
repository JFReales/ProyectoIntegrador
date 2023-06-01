const initialState = {
	myFavorites: [],
	allCharacters: [],
};

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case "ADD_FAV":
			return {
				...state,
				myFavorites: [...state.allCharacters, payload],
				allCharacters: [...state.allCharacters, payload],
			};

		case "REMOVE_FAV":
			const filtered = state.myFavorites.filter((char) => char.id !== payload);
			return {
				...state,
				myFavorites: filtered,
			};
		case "FILTER":
			const filteredByGender = state.allCharacters.filter(
				(char) => char.gender === payload
			);
			return {
				...state,
				myFavorites: filteredByGender,
			};
		case "ORDER":
			return {
				...state,
				myFavorites: state.allCharacters.sort((a, b) =>
					payload === "A" ? a.id - b.id : b.id - a.id
				),
			};

		default:
			return state;
	}
}
