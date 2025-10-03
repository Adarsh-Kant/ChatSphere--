import React from "react";
import User from "./user";
import UserGetAllUsers from "../../context/userGetAllUsers";
export default function Users() {
    const [allUsers,loading]=UserGetAllUsers();
    console.log(allUsers);
    return (
        <div style={{maxHeight:"calc(82vh - 1vh)"}} className="my-2 flex-adarsh overflow-y-auto">
            
        {allUsers.map((user,index)=>(
            <User key={index} user={user}/>
        ))}

        </div>
    );
}






// import React from "react";
// import User from "./user";
// import UserGetAllUsers from "../../context/userGetAllUsers";
// export default function Users() {
//     const [allUsers, loading] = UserGetAllUsers();
//     return (
//         <div className="flex flex-col gap-1 overflow-y-auto px-2 py-2 max-h-[60vh] md:max-h-[82vh]">
//             {allUsers.map((user, index) => (
//                 <User key={index} user={user} />
//             ))}
//         </div>
//     );
// }