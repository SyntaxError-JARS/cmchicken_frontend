import { useRef } from 'react';
import axios from 'axios';
import { userContext } from "../../App";

export default function UpdateMenu(){

    const item_nameInput = useRef();
    const priceInput= useRef();
    const proteinInput = useRef();
    const is_substitutableInput = useRef();
    const [user, setUser] = useContext(userContext);
   

    const url = "http://localhost:8080/cmChicken"

    async function UpdateMenu(){

        const menuItem = {
            item_name: item_nameInput.current.value,
            price: priceInput.current.value,
            protein: proteinInput.current.value,
            is_substitutable: is_substitutableInput.current.value, 
        } 

        try{
            const response = await axios.put(`${url}/menu` , menuItem )
            console.log(response)
            console.log(response.data)
        }catch(error){
            console.error(error.response.data)
            console.log(error)
        }
        
    }

    return(
    <>
    <h3>Please update menu below</h3>
        <input placeholder="Enter the Item Name" ref={item_nameInput}></input>
        <br></br>
        <input placeholder="Enter The Price" ref={priceInput}></input>
        <br></br>
        <input  placeholder="Enter Protein  In New Item" ref={proteinInput}></input>
        <br></br>
        <input placeholder="Enter If The Item Can Be Substitutable" ref={is_substitutableInput}></input>
        <br></br>
        <button onClick={UpdateMenu}>Update Menu</button>


    </>
    )
}