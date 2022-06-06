import { useRef } from 'react';
import axios from 'axios';


export default function UpdateCreditCard(){

    const cc_numberInput = useRef();
     const cc_nameInput = useRef();
     const cvvInput = useRef();
     const exp_dateInput = useRef();
     const zipInput = useRef();
     const cc_limitInput = useRef();
     const customer_usernameInput = useRef();
   

    const url = "http://localhost:8080/cmChicken/creditcard/"

    async function updateCredit(){

        const Credit = {
            
            cc_number: cc_numberInput.current.value,
            cc_name: cc_nameInput.current.value,
            cvv: cvvInput.current.value,
            exp_date: exp_dateInput.current.value,
            zip: zipInput.current.value,
            cc_limit: cc_limitInput.current.value,
            customer_username: customer_usernameInput.current.value
        }
        
        try{
        const response = await axios.post(`${url}/creditcard/update` , Credit)
       
        console.log(response)
        } catch(error){
            console.error(error.response.data)
            console.log(error)
        }
    }

    return(
    <>
    <h3>Please update payment information below</h3>
        <br></br>
        <br></br>
        <br></br>
        <input placeholder="Enter card number" ref={cc_numberInput}></input>
        <br></br>
        <input placeholder="Enter name on card" ref={cc_nameInput}></input>
        <br></br>
        <input placeholder="Enter the cvv" ref={cvvInput}></input>
        <br></br>
        <input placeholder="Enter expiration date" ref={exp_dateInput}></input>
        <br></br>
        <input placeholder="Enter the zip code" ref={zipInput}></input>
        <br></br>
        <input placeholder="Enter the credit limit" ref={cc_limitInput}></input>
        <br></br>
        <input placeholder="Enter your username" ref={customer_usernameInput}></input>
        <br></br>
        <button onClick={updateCredit}>Update Payment</button>


    </>
    )
}