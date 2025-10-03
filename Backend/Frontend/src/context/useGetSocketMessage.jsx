// import React from "react";
// import {useSocketContext} from "./SocketContext.jsx"
// import useConversation from "../stateManage/useConversation.js";
// import { useEffect } from "react";
// export default function useGetSocketMessage(){
//     const {socket}=useSocketContext()
//     const {message,setMessages}=useConversation();
//     useEffect(()=>{
//         socket.on("newMessage",(newMessage)=>{
            
//             setMessages(...prevMessages,newMessage)
//         })
//         return()=>{
//             socket.off("newMessage");
//         }
//     },[socket,message,setMessages ])
    
// }







// import { useEffect } from "react";
// import { useSocketContext } from "./SocketContext.jsx";
// import useConversation from "../stateManage/useConversation.js";

// export default function useGetSocketMessage() {
//     const { socket } = useSocketContext();
//     const { setMessages } = useConversation();

//     useEffect(() => {
//         if (!socket) return;
//         socket.on("newMessage", (newMessage) => {
//             setMessages(prevMessages => [...prevMessages, newMessage]);
//         });
//         return () => {
//             socket.off("newMessage");
//         };
//     }, [socket, setMessages]);
// }





//before
// import { useEffect } from "react";
// import { useSocketContext } from "./SocketContext.jsx";
// import useConversation from "../stateManage/useConversation.js";

// export default function useGetSocketMessage() {
//     const { socket } = useSocketContext();
//     const { selectedConversation, setMessages } = useConversation();

//     useEffect(() => {
//         if (!socket) return;
//         const handler = (newMessage) => {
//             // Only update if the message is for the selected conversation
//             if (
//                 selectedConversation &&
//                 (newMessage.senderId === selectedConversation._id ||
//                  newMessage.receiverId === selectedConversation._id)
//             ) {
//                 setMessages(prevMessages => Array.isArray(prevMessages) ? [...prevMessages, newMessage] : [newMessage]);
//             }
//         };
//         socket.on("newMessage", handler);
//         return () => {
//             socket.off("newMessage", handler);
//         };
//     }, [socket, selectedConversation, setMessages]);
// }







//after
// import React, { useEffect } from "react";
// import { useSocketContext } from "./SocketContext.jsx";
// import useConversation from "../stateManage/useConversation.js";

// const useGetSocketMessage=()=> {
//     const { socket } = useSocketContext();
//     const { messages, setMessage } = useConversation();

//     useEffect(() => {
//         socket.on("newMessage", (newMessage) => {
//             setMessage([...messages, newMessage]);
//         });
//         return () => {
//             socket.off("newMessage");
//         };
//     }, [socket, messages, setMessage]);
// }
// export default useGetSocketMessage;




//after after
// import React, { useEffect } from "react";
// import { useSocketContext } from "./SocketContext.jsx";
// import useConversation from "../stateManage/useConversation.js";

// const useGetSocketMessage = () => {
//     const { socket } = useSocketContext();
//     const { messages, setMessages } = useConversation();

//     useEffect(() => {
//         if (!socket) return;
//         const handler = (newMessage) => {
//             // setMessages(prevMessages => [...prevMessages, newMessage]);
//             //after after
//             setMessages(prev => Array.isArray(prev) ? [...prev, newMessage] : [newMessage]);
//         };
//         socket.on("newMessage", handler);
//         return () => {
//             socket.off("newMessage", handler);
//         };
//     }, [socket, setMessages]);
// };

// export default useGetSocketMessage;


// after after after
import React, { useEffect } from "react";
import { useSocketContext } from "./SocketContext.jsx";
import useConversation from "../stateManage/useConversation.js";

const useGetSocketMessage = () => {
    const { socket } = useSocketContext();
    const { setMessages } = useConversation();

    useEffect(() => {
        if (!socket) return;
        const handler = (newMessage) => {
            setMessages(prevMessages =>
                Array.isArray(prevMessages)
                    ? [...prevMessages, newMessage]
                    : [newMessage]
            );
        };
        socket.on("newMessage", handler);
        return () => {
            socket.off("newMessage", handler);
        };
    }, [socket, setMessages]);
};

export default useGetSocketMessage;