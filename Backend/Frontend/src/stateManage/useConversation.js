// import React from "react";
// export default function useConversation(){
//     return(
//         <>
//             <div>

//             </div>
//         </>
//     )
// }



import {create} from 'zustand';

const useConversation = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation)=>set({selectedConversation}),
    messages: [],
    setMessages:(messages)=>set({messages}),
}));
export default useConversation;