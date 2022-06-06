
import AddCreditCard from "../creditcard/AddCreditCard";
import DeleteCreditCard from "../creditcard/DeleteCreditCard";
import CreateOrder from "../order/CreateOrder";


export default function CustomerDashboard(){

    return(
        <>
        {/* <CustomerNavBar /> */}
        <h1>Hello customer</h1>
            <AddCreditCard />
            <DeleteCreditCard />
            <CreateOrder />
        </>
    )
}