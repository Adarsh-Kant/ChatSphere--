// import React,{useState} from "react";
// import { IoMdSend } from "react-icons/io";
// import useSendMessage from "../../context/useSendMessage.js"
// export default function Type() {
//     const {loading, sendMessages}= useSendMessage();
//     const [message, setMessage]=useState("");
//     const handleSubmit=async(e)=>{
//         e.preventDefault();
//         await sendMessages(message);
//         setMessage("")
//     }
//     return (
//         <>
//         <form action="" onSubmit={handleSubmit}>
//             <div className="flex space-x-2 text-center">
//             <div className="w-[93%] px-4">
//                 <input type="text" value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder="Type here" className="py-3 px-3 border border-gray-700 rounded-lg flex items-center grow outline-none bg-slate-800 w-[100%]" />
//             </div>
//             <button className="text-4xl"><IoMdSend /></button>
//             </div>
//         </form>
//         </>
        
//     );
// }




//before
// import React,{useState} from "react";
// import { IoMdSend } from "react-icons/io";
// import useSendMessage from "../../context/useSendMessage.js"
// export default function Type() {
//     const {loading, sendMessage}= useSendMessage();
//     const [message, setMessage]=useState("");
//     const handleSubmit=async(e)=>{
//         e.preventDefault();
//         await sendMessage(message);
//         setMessage("")
//     }
//     return (
//         <>
//         <form action="" onSubmit={handleSubmit}>
//             <div className="flex space-x-2 text-center">
//             <div className="w-[93%] px-4">
//                 <input type="text" value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder="Type here" className="py-3 px-3 border border-gray-700 rounded-lg flex items-center grow outline-none bg-slate-800 w-[100%]" />
//             </div>
//             <button className="text-4xl"><IoMdSend /></button>
//             </div>
//         </form>
//         </>
//     );
// }


//after
import React,{useState} from "react";
import { IoMdSend } from "react-icons/io";
import useSendMessage from "../../context/useSendMessage.js"
export default function Type() {
    const {loading, sendMessages}= useSendMessage();
    const [message, setMessage]=useState("");
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await sendMessages(message);
        setMessage("")
    }
    return (
        <>
        <form action="" onSubmit={handleSubmit}>
            <div className="flex space-x-2 text-center">
            <div className="w-[93%] px-4">
                <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Type here" className="py-3 px-3 border border-gray-700 rounded-lg flex items-center grow outline-none bg-slate-800 w-[100%]" />
            </div>
            <button className="text-4xl"><IoMdSend /></button>
            </div>
        </form>
        </>
    );
}








// import React, { useState } from "react";
// import { IoMdSend } from "react-icons/io";
// import useSendMessage from "../../context/useSendMessage.js";
// export default function Type() {
//     const { loading, sendMessage } = useSendMessage();
//     const [message, setMessage] = useState("");
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await sendMessage(message);
//         setMessage("");
//     };
//     return (
//         <form onSubmit={handleSubmit} className="flex gap-2 w-full">
//             <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 placeholder="Type here"
//                 className="flex-1 py-3 px-3 border border-gray-700 rounded-lg bg-slate-800 text-white outline-none"
//             />
//             <button className="text-3xl text-blue-500 flex items-center justify-center" disabled={loading}>
//                 <IoMdSend />
//             </button>
//         </form>
//     );
// }