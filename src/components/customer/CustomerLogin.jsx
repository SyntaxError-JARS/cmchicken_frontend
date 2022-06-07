import axios from "axios";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";

export default function CustomerLogIn() {

    const usernameInput = useRef();
    const cpasswordInput = useRef();
    const [user, setUser] = useContext(userContext)
    const navigate = useNavigate();
    const url = "http://localhost:8080/cmChicken"

    async function login() {
        
        const customer = {
            username: usernameInput.current.value,
            cpassword: cpasswordInput.current.value,
        };

        if (customer.cpassword === "admin") {
            navigate("/admin");
        } else {
            try {
                const response = await axios.post(`${url}/auth`, customer);
                console.log(response.data);
                navigate("/customer");
            } catch (error) {
                console.error(error.response.data);
                alert(error.response.data);
            }
        }
    }


    return(
    <>
            <h4>Welcome, please log in below.</h4>
            <input placeholder="Enter username" ref={usernameInput}></input>
            <input type="password" placeholder="Enter password" ref={cpasswordInput}></input>
            <button onClick={login}>Login</button>
    </>
    )
}