import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";
import AddCreditCard from "./components/creditcard/AddCreditCard";
import DeleteCreditCard from "./components/creditcard/DeleteCreditCard";
import UpdateCreditCard from "./components/creditcard/UpdateCreditCard.jsx";
import CustomerDashboard from "./components/customer/CustomerDashboard.jsx";
import CustomerDelete from "./components/customer/CustomerDelete.jsx";
import CustomerLogIn from "./components/customer/CustomerLogin";
import CustomerRegister from "./components/customer/CustomerRegister.jsx";
import CustomerUpdate from "./components/customer/CustomerUpdate.jsx";
import CreateMenuItem from "./components/menu/CreateMenuItem";
import DeleteMenuItem from "./components/menu/DeleteMenu";
import MenuItem from "./components/menu/MenuItem";
import UpdateMenu from "./components/menu/UpdateMenu.jsx";
import NavBar from "./components/NavBar";
import CreateOrder from "./components/order/CreateOrder.jsx";
import ViewOrder from "./components/order/ViewOrder.jsx";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
         <Routes>
           <Route exact path=""element={<Welcome/>}/>
            <Route path="view-menu"element={<MenuItem/>}/>
            <Route path="create-menu"element={<CreateMenuItem/>}/>
            <Route path="add-card" element={<AddCreditCard />} />
            <Route path="delete-card" element={<DeleteCreditCard />} />
            <Route path="login" element={<CustomerLogIn />} />
            <Route path="delete-menu" element={<DeleteMenuItem />} />
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="update-card"element={<UpdateCreditCard />} />
            <Route path="create-order"element={<CreateOrder />} />
            <Route path="update-menu"element={<UpdateMenu />} />
            <Route path="register" element={<CustomerRegister/>} />
            <Route path="customer" element={<CustomerDashboard />} />
            <Route path="view-order"element={<ViewOrder />} />
            <Route path="create-order"element={<CreateOrder/>}/>
            <Route path="update-card" element={<UpdateCreditCard />} />
            <Route path="delete-account" element={<CustomerDelete />} />
            <Route path="update-account" element={<CustomerUpdate />} />





         </Routes>
        
        
    </BrowserRouter>    
    </>
  );
}

export default App;
