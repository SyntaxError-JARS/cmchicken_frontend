import { useNavigate } from "react-router-dom";

export function AdminNavBar(){
    const navigate = useNavigate();
    
    return(
        <nav>
            <button onClick={() => navigate("/admin")}>Home</button>
            <button onClick={() => navigate("create-menu")}>Create Menu</button>
            <button onClick={() => navigate("delete-menu")}>Delete Menu</button>
    <button onClick={() => navigate("/")}>Logout</button>
    
        </nav>
    )
    
    }