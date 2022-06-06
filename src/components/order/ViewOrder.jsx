import axios from "axios";
import { useRef, useState } from "react";

export default function ViewOrders(){

    const [orderBody, setOrderBody] = useState();

  

    const url = " "

    async function viewAllOrders(){
        
        try{
            
            const response = await axios.get(`${url}/orders`, orderBody)
            const orders = await response.data;
            const menuItemsTableRows = orders.map((e) => {
            return (
                <tr>
                    <td>{e.id}</td>
                    <td>{e.menu_item}</td>
                    <td>{e.m_comment}</td>
                    <td>{String(e.is_favorite)}</td>
                    <td>{e.order_date}</td>
                    <td>{e.customer_username}</td>
                </tr>
            )
           
        })
    
        setOrderBody(menuItemsTableRows)
        console.log(response)
        console.log(response.data)
    
    } catch (e) {
        console.error(e)
    }
    }

    return (
    <>
    <h3>Welcome to the Orders Page</h3>
    <button onClick={ viewAllOrders }>Press To Find All of your Orders</button>
    <table>
            <thead>
                <tr>
                <th>Id</th>
                <th>Menu Item</th>
                <th>Comment</th>
                <th>Favorite</th>
                <th>Order Date</th>
                <th>Customer Username</th>
                </tr>
            </thead>
            <tbody>{orderBody}</tbody>
        </table>
    </>
    )
}