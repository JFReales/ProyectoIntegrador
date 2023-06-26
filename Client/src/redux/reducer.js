const initialState = {
	myFavorites: [],
	allCharacters: [],
};

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case "ADD_FAV":
			return { ...state, myFavorites: payload, allCharacters: payload };

		case "REMOVE_FAV":
			return { ...state, myFavorites: payload };
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
