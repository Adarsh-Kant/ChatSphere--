// import React from 'react';
// import Message from './message';
// import useGetMessage from '../../context/useGetMessage.js';
// import Loading from '../../components/Loading.jsx';
// import { useRef, useEffect } from 'react';
// import useGetSocketMessage from '../../context/useGetSocketMessage.jsx';
// export default function Messages() {
//     const {messages,loading}=useGetMessage();
//     useGetSocketMessage()
//     console.log("Messages in Messages.jsx: ",messages);
//     const lastMessageRef= useRef()
//     useEffect(()=>{
//         setTimeout(()=>{
//             if(lastMessageRef.current){
//                 lastMessageRef.current.scrollIntoView({behavior:"smooth"})
//             }
//         },100)
//     },[messages])
//     return (
//         <>
//         {/* {loading ? (<Loading></Loading>):(messages.length>0 && messages.map((message)=>{
//             <div  key={message._id} ref={lastMessageRef}><Message message={message}/></div>
            
//         }))} */}

//         {loading ? (
//     <Loading />
// ) : (
//     messages.length > 0 && messages.map((message) => (
//         <div key={message._id} ref={lastMessageRef}>
//             <Message message={message} />
//         </div>
//     ))
// )}


//         <div className="" style={{minHeight: 'calc(92vh - 10.5vh)'}}>
//             {!loading && messages.length === 0 && (
//             <div>
//                 <p className='text-center mt-[23%] font-bold text-4xl'>Say Hi!</p>
//             </div>
//             )}
//         </div>
//         </>
//     );
// }





//before
// import React, { useRef, useEffect } from 'react';
// import Message from './message';
// import useGetMessage from '../../context/useGetMessage.js';
// import Loading from '../../components/Loading.jsx';
// import useGetSocketMessage from '../../context/useGetSocketMessage.jsx';

// export default function Messages() {
//     const { messages, loading } = useGetMessage();
//     useGetSocketMessage();
//     const lastMessageRef = useRef();

//     // Ensure messages is always an array
//     const safeMessages = Array.isArray(messages) ? messages : [];

//     useEffect(() => {
//         setTimeout(() => {
//             if (lastMessageRef.current) {
//                 lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
//             }
//         }, 100);
//     }, [safeMessages]);

//     return (
//         <div className="flex flex-col gap-2 pb-4 flex-1">
//             {loading ? (
//                 <Loading />
//             ) : (
//                 safeMessages.length > 0 &&
//                 safeMessages.map((message, idx) => (
//                     <div
//                         key={message._id}
//                         ref={idx === safeMessages.length - 1 ? lastMessageRef : null}
//                     >
//                         <Message message={message} />
//                     </div>
//                 ))
//             )}
//             {!loading && safeMessages.length === 0 && (
//                 <div className="flex flex-1 items-center justify-center min-h-[60vh]">
//                     <p className='text-center font-bold text-2xl md:text-4xl'>Say Hi!</p>
//                 </div>
//             )}
//         </div>
//     );
// }

//after
// import React, { useRef, useEffect } from 'react';
// import Message from './message';
// import useGetMessage from '../../context/useGetMessage.js';
// import Loading from '../../components/Loading.jsx';
// import useGetSocketMessage from '../../context/useGetSocketMessage.jsx';

// export default function Messages() {
//     const { messages, loading } = useGetMessage();
//     useGetSocketMessage();
//     const lastMessageRef = useRef();

//     useEffect(() => {
//         setTimeout(() => {
//             if (lastMessageRef.current) {
//                 lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
//             }
//         }, 100);
//     }, [messages]);

//     return (
//         <div className="flex flex-col gap-2 pb-4 flex-1">
//             {loading ? (
//                 <Loading />
//             ) : (
//                 messages.length > 0 &&
//                 messages.map((message) => (
//                     <div
//                         key={message._id}
//                         ref={lastMessageRef}
//                     >
//                         <Message message={message} />
//                     </div>
//                 ))
//             )}
//             {!loading && messages.length === 0 && (
//                 <div className="flex flex-1 items-center justify-center min-h-[60vh]">
//                     <p className='text-center font-bold text-2xl md:text-4xl'>Say Hi!</p>
//                 </div>
//             )}
//         </div>
//     );
// }


