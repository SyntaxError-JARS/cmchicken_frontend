
import AddCreditCard from "../creditcard/AddCreditCard";
import DeleteCreditCard from "../creditcard/DeleteCreditCard";
import UpdateCreditCard from "../creditcard/UpdateCreditCard";
import CreateOrder from "../order/CreateOrder";
import ViewOrder from "../order/ViewOrder";
import CustomerDelete from "./CustomerDelete";
import CustomerUpdate from "./CustomerUpdate";


export default function CustomerDashboard(){

    return(
        <>
        {/* <CustomerNavBar /> */}
        <h1>Hello customer</h1>
            <AddCreditCard />
            <UpdateCreditCard />
            <DeleteCreditCard />
            <CreateOrder />
            <br></br>
            <br></br>
            <ViewOrder />
            <br></br>
            <br></br>
            <CustomerDelete />
            <br></br>
            <br></br>
            <CustomerUpdate />



        </>
    )
}