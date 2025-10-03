// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



// function App() {
//   const [authUser, setAuthUser]= useAuth();
//   console.log(authUser);
//   return (

//     <>
//     <Routes>
//       <Route path="/" element={authUser?(<div className="flex h-screen">
//         <Logout />
//         <Left />
//         <Right />
//       </div>):(<Login></Login>)} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />

//     </Routes>

//       {/* <div className="flex h-screen">
//         <Logout />
//         <Left />
//         <Right />
//       </div> */}

//       {/* <Signup /> */}

//       <Login />
//     </>
//   );
// }
// export default App;




// function App() {
//   const [authUser, setAuthUser] = useAuth();
//   console.log(authUser);
//   return (
//     <>
//       {/* <Loading />  */}
//       <Routes>
//         <Route
//           path="/"
//           element={
//             authUser ? (
//               <div className="flex h-screen">
//                 <Logout />
//                 <Left /> 
//                 <Right />
              
//                 {/* <div className="drawer">
//                 <input id="my-drawer" type="checkbox" className="drawer-toggle" />
//                 <div className="drawer-content">
//                   {/* Page content here */}
//                   <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
//                 </div>
//                 <div className="drawer-side">
//                   <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
//                   <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
//                     {/* Sidebar content here */}
//                     <li><a>Sidebar Item 1</a></li>
//                     <li><a>Sidebar Item 2</a></li>
//                   </ul>
//                 </div>


//               </div>*}
                
//               </div> 
//             ) : (
//               // <Login />
//               <Navigate to={"/login"} />
//             )
//           }
//         />
//         <Route
//           path="/login"
//           element={authUser ? <Navigate to={"/"} /> : <Login />}
//         />
//         <Route
//           path="/signup"
//           element={authUser ? <Navigate to={"/"} /> : <Signup />}
//         />
//       </Routes>

//       <Toaster />
//     </>
//   );
// }
// export default App;













// function App() {
//   const [authUser] = useAuth();
//   const { selectedConversation, setSelectedConversation } = useConversation();
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 400);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 400);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             authUser ? (
//               <div className="flex h-screen w-full">
//                 <div className="hidden md:block">
//                   <Logout />
//                 </div>
//                 {/* Left panel: show on desktop or when no chat is selected on mobile */}
//                 <div className={
//                   isMobile
//                     ? selectedConversation
//                       ? "hidden"
//                       : "block w-full"
//                     : "block w-full md:w-[30%]"
//                 }>
//                   <Left />
//                 </div>
//                 {/* Right panel: show on desktop or when chat is selected on mobile */}
//                 <div className={
//                   isMobile
//                     ? selectedConversation
//                       ? "block w-full"
//                       : "hidden"
//                     : "block flex-1"
//                 }>
//                   <Right
//                     onBack={() => setSelectedConversation(null)}
//                     showBackButton={isMobile}
//                   />
//                 </div>
//               </div>
//             ) : (
//               <Navigate to={"/login"} />
//             )
//           }
//         />
//         <Route
//           path="/login"
//           element={authUser ? <Navigate to={"/"} /> : <Login />}
//         />
//         <Route
//           path="/signup"
//           element={authUser ? <Navigate to={"/"} /> : <Signup />}
//         />
//       </Routes>
//       <Toaster />
//     </>
//   );
// }
// export default App;
































import React from "react";
import Left from "./home/left/left";
import Right from "./home/right/right";
import Logout from "./home/left1/logout";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from "./context/AuthProvider";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from "./components/Loading";
import toast, { Toaster } from "react-hot-toast";
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      {/* <Loading />  */}
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex h-screen">
                <Logout />
                <Left /> 
                <Right />
              
                 


              
                
              </div> 
            ) : (
              // <Login />
              <Navigate to={"/login"} />
            )
          }
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to={"/"} /> : <Signup />}
        />
      </Routes>

      <Toaster />
    </>
  );
}
export default App;