import axios from "axios";
import { useRef } from "react";

export default function CreateOrder(){

    const menu_itemInput = useRef();
    const m_commentInput = useRef();
    const is_favoriteInput = useRef();
    const order_dateInput = useRef();
    const customer_usernameInput = useRef();
   

    const url = " http://localhost:8080/cmChicken"

    async function addOrder(){

        const order = {
            menu_item: menu_itemInput.current.value,
            m_comment: m_commentInput.current.value,
            is_favorite: is_favoriteInput.current.value,
            order_date: order_dateInput.current.value,
            customer_username: customer_usernameInput.current.value
        }


        try{
            const response = await axios.post(`${url}/menuorder`, order )
            console.log(response)
            console.log(response.data)
        }catch(error){
            console.error(error.response.data)
            console.log(error)
        }

    }


    return (
        <>
        <h3>Welcome, Please Enter Your Order Below</h3>
        <input placeholder="Enter Menu Item" ref={menu_itemInput}></input>
        <br></br>
        <input placeholder="Enter A Comment" ref={m_commentInput}></input>
        <br></br>
        <input  placeholder="Favorite Item" ref={is_favoriteInput}></input>
        <br></br>
        <input  placeholder="Date" ref={order_dateInput}></input>
        <br></br>
        <input  placeholder="Username" ref={customer_usernameInput}></input>
        <br></br>
        <button onClick={addOrder}>Create Order</button>
        </>
    )
}