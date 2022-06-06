import axios from "axios";
import { useRef } from "react"


export default function DeleteCreditCard(){



    const creditCardInput = useRef();


    const url = "http://localhost:8080/cmChicken"

    async function deleteCreditCard(){


        try{
            const response = await axios.delete(`${url}/creditcard/cc_number?cc_number=${creditCardInput.current.value}` )
            console.log(response)
            console.log(response.data)
        }catch (error){
            console.error(error)
        }

    }

    return(
    <>
    <h3>Delete your creditcard.</h3>
        <input placeholder="Enter your Credit Card Number" ref={creditCardInput}></input>
        <button onClick={deleteCreditCard}>Delete Credit Card</button>


    </>
    
    )
}