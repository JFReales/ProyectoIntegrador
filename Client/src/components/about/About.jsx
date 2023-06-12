import styled from "./About.module.css"

export default function About () {
    return (
        <div>
            <h1 className={styled.container}> Bienvenidos a mi pagina</h1>
            <p className={styled.container}>
                Mi nombre es Juan Francisco Reales, y esta aplicación sirve para ver los diferentes personajes que tiene la serie animada "Rick and Morty".
                Esta app es parte del proyecto integrador de Soy Henry.
            </p>
        </div>
    )
};