// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import axios from "axios";
// export default function UserGetAllUsers() {
//     const [allUsers, setAllUsers] =useState([]);
//     const [loading, setLoading] = useState([]);
//     useEffect(() => {
//         const getUsers=async()=>{
//             setLoading(true);
//             try{
//                 const tokener=Cookies.get("token");
//                 const response=await axios.get("http://localhost:5002/user/getUserProfile",{
//                     Credentials:"include",
//                     headers:{
//                         Authorization:`Bearer ${tokener}`,
//                     },
//                 })
//                 setAllUsers(response.data);
//                 setLoading(false);
//             }catch(error){
//                 console.log("Error fetching all users:", error);
//             }
//         }
//         getUsers();
//     },[]);
//     return [allUsers,loading];
// }







// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function UserGetAllUsers() {
//     const [allUsers, setAllUsers] = useState([]);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         const getUsers = async () => {
//             setLoading(true);
//             try {
//                 const response = await axios.get(
//                     "http://localhost:5002/user/getUserProfile",
//                     { withCredentials: true } // <-- correct way
//                 );
//                 setAllUsers(response.data);
//             } catch (error) {
//                 console.log("Error fetching all users:", error);
//             }
//             setLoading(false);
//         };
//         getUsers();
//     }, []);
//     return [allUsers, loading];
// }




//before
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function UserGetAllUsers() {
//     const [allUsers, setAllUsers] = useState([]);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         const getUsers = async () => {
//             setLoading(true);
//             try {
//                 const response = await axios.get(
//                     "http://localhost:5002/user/getUserProfile",
//                     { withCredentials: true }
//                 );
//                 console.log("API response:", response.data);
//                 // If response.data is { users: [...] }
//                 if (Array.isArray(response.data)) {
//                     setAllUsers(response.data);
//                 } else if (Array.isArray(response.data.users)) {
//                     setAllUsers(response.data.users);
//                 } else {
//                     setAllUsers([]);
//                 }
//             } catch (error) {
//                 console.log("Error fetching all users:", error);
//                 setAllUsers([]);
//             }
//             setLoading(false);
//         };
//         getUsers();
//     }, []);
//     return [allUsers, loading];
// }








//after
// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import axios from "axios";

// export default function UserGetAllUsers() {
//     const [allUsers, setAllUsers] = useState([]);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         const getUsers = async () => {
//             setLoading(true);
//             try {
//                 const tokener = Cookies.get("token");
//                 // const response = await axios.get(
//                 //     "http://localhost:5002/user/getUserProfile",
//                 //     { withCredentials: true }
//                 // );
//                 const response = await axios.get(
//                     "http://localhost:5002/user/getUserProfile",
//                     {
//                         headers: {
//                             Authorization: `Bearer ${tokener}`,
//                         },
//                         withCredentials: true,
//                     }
//                 );
//                 setAllUsers(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.log("Error fetching all users:", error);
//             }
//         };
//         getUsers();
//     }, []);
//     return [allUsers, loading];
// }




//after after
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserGetAllUsers() {
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    "http://localhost:5002/user/getUserProfile",
                    { withCredentials: true }
                );
                setAllUsers(response.data);
            } catch (error) {
                console.log("Error fetching all users:", error);
            }
            setLoading(false);
        };
        getUsers();
    }, []);
    return [allUsers, loading];
}