// import React, {useState} from "react";
// import useConversation from "../stateManage/useConversation.js";

// export default useSendMessage(){
//     const [loading, setLoading]=useState(false);
//     const {messages, setMessages, selectedConversation}=useConversation();
//     const sendMessages = async (message) => {
//                 if (selectedConversation && selectedConversation._id) {
//                     setLoading(true);
//                     try {
//                         const response = await axios.get(
//                             `http://localhost:5002/message/send/${selectedConversation._id}`,
//                             { withCredentials: true }
//                         );
//                         setMessages(
//                             Array.isArray(response.data)
//                                 ? response.data
//                                 : Array.isArray(response.data.messages)
//                                     ? response.data.messages
//                                     : []
//                         );
//                     } catch (error) {
//                         console.log("Error in sending Message: ", error);
//                         setMessages([]);
//                     }
//                     setLoading(false);
//                 }
//             };
//             sendMessages();
//     return(
//         <>
        
//         </>
//     )
// }




//before
// import React,{ useState } from "react";
// import axios from "axios";
// import useConversation from "../stateManage/useConversation.js";

// const useSendMessage=()=> {
//     const [loading, setLoading] = useState(false);
//     const { messages, setMessages, selectedConversation } = useConversation();

//     // This function will be called when you want to send a message
//     const sendMessage = async (message) => {
//         if (selectedConversation && selectedConversation._id) {
//             setLoading(true);
//             try {
//                 const response = await axios.post(
//                     `http://localhost:5002/message/send/${selectedConversation._id}`,
//                     { message }, // send message in body
//                     { withCredentials: true }
//                 );
//                 // Append the new message to the previous messages
//                 setMessages([...messages, response.data.newMessage]);
//             } catch (error) {
//                 console.log("Error in useSendMessage: ", error);
//             }
//             setLoading(false);
//         }
//     };

//     // Return the sendMessage function and loading state
//     return { loading, sendMessage };
// }




//after
// import React,{ useState } from "react";
// import axios from "axios";
// import useConversation from "../stateManage/useConversation.js";

// const useSendMessage=()=> {
//     const [loading, setLoading] = useState(false);
//     const { messages, setMessage, selectedConversation } = useConversation();

//     // This function will be called when you want to send a message
//     const sendMessages = async (message) => {
//         setLoading(true);
//         try {
//             const response = await axios.post(
//                 `http://localhost:5002/message/send/${selectedConversation._id}`,
//                 { message }, // send message in body
//                 { withCredentials: true }
//             );
//             // Append the new message to the previous messages
//             setMessage([...messages, response.data]);
//             setLoading(false); 
//         } catch (error) {
//             console.log("Error in useSendMessage: ", error);
//             setLoading(false);
//         }
            
//         }
//         return { loading, sendMessages };
//     };

//     // Return the sendMessage function and loading state
    

// export default useSendMessage;






//after after
// import React,{ useState } from "react";
// import axios from "axios";
// import useConversation from "../stateManage/useConversation.js";

// const useSendMessage=()=> {
//     const [loading, setLoading] = useState(false);
//     const { messages, setMessages, selectedConversation } = useConversation();

//     // This function will be called when you want to send a message
//     const sendMessages = async (message) => {
//         setLoading(true);
//         try {
//             const response = await axios.post(
//                 `http://localhost:5002/message/send/${selectedConversation._id}`,
//                 { message }, // send message in body
//                 { withCredentials: true }
//             );
//             // Append the new message to the previous messages
//             setMessages([...messages, response.data]);
//             setLoading(false); 
//         } catch (error) {
//             console.log("Error in useSendMessage: ", error);
//             setLoading(false);
//         }
//     };

//     return { loading, sendMessages };
// };

// export default useSendMessage;






// after after after
import React,{ useState } from "react";
import axios from "axios";
import useConversation from "../stateManage/useConversation.js";

const useSendMessage=()=> {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    // This function will be called when you want to send a message
    const sendMessages = async (message) => {
        setLoading(true);
        try {
            const response = await axios.post(
                `http://localhost:5002/message/send/${selectedConversation._id}`,
                { message }, // send message in body
                { withCredentials: true }
            );
            // Always treat messages as an array
            const safeMessages = Array.isArray(messages) ? messages : [];
            setMessages([...safeMessages, response.data]);
            setLoading(false); 
        } catch (error) {
            console.log("Error in useSendMessage: ", error);
            setLoading(false);
        }
    };

    return { loading, sendMessages };
};

export default useSendMessage;