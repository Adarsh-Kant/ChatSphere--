// import React from 'react';

// // export default function Loading(){
// //     return(
// //         <>
// //             <div className="flex h-screen items-center justify-center bg-slate-600">
// //                 <div className="flex w-52 flex-col gap-4">
// //                     <div className="skeleton h-32 w-full"></div>
// //                     <div className="skeleton h-4 w-28"></div>
// //                     <div className="skeleton h-4 w-full"></div>
// //                     <div className="skeleton h-4 w-full"></div>
// //                 </div>
// //             </div>
// //         </>
// //     )

// // }



// // export default function Loading(){
// //     return(
// //         <div style={{
// //             display: "flex",
// //             height: "100vh",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             background: "#334155"
// //         }}>
// //             <div style={{
// //                 width: 60,
// //                 height: 60,
// //                 border: "6px solid #fff",
// //                 borderTop: "6px solid #888",
// //                 borderRadius: "50%",
// //                 animation: "spin 1s linear infinite"
// //             }} />
// //             <style>
// //                 {`@keyframes spin { 100% { transform: rotate(360deg); } }`}
// //             </style>
// //         </div>
// //     )
// // }




// export default function Loading(){
//     return(
//         <>
//             <div>
//                 <div className="flex w-52 flex-col gap-4">
//                     <div className="skeleton h-32 w-full"></div>
//                     <div className="skeleton h-4 w-28"></div>
//                     <div className="skeleton h-4 w-full"></div>
//                     <div className="skeleton h-4 w-full"></div>
//                 </div>
//             </div>
//         </>
//     )

// }












import React from 'react';

export default function Loading() {
    return (
        <div className="custom-loading-bg">
            <div className="custom-loading-box">
                <div className="custom-skeleton custom-skeleton-large"></div>
                <div className="custom-skeleton custom-skeleton-small"></div>
                <div className="custom-skeleton custom-skeleton-medium"></div>
                <div className="custom-skeleton custom-skeleton-medium"></div>
            </div>
            <style>{`
                .custom-loading-bg {
                    display: flex;
                    height: 100vh;
                    align-items: center;
                    justify-content: center;
                    background: #334155;
                }
                .custom-loading-box {
                    width: 208px;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .custom-skeleton {
                    background: linear-gradient(90deg, #475569 25%, #64748b 50%, #475569 75%);
                    background-size: 200% 100%;
                    animation: skeleton-loading 1.2s infinite linear;
                    border-radius: 8px;
                }
                .custom-skeleton-large {
                    height: 128px;
                    width: 100%;
                }
                .custom-skeleton-small {
                    height: 16px;
                    width: 112px;
                }
                .custom-skeleton-medium {
                    height: 16px;
                    width: 100%;
                }
                @keyframes skeleton-loading {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>
        </div>
    );
}