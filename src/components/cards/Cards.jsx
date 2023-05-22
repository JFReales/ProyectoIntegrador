import Card from "../card/Card";
import styled from "./Cards.module.css"

export default function Cards({characters}) {
	return (
		<div className={styled.container}>
			{characters.map(({id, name, status, species, gender, origin, image}) => (
				<Card
					key={id}
					name={name}
					status={status}
					species={species}
					gender={gender}
					origin={origin.name}
					image={image}
					onClose={() => window.alert("Emulamos que se cierra la card")}
				/>
			))}
		</div>
	);
}
