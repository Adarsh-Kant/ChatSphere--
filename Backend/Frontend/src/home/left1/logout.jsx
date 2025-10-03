// import React  from "react";
// import { FiLogOut } from "react-icons/fi"; 
// import axios from "axios";
// import Cookies from "js-cookie";
// export default function Logout() {
//     const [loading,setLoading]=useState(false);
//     const handleLogout = async ()=>{
//         setLoading(true);
//         try{
//             const res=await axios.post("http://localhost:5002/user/logout", { withCredentials: true })
//             localStorage.removeItem("messenger")
//             Cookies.remove("token");
//             setLoading(false);
//             alert("Logout Successfully");
//         }catch(error){
//             console.log(error)
//         }
//     }
//     return (
//         <div className="w-[4%] bg-slate-950 text-white flex flex-col justify-end">
//             <div className="p-1 align-bottom">
//                 <button>
//                     <FiLogOut className="text-5xl p-2 hover:bg-gray-600 rounded-lg" onClick={handleLogout}/>
//                     {/* <IoIosSearch></IoIosSearch> */}
//                 </button>
//             </div>
//         </div>
//     )
// }





//before
// import React, { useState } from "react";
// import { FiLogOut } from "react-icons/fi"; 
// import axios from "axios";
// import Cookies from "js-cookie";
// import { useAuth } from "../../context/AuthProvider"; // If you use context
// import toast from "react-hot-toast";

// export default function Logout() {
//     const [loading, setLoading] = useState(false);
//     const [, setAuthUser] = useAuth ? useAuth() : [null, () => {}]; // Optional: update auth state

//     const handleLogout = async () => {
//         setLoading(true);
//         try {
//             await axios.post("http://localhost:5002/user/logout", {}, { withCredentials: true });
//             localStorage.removeItem("messenger");
//             Cookies.remove("token");
//             setAuthUser && setAuthUser(undefined); // Optional: update auth state
//             setLoading(false);
//             toast.success("Logout Successfully");
//             // Optionally redirect to login page: 
//             // window.location.href = "/login";
//         } catch (error) {
//             setLoading(false);
//             console.log(error);
//             toast.error("Error during logout. Please try again.");
//         }
//     };

//     return (
//         <div className="w-[4%] bg-slate-950 text-white flex flex-col justify-end">
//             <div className="p-1 align-bottom">
//                 <button disabled={loading} onClick={handleLogout}>
//                     <FiLogOut className="text-5xl p-2 hover:bg-gray-800 rounded-lg" />
//                 </button>
//             </div>
//         </div>
//     );
// }


//after
import React, { useState } from "react";
import { FiLogOut } from "react-icons/fi"; 
import axios from "axios";
import Cookies from "js-cookie";
import { useAuth } from "../../context/AuthProvider"; // If you use context
import toast from "react-hot-toast";

export default function Logout() {
    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        setLoading(true);
        try {
            const res=await axios.post("http://localhost:5002/user/logout", {}, { withCredentials: true });
            localStorage.removeItem("messenger");
            Cookies.remove("token");
            setLoading(false);
            toast.success("Logout Successfully");
            window.location.reload();
        } catch (error) {
            console.log(error);
            toast.error("Error during logout. Please try again.");
        }
    };

    return (
        <div className="w-[4%] bg-slate-950 text-white flex flex-col justify-end">
            <div className="p-1 align-bottom">
                <button >
                    <FiLogOut className="text-5xl p-2 hover:bg-gray-800 rounded-lg" onClick={handleLogout}/>
                </button>
            </div>
        </div>
    );
}








// import React, { useState } from "react";
// import { FiLogOut } from "react-icons/fi"; 
// import axios from "axios";
// import Cookies from "js-cookie";
// import { useAuth } from "../../context/AuthProvider";
// import toast from "react-hot-toast";

// export default function Logout() {
//     const [loading, setLoading] = useState(false);
//     const [, setAuthUser] = useAuth ? useAuth() : [null, () => {}];

//     const handleLogout = async () => {
//         setLoading(true);
//         try {
//             await axios.post("http://localhost:5002/user/logout", {}, { withCredentials: true });
//             localStorage.removeItem("messenger");
//             Cookies.remove("token");
//             setAuthUser && setAuthUser(undefined);
//             setLoading(false);
//             toast.success("Logout Successfully");
//         } catch (error) {
//             setLoading(false);
//             console.log(error);
//             toast.error("Error during logout. Please try again.");
//         }
//     };

//     return (
//         <div className="w-full md:w-[5%] bg-slate-950 text-white flex md:flex-col flex-row items-center justify-center md:justify-end py-2 md:py-0">
//             <button
//                 disabled={loading}
//                 onClick={handleLogout}
//                 className="focus:outline-none"
//                 aria-label="Logout"
//             >
//                 <FiLogOut className="text-4xl md:text-5xl p-2 hover:bg-gray-800 rounded-lg transition-colors" />
//             </button>
//         </div>
//     );
// }