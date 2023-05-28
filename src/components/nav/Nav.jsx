import SearchBar  from "../SearchBar";
import styled from "./Nav.module.css"
import {Link} from "react-router-dom"

export default function Nav ({onSearch}) {
    return (
        <div className={styled.container}>
            <Link to="/about">
                <button className={styled.button}>About</button>
            </Link>
            <Link to="/home">
                <button className={styled.button}>
                    Home
                </button>
            </Link>
            <SearchBar onSearch={onSearch} />

        </div>
    )

}