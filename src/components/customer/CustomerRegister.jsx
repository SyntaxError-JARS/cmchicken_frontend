import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CustomerRegister(){
    const navigate = useNavigate();
    const fnameInput = useRef();
    const lnameInput = useRef();
    const usernameInput = useRef();
    const cpasswordInput = useRef();

    const url = "http://localhost:8080/cmChicken"


    async function customerRegister(){
        

        const customer = {
            
            fname: fnameInput.current.value,
            lname: lnameInput.current.value,
            username: usernameInput.current.value,
            cpassword: cpasswordInput.current.value,
            balance:  0,
            is_admin: false
        }
        navigate("/customer");

        
        try{
        const response = await axios.post(`${url}/customer` , customer)
        console.log(response)
        } catch(error){
            console.error(error.response.data)
            console.log(error)
        }
    }

    return(
        <>
        <h3>Welcome, Please Enter Your Information Below To Sign Up</h3>
        <br></br>
        <br></br>
        <br></br>
        <input placeholder="Enter First Name" ref={fnameInput}></input>
        <br></br>
        <input placeholder="Enter Last Name" ref={lnameInput}></input>
        <br></br>
        <input placeholder="Enter Username" ref={usernameInput}></input>
        <br></br>
        <input type="password" placeholder="Enter password" ref={cpasswordInput}></input>
        <br></br>
        <button onClick={customerRegister}>Register</button>


        </>
    )  
}