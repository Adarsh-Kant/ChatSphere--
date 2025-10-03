// import React  from "react";
// import Chatuser from "./chatuser";
// import Messages from "./messages";
// import Type from "./type";
// import useConversation from "../../stateManage/useConversation.js"
// import { useAuth } from "../../context/AuthProvider.jsx";
// import { useEffect } from "react";
// export default function Right() {
//     const {selectedConversation,setSelectedConversation}=useConversation();
//     useEffect(()=>{
//         return setSelectedConversation(null);

//     },[selectedConversation])
//     return (
//         <div className="w-full bg-slate-950 text-white">
//         <div>
//             {!selectedConversation ? (<Nochat></Nochat>):(<>
//             <Chatuser />
//             <div className="my-2 flex-adarsh overflow-y-auto" style={{maxHeight: 'calc(89vh - 10.5vh)'}}>
//                 <Messages />
//             </div>
//             <Type />
//             </>
//         )}
//         </div>
//         </div>
//     );
// }

// const Nochat = ()=>{
//     const [authUser]=useAuth();
//     return(
//         <>
//         <div className="flex h-screen items-center justify-center">
//             {/* <h1 className="text-center font-semibold text-xl">No conversation selected
//             <br></br>
//             Select a conversation to start the chat</h1>
//             */}

//             <h1 className="text-center font-semibold text-3xl">Select a chat to start messaging</h1>
//             {/* {authUser.name && <Nochat />} */}
//         </div>
//         </>
//     )
// }





//before
// import React from "react";
// import Chatuser from "./chatuser";
// import Messages from "./messages";
// import Type from "./type";
// import useConversation from "../../stateManage/useConversation.js";
// import { useAuth } from "../../context/AuthProvider.jsx";

// export default function Right() {
//     const { selectedConversation } = useConversation();

//     return (
//         <div className="w-full bg-slate-950 text-white">
//             <div>
//                 {!selectedConversation ? (
//                     <Nochat />
//                 ) : (
//                     <>
//                         <Chatuser />
//                         <div className="my-2 flex-adarsh overflow-y-auto" style={{ maxHeight: 'calc(89vh - 10.5vh)' }}>
//                             <Messages />
//                         </div>
//                         <Type />
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// }

// const Nochat = () => {
//     const [authUser] = useAuth();
//     return (
//         <div className="flex h-screen items-center justify-center">
//             <h1 className="text-center font-semibold text-3xl">Welcome <span>{authUser.user.name}</span><br></br> Select a chat to start messaging</h1>
//         </div> 
//     );
// };

//after
// import React from "react";
// import Chatuser from "./chatuser";
// import Messages from "./messages";
// import Type from "./type";
// import useConversation from "../../stateManage/useConversation.js";
// import { useAuth } from "../../context/AuthProvider.jsx";
// import { useEffect } from "react";

// export default function Right() {
//     const { selectedConversation, setSelectedConversation } = useConversation();
//     useEffect(() => {
//         return setSelectedConversation(null);
//     }, [selectedConversation]);

//     return (
//         <div className="w-full bg-slate-900 text-white">
//             <div>
//                 {!selectedConversation ? (
//                     <Nochat />
//                 ) : (
//                     <>
//                         <Chatuser />
//                         <div className="my-2 flex-adarsh overflow-y-auto" style={{ maxHeight: 'calc(89vh - 10.5vh)' }}>
//                             <Messages />
//                         </div>
//                         <Type />
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// }

// const Nochat = () => {
//     const [authUser] = useAuth();
//     return (
//         <div className="flex h-screen items-center justify-center">
//             <h1 className="text-center font-semibold text-3xl">Welcome <span>{authUser.user.name}</span><br></br> Select a chat to start messaging</h1>
//         </div> 
//     );
// };

//after after
// import React from "react";
// import Chatuser from "./chatuser";
// import Messages from "./messages";
// import Type from "./type";
// import useConversation from "../../stateManage/useConversation.js";
// import { useAuth } from "../../context/AuthProvider.jsx";

// export default function Right() {
//     const { selectedConversation } = useConversation();

//     return (
//         <div className="w-full bg-slate-900 text-white">
//             <div>
//                 {!selectedConversation ? (
//                     <Nochat />
//                 ) : (
//                     <>
//                         <Chatuser />
//                         <div className="my-2 flex-adarsh overflow-y-auto" style={{ maxHeight: 'calc(89vh - 10.5vh)' }}>
//                             <Messages />
//                         </div>
//                         <Type />
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// }

// const Nochat = () => {
//     const [authUser] = useAuth();
//     return (
//         <div className="flex h-screen items-center justify-center">
//             <h1 className="text-center font-semibold text-3xl">Welcome <span>{authUser.user.name}</span><br /> Select a chat to start messaging</h1>
//         </div> 
//     );
// };



//after after after
import React from "react";
import Chatuser from "./chatuser";
import Messages from "./messages";
import Type from "./type";
import useConversation from "../../stateManage/useConversation.js";
import { useAuth } from "../../context/AuthProvider.jsx";

export default function Right() {
    const { selectedConversation } = useConversation();

    return (
        <div className="w-full bg-slate-900 text-white h-screen flex flex-col">
            {!selectedConversation ? (
                <Nochat />
            ) : (
                <>
                    <Chatuser />
                    <div className="flex-1 overflow-y-auto my-2" style={{ maxHeight: 'calc(89vh - 10.5vh)' }}>
                        <Messages />
                    </div>
                    <div className="p-2 border-t border-gray-800 bg-slate-900">
                        <Type />
                    </div>
                </>
            )}
        </div>
    );
}

const Nochat = () => {
    const [authUser] = useAuth();
    return (
        <div className="flex flex-1 items-center justify-center min-h-[60vh]">
            <h1 className="text-center font-semibold text-3xl">
                Welcome <span>{authUser.user.name}</span>
                <br />
                Select a chat to start messaging
            </h1>
        </div>
    );
};








// import React from "react";
// import Chatuser from "./chatuser";
// import Messages from "./messages";
// import Type from "./type";
// import useConversation from "../../stateManage/useConversation.js";
// import { useAuth } from "../../context/AuthProvider.jsx";

// export default function Right() {
//     const { selectedConversation } = useConversation();

//     return (
//         <div className="w-full bg-slate-950 text-white flex flex-col h-[70vh] md:h-screen">
//             {!selectedConversation ? (
//                 <Nochat />
//             ) : (
//                 <>
//                     <Chatuser />
//                     <div className="flex-1 overflow-y-auto px-2 py-2">
//                         <Messages />
//                     </div>
//                     <div className="p-2 border-t border-gray-800 bg-slate-900">
//                         <Type />
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// }

// const Nochat = () => {
//     const [authUser] = useAuth();
//     return (
//         <div className="flex flex-1 items-center justify-center min-h-[60vh]">
//             <h1 className="text-center font-semibold text-xl md:text-3xl">
//                 Welcome <span>{authUser.user.name}</span>
//                 <br />
//                 Select a chat to start messaging
//             </h1>
//         </div>
//     );
// };