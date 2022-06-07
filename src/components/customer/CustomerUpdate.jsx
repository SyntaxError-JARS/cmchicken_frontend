import axios from "axios"
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";

export default function CustomerUpdate(){
    const fnameInput = useRef();
    const lnameInput = useRef();
    const usernameInput = useRef();
    const cpasswordInput = useRef();
    const [user, setUser] = useContext(userContext)
    const navigate = useNavigate();

    const url = "http://localhost:8080/cmChicken/auth "


    async function customerUpdate(){
        

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
        const response = await axios.put(`${url}/customer` , customer)
        console.log(response)
        } catch(error){
            console.error(error.response.data)
            console.log(error)
        }
    }

    return(
        <>
        <br></br>
        <br></br>
        <br></br>
        <h3>Update Your Account.</h3>
         <input placeholder="Update First Name" ref={fnameInput}></input>
         <br></br>
         <input placeholder="Update Last Name" ref={lnameInput}></input>
         <br></br>
         <input placeholder="Update your Username" ref={usernameInput }></input>
         <br></br>
         <input type="password" placeholder="Update password" ref={cpasswordInput}></input>
         <br></br>
        <button onClick={customerUpdate}>Update your Account</button>
        </>
    )
}