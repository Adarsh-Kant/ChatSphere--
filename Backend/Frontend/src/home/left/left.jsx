import React  from "react";
import Search from "./search";
import Users from "./users";

export default function Left() {
    return (
        // <div className="w-[30%] bg-black text-white">
        <div className="w-[30%] bg-black text-white">
            <h1 className="px-8 mt-1 mb-1 font-bold text-3xl ">Chats</h1>
            <Search />
            <hr></hr>
            <Users/>
        </div>
    );
}






// import React from "react";
// import Search from "./search";
// import Users from "./users";

// export default function Left() {
//     return (
//         <div className="w-full md:w-[30%] bg-black text-white min-h-screen flex flex-col">
//             <h1 className="px-4 md:px-8 mt-2 mb-2 font-bold text-2xl md:text-3xl">Chats</h1>
//             <Search />
//             <hr className="border-gray-700" />
//             <Users />
//         </div>
//     );
// }