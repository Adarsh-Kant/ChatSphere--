// import { useEffect } from "react";
// import { useState } from "react";
// import { createContext } from "react";
// import  io  from "socket.io-client";
// import { useAuth } from "./AuthProvider";
// const socketContext = createContext();

// export const useSocketContext=()=>{
//     return useContext(socketContext)
// }


// export const SocketProvider = ({ children }) => {
//   const [socket, setSocket]=useState(null);
//   const [authUser]=useAuth();
//   const [onlineUsers,setOnlineUsers]=useState([])
//   useEffect(() => {
//     if (authUser) {
//       const newSocket = io("http://localhost:5002/", {
//         query: { userId: authUser.user._id },
//       });
//       setSocket(newSocket);
//       socket.on("getOnline",(users)=>{
//         setOnlineUsers(users)
//         console.log("Socket Disconnected");
//       })
//       return () => socket.close();
//     }else{
//         if(socket){
//             socket.close();
//             setSocket(null)
//         }
//     }
//   }, [authUser]);
//     return (
//         <socketContext.Provider value={{socket,onlineUsers}}>{children}</socketContext.Provider>
//     );
// };
// export default socketContext;












import { useEffect, useState, useContext, createContext } from "react";
import io from "socket.io-client";
import { useAuth } from "./AuthProvider";
const socketContext = createContext();

// export const useSocketContext = () => useContext(socketContext);before
//after
export const useSocketContext = () => {
  return useContext(socketContext);
}

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [authUser] = useAuth();
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    if (authUser) {
      const socket = io("https://chatsphere-3-qek7.onrender.com", {
        query: { userId: authUser.user._id },
      });
      setSocket(socket);
      socket.on("getOnline", (users) => {
        setOnlineUsers(users);
      });
      
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
    // eslint-disable-next-line
  }, [authUser]);

  return (
    <socketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </socketContext.Provider>
  );
};
export default socketContext;
