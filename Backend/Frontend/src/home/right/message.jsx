// import React from "react";
// export default function Message({message}) {
//     const authUser = JSON.parse(localStorage.getItem("messenger"))
//     const itsme=message.senderId===authUser._id;
//     const chatName=itsme?"chat-end":"chat-start";
//     const chatColor=itsme?"bg-blue-400":"";
//     return (
//         <div>
//             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', padding: '16px' }}>
//             <div
//                 className={`chat ${chatName} ${chatColor}`}
//                 style={{
//                     background: 'red',
//                     color: 'white',
//                     padding: '10px 16px',
//                     borderRadius: '16px',
//                     maxWidth: '70%',
//                     marginBottom: '8px',
//                 }}
//             >
//                 {message.message}
//             </div>
//             <div
//                 className="chat-start"
//                 style={{
//                     background: '#eee',
//                     color: '#222',
//                     padding: '10px 16px',
//                     borderRadius: '16px',
//                     maxWidth: '70%',
//                     alignSelf: 'flex-start',
//                 }}
//             >
//                 I will do what I must.
//             </div>
//             </div>
//         </div>
//     );
// }







































import React from "react";
export default function Message({ message }) {
    const authUser = JSON.parse(localStorage.getItem("messenger"));
    const itsme = message.senderId === authUser.user._id;
    const alignItems = itsme ? "flex-end" : "flex-start";
    // const bubbleBg = itsme ? "#820c0cff" : "aqua";
    const bubbleBg = itsme ? "#0ea5e9" : "#6d28d9";
    const bubbleColor = itsme ? "white" : "white";
    const createdAt=new Date(message.createdAt);
    const formattedTime=createdAt.toLocaleTimeString([],{
        hour:"2-digit",
        minute:"2-digit"
    })
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: alignItems,
                    padding: '16px'
                }}
            >
                <div
                    style={{
                        background: bubbleBg,
                        color: bubbleColor,
                        padding: '10px 16px',
                        borderRadius: '16px',
                        maxWidth: '70%',
                        marginBottom: '8px',
                        alignSelf: alignItems
                    }}
                >
                    {message.message}
                </div>
                <div>{formattedTime}</div>
            </div>
        </div>
    );
}














// import React from "react";
// export default function Message({ message }) {
//     const authUser = JSON.parse(localStorage.getItem("messenger"));
//     const itsme = message.senderId === authUser.user._id;
//     const align = itsme ? "justify-end" : "justify-start";
//     const bubbleBg = itsme ? "bg-blue-400" : "bg-[#800000]";
//     const bubbleColor = "text-white";
//     const createdAt = new Date(message.createdAt);
//     const formattedTime = createdAt.toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit"
//     });

//     return (
//         <div className={`flex ${align} w-full`}>
//             <div className={`rounded-2xl px-4 py-2 max-w-[75%] break-words ${bubbleBg} ${bubbleColor} mb-1`}>
//                 {message.message}
//                 <div className="text-xs text-right text-gray-200 mt-1">{formattedTime}</div>
//             </div>
//         </div>
//     );
// }








































































// import React from "react";
// export default function Message({ message }) {
//     const authUser = JSON.parse(localStorage.getItem("messenger"));
//     const itsme = message.senderId === authUser._id;
//     const chatName = itsme ? "chat-end" : "chat-start";
//     const chatColor = itsme ? "bg-blue-400" : "";
//     const alignItems = itsme ? "flex-end" : "flex-start";

//     return (
//         <div>
//             <div
//                 style={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: alignItems, // <-- dynamic alignment
//                     padding: '16px'
//                 }}
//             >
//                 <div
//                     className={`chat ${chatName} ${chatColor}`}
//                     style={{
//                         background: 'red',
//                         color: 'white',
//                         padding: '10px 16px',
//                         borderRadius: '16px',
//                         maxWidth: '70%',
//                         marginBottom: '8px',
//                     }}
//                 >
//                     {message.message}
//                 </div>
//             </div>
//         </div>
//     );
// }











// import React from "react";
// export default function Message({ message }) {
//     const authUser = JSON.parse(localStorage.getItem("messenger"));
//     const itsme = String(message.senderId) === String(authUser._id);
//     const alignItems = itsme ? "flex-end" : "flex-start";

//     return (
//         <div>
//             <div
//                 style={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: alignItems,
//                     padding: '16px'
//                 }}
//             >
//                 <div
//                     style={{
//                         background: 'red',
//                         color: 'white',
//                         padding: '10px 16px',
//                         borderRadius: '16px',
//                         maxWidth: '70%',
//                         marginBottom: '8px',
//                     }}
//                 >
//                     {message.message}
//                 </div>
//             </div>
//         </div>
//     );
// }