import SearchBar  from "../searchbar/SearchBar";
import styled from "./Nav.module.css"

export default function Nav ({onSearch}) {
    return (
        <div className={styled.container}>
            <SearchBar onSearch={onSearch} />
        </div>
    )

}