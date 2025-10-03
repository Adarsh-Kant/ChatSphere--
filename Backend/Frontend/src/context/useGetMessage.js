// import React from "react";
// import useConversation from "../stateManage/useConversation.js";
// import axios from "axios";
// export default function useGetMessage(){
//     const [loading,setLoading]=useState(false);
//     const {messages,setMesaages,selectedConversation}=useConversation();
//     useEffect(()=>{
//         const getMessages=async()=>{
//             if(selectedConversation && selectedConversation._id){
//                 try{
//                 const response=await axios.get(
//                     // `http://localhost:5002/conversation/${selectedConversation._id}/messages`
//                      `http://localhost:5002/message/get/${selectedConversation._id}/messages`
//                 );
//                 setMessages(response.data);
//                 setLoading(false);

//             }catch(error){
//                 console.log("Error in useGetMessage: ",error);

//             }
//             }
//         }
//         getMessages();
//     },[selectedConversation,setMesaages]);
//     return {
        
//         messages,
//         loading
//     }
// }






// import { useState, useEffect } from "react";
// import useConversation from "../stateManage/useConversation.js";
// import axios from "axios";

// export default function useGetMessage(){
//     const [loading, setLoading] = useState(false);
//     const { messages, setMessages, selectedConversation } = useConversation();

//     useEffect(() => {
//         const getMessages = async () => {
//             if (selectedConversation && selectedConversation._id) {
//                 setLoading(true);
//                 try {
//                     // const response = await axios.get(
//                     //     `http://localhost:5002/message/get/${selectedConversation._id}/messages`
//                     // );
//                     const response = await axios.get(
//                         `http://localhost:5002/message/get/${selectedConversation._id}`
//                     );
//                     setMessages(response.data);
//                 } catch (error) {
//                     console.log("Error in useGetMessage: ", error);
//                 }
//                 setLoading(false);
//             }
//         };
//         getMessages();
//     }, [selectedConversation, setMessages]);

//     return {
//         messages,
//         loading
//     };
// }







// import { useState, useEffect } from "react";
// import useConversation from "../stateManage/useConversation.js";
// import axios from "axios";

// export default function useGetMessage(){
//     const [loading, setLoading] = useState(false);
//     const { messages, setMessages, selectedConversation } = useConversation();

//     useEffect(() => {
//         const getMessages = async () => {
//             if (selectedConversation && selectedConversation._id) {
//                 setLoading(true);
//                 try {
//                     const response = await axios.get(
//                         `http://localhost:5002/message/get/${selectedConversation._id}`,
//                         { withCredentials: true } // <-- Add this line
//                     );
//                     setMessages(response.data);
//                 } catch (error) {
//                     console.log("Error in useGetMessage: ", error);
//                 }
//                 setLoading(false);
//             }
//         };
//         getMessages();
//     }, [selectedConversation, setMessages]);

//     return {
//         messages,
//         loading
//     };
// }










// import { useState, useEffect } from "react";
// import useConversation from "../stateManage/useConversation.js";
// import axios from "axios";

// export default function useGetMessage(){
//     const [loading, setLoading] = useState(false);
//     const { messages, setMessages, selectedConversation } = useConversation();

//     useEffect(() => {
//         // Reset messages when conversation changes
//         setMessages([]);

//         const getMessages = async () => {
//             if (selectedConversation && selectedConversation._id) {
//                 setLoading(true);
//                 try {
//                     const response = await axios.get(
//                         `http://localhost:5002/message/get/${selectedConversation._id}`,
//                         { withCredentials: true }
//                     );
//                     setMessages(response.data);
//                 } catch (error) {
//                     console.log("Error in useGetMessage: ", error);
//                 }
//                 setLoading(false);
//             }
//         };
//         getMessages();
//     }, [selectedConversation, setMessages]);

//     return {
//         messages,
//         loading
//     };
// }













































































//before
// import React, { useState, useEffect } from "react";
// import useConversation from "../stateManage/useConversation.js";
// import axios from "axios";

// export default function useGetMessage(){
//     const [loading, setLoading] = useState(false);
//     const { messages, setMessages, selectedConversation } = useConversation();

//     useEffect(() => {
//         setMessages([]); // Clear messages when conversation changes

//         const getMessages = async () => {
//             if (selectedConversation && selectedConversation._id) {
//                 setLoading(true);
//                 try {
//                     const response = await axios.get(
//                         `http://localhost:5002/message/get/${selectedConversation._id}`,
//                         { withCredentials: true }
//                     );
//                     setMessages(
//                         Array.isArray(response.data)
//                             ? response.data
//                             : Array.isArray(response.data.messages)
//                                 ? response.data.messages
//                                 : []
//                     );
//                 } catch (error) {
//                     console.log("Error in useGetMessage: ", error);
//                     setMessages([]);
//                 }
//                 setLoading(false);
//             }
//         };
//         getMessages();
//     }, [selectedConversation, setMessages]);

//     return {
//         messages,
//         loading
//     };
// }

//after
// import React, { useState, useEffect } from "react";
// import useConversation from "../stateManage/useConversation.js";
// import axios from "axios";

// const useGetMessage=()=>{
//     const [loading, setLoading] = useState(false);
//     const { messages, setMessage, selectedConversation } = useConversation();

//     useEffect(() => {

//         const getMessages = async () => {
            
//                 setLoading(true);
//                 if (selectedConversation && selectedConversation._id) {
//                 try {
//                     const response = await axios.get(
//                         `http://localhost:5002/message/get/${selectedConversation._id}`,
//                         { withCredentials: true }
//                     );
//                     setMessage(response.data);
//                     setLoading(false);
//                 } catch (error) {
//                     console.log("Error in useGetMessage: ", error);
//                     setLoading(false);
//                 }
                
//             } 
//         };
//         getMessages();
//     }, [selectedConversation, setMessage]);

//     return {
//         messages,
//         loading
//     };
// }
// export default useGetMessage;



// //after after
import React, { useState, useEffect } from "react";
import useConversation from "../stateManage/useConversation.js";
import axios from "axios";

const useGetMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            if (selectedConversation && selectedConversation._id) {
                try {
                    const response = await axios.get(
                        `http://localhost:5002/message/get/${selectedConversation._id}`,
                        { withCredentials: true }
                    );
                    setMessages(response.data);
                } catch (error) {
                    console.log("Error in useGetMessage: ", error);
                }
            }
            setLoading(false);
        };
        getMessages();
    }, [selectedConversation, setMessages]);

    return {
        messages,
        loading
    };
};
export default useGetMessage;