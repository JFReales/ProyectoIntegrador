import styled from "./Card.module.css" 
import { Link } from "react-router-dom";
export default function Card({name, status, species, gender, origin, image, onClose, id}) {
   return (
      <div className= {styled.container}>
         <div className={styled.buttonContainer}>
            <button onClick={ () => onClose(id)} className = {styled.button}>
               X
            </button>
         </div>
         <Link to={`/detail/${id}`}>
            <div>
               <h2 className={styled.props}>Nombre: {name}</h2>
               <h2 className={styled.props}>Status: {status}</h2>
               <h2 className={styled.props}>Especie: {species}</h2>
               <h2 className={styled.props}>Género: {gender}</h2>
               <h2 className={styled.props}>Origen: {origin}</h2>
               <img className={styled.image} src={image} alt='Not found' />
            </div>
         </Link>
      </div>
   );
}
