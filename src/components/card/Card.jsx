import styled from "./Card.module.css" 
export default function Card({name, status, species, gender, origin, image, onClose}) {
   return (
      <div className= {styled.container}>
         <div className={styled.buttonContainer}>
            <button onClick={ () => onClose()} className = {styled.button}>
               X
            </button>
         </div>
         <h2 className={styled.props}>Nombre: {name}</h2>
         <h2 className={styled.props}>Status: {status}</h2>
         <h2 className={styled.props}>Especie: {species}</h2>
         <h2 className={styled.props}>Género: {gender}</h2>
         <h2 className={styled.props}>Origen: {origin}</h2>
         <img className={styled.image} src={image} alt='Not found' />
      </div>
   );
}
