import axios from "axios"
import { useState } from "react";


export default function MenuItem(){

    const [menuBody, setMenuBody] = useState();
   

     const url = "http://localhost:8080/cmChicken"

   async function getAllMenuItems(){
    
      try{
      const response = await axios.get(`${url}/menu`)
      const items = await response.data;
      const menuItemsTableRows = items.map((e) => {
          return (
              <tr>
                  
                  <td>{e.item_name}</td>
                  <td>{e.price}</td>
                  <td>{e.protein}</td>
                  <td>{String(e.is_substitutable)}</td>
              </tr>
          )
         
      })
      setMenuBody(menuItemsTableRows)
      console.log(response)
      console.log(response.data)
  } catch (e) {
      console.error(e)
  }

      
  }




    return(
    <>
        <h1>Welcome to Menu Page</h1>
        <br></br>
        <button onClick={getAllMenuItems}>Press to Find All of the Menu Items</button>
    <table>
        <thead>
            <tr>
                
                <th>item_name</th>
                <th>price</th>
                <th>protein</th>
                <th>is_substitutable</th>
            </tr>
        </thead>
        <tbody>{menuBody}</tbody>
    </table>

        
    
    </>
    )

    
}