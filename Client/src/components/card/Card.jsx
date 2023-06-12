import styled from "./Card.module.css" 
import { Form, Link } from "react-router-dom";
import { addFav, removeFav} from "../../redux/actions"
import { connect } from "react-redux"
import { useState, useEffect } from "react";

function Card({
   name,
   status, 
   species, 
   gender, 
   origin, 
   image, 
   onClose, 
   id,
   addFav,
   removeFav,
   myFavorites,
}) {
   const [isFav, setIsFav] = useState(false)
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   const handleFavorite = () =>{
      isFav ? removeFav(id) : addFav({
         id,
         name,
         status, 
         species, 
         gender, 
         origin, 
         image})
         setIsFav(!isFav);
   }
   return (
      <div className= {styled.container}>
         <div className={styled.buttonContainer}>
         {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
         }
         </div>
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
const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character))
      }, 
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
