import { connect, useDispatch } from "react-redux";
import Cards from "../cards/Cards";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";


function Favorites ({myFavorites}){
    const dispatch = useDispatch()
    const [aux, setAux] = useState(false)

    const handleChance = (event) =>{
        const {value, name} = event.target
        switch (name) {
            case "filter":
                dispatch(filterCards(value))
            break;
            
            case "order" :
                dispatch(orderCards(value))
                setAux(!aux)
            break;
                
            default:
                break;
        }
    }

    

    return(
        <div>
            <div>
                <select name="order" onChange={handleChance}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select name="filter" onChange={handleChance}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <Cards characters = {myFavorites}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}
export default connect(mapStateToProps)(Favorites)