//after after
import React, { useRef, useEffect } from 'react';
import Message from './message';
import useGetMessage from '../../context/useGetMessage.js';
import Loading from '../../components/Loading.jsx';
import useGetSocketMessage from '../../context/useGetSocketMessage.jsx';

export default function Messages() {
    const { messages, loading } = useGetMessage();
    useGetSocketMessage();
    const lastMessageRef = useRef();

    // Always treat messages as an array
    const safeMessages = Array.isArray(messages) ? messages : [];

    useEffect(() => {
        setTimeout(() => {
            if (lastMessageRef.current) {
                lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    }, [safeMessages]);

    return (
        <div className="flex flex-col gap-2 pb-4 flex-1">
            {loading ? (
                <Loading />
            ) : (
                safeMessages.length > 0 &&
                safeMessages.map((message, idx) => (
                    <div
                        key={message._id}
                        ref={idx === safeMessages.length - 1 ? lastMessageRef : null}
                    >
                        <Message message={message} />
                    </div>
                ))
            )}
            {!loading && safeMessages.length === 0 && (
                <div className="flex flex-1 items-center justify-center min-h-[60vh]">
                    <p className='text-center font-bold text-2xl md:text-4xl'>Say Hi!</p>
                </div>
            )}
        </div>
    );
}








// // import React from 'react';
// // import Message from './message';
// // import useGetMessage from '../../context/useGetMessage.js';
// // import Loading from '../../components/Loading.jsx';
// // import { useRef, useEffect } from 'react';
// // import useGetSocketMessage from '../../context/useGetSocketMessage.jsx';

// // export default function Messages() {
// //     const { messages, loading } = useGetMessage();
// //     useGetSocketMessage();
// //     const lastMessageRef = useRef();

// //     useEffect(() => {
// //         setTimeout(() => {
// //             if (lastMessageRef.current) {
// //                 lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
// //             }
// //         }, 100);
// //     }, [messages]);

// //     return (
// //         <div className="flex flex-col gap-2 pb-4">
// //             {loading ? (
// //                 <Loading />
// //             ) : (
// //                 messages.length > 0 && messages.map((message, idx) => (
// //                     <div key={message._id} ref={idx === messages.length - 1 ? lastMessageRef : null}>
// //                         <Message message={message} />
// //                     </div>
// //                 ))
// //             )}
// //             {!loading && messages.length === 0 && (
// //                 <div className="flex flex-1 items-center justify-center min-h-[60vh]">
// //                     <p className='text-center font-bold text-2xl md:text-4xl'>Say Hi!</p>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // }









































// import React, { useRef, useEffect } from 'react';
// import Message from './message';
// import useGetMessage from '../../context/useGetMessage.js';
// import Loading from '../../components/Loading.jsx';
// import useGetSocketMessage from '../../context/useGetSocketMessage.jsx';

// export default function Messages() {
//     const { messages, loading } = useGetMessage();
//     useGetSocketMessage();
//     const lastMessageRef = useRef();

//     useEffect(() => {
//         setTimeout(() => {
//             if (lastMessageRef.current) {
//                 lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
//             }
//         }, 100);
//     }, [messages]);

//     return (
//         <div className="flex flex-col gap-2 pb-4 flex-1">
//             {loading ? (
//                 <Loading />
//             ) : (
//                 messages.length > 0 &&
//                 messages.map((message, idx) => (
//                     <div
//                         key={message._id}
//                         ref={idx === messages.length - 1 ? lastMessageRef : null}
//                     >
//                         <Message message={message} />
//                     </div>
//                 ))
//             )}
//             {!loading && messages.length === 0 && (
//                 <div className="flex flex-1 items-center justify-center min-h-[60vh]">
//                     <p className='text-center font-bold text-2xl md:text-4xl'>Say Hi!</p>
//                 </div>
//             )}
//         </div>
//     );
// } 