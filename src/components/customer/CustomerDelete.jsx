import axios from "axios";
import { useRef } from "react"


export default function CustomerDelete(){


    const customerInput = useRef();


    const url = "http://localhost:8080/cmChicken"



    async function deleteAccount(){


        try{
            const response = await axios.delete(`${url}/customer/username?username=${customerInput.current.value}` )


            console.log(response)
            console.log(response.data)
        }catch (error){
            console.error(error)
        }

    }



    return(
    <>
      <h3>Delete Your Account.</h3>
        <input placeholder="Enter your Username Here" ref={customerInput}></input>
        <button onClick={deleteAccount}>Delete Account</button>

    
    </>
    )
}