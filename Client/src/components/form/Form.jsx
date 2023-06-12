import styled from "./Form.module.css"
import { useState } from "react";
import validation from "./validation";


export default function Form({login}) {

    const [userData, setUserData] = useState({email:"", password:""});
    const [errors, setErrors] = useState({email:"", password:""});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setErrors(validation ({...userData, [name]:value}))
        setUserData({...userData, [name]:value})
    }
    const handleSubmit = (event) => {
        event.preventDefault() 
        login (userData)
    }
    

   

    return(
        <div className={styled.externo}>
            <form className={styled.container}>
                <div className={styled.input}>
                    <label> Email:</label>
                    <input 
                        onChange={handleChange} 
                        type="text" 
                        name="email" 
                        placeholder="example@mail.com" />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className={styled.input}>
                    <label>Password:</label>
                    <input onChange={handleChange} type="password" name="password" />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button className={styled.button} onClick={handleSubmit}>Log in</button>
            </form>
        </div>
        
    )
    
}