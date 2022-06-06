
import CreateMenuItem from "../menu/CreateMenuItem";
import DeleteMenuItem from "../menu/DeleteMenu";
import UpdateMenu from "../menu/UpdateMenu";

export default function AdminDashboard(){
    return(
        <>
<h1>Admin</h1>
<CreateMenuItem />

<DeleteMenuItem />


<UpdateMenu/>
</>
    )
}