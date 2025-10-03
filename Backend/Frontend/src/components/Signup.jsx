import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
export default function Signup() {
  const [authUser, setAuthUser] = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");
  const confirmpassword = watch("confirmpassword", "");
  const validatePasswordMatch = (value) => {
    return value === password || "Passwords do not match";
  };

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmpassword: data.confirmpassword,
    };
    // await axios
    //   .post("http://localhost:5002/user/signup", userInfo)
    await axios
      .post("http://localhost:5002/user/signup", userInfo, { withCredentials: true })
      .then((response) => {
        console.log("Signup successful:", response.data);
        if (response.data) {
          toast.success("Signup Successful!");
        }
        localStorage.setItem("messenger", JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error:" + error.response.data.error);
        }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-black px-8 py-7 rounded-lg shadow-lg space-y-3 w-100"
        >
          <h1 className="text-4xl items-center text-blue-700 font-bold">
            ChatSphere
          </h1>
          <h2 className="text-2xl items-center">
            Create A New{" "}
            <span className="text-blue-500 font-semibold">Account</span>
          </h2>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Username"
              {...register("name", { required: true })}
            />
          </label>
          {errors.name && (
            <span className="text-red-600 text-sm font-semibold">
              This field is required
            </span>
          )}

          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </label>
          {errors.email && (
            <span className="text-red-600 text-sm font-semibold">
              This field is required
            </span>
          )}

          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </label>
          {errors.password && (
            <span className="text-red-600 text-sm font-semibold">
              This field is required
            </span>
          )}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Confirm Password"
              {...register("confirmpassword", {
                required: true,
                validate: validatePasswordMatch,
              })}
            />
          </label>
          {errors.confirmpassword && (
            <span className="text-red-600 text-sm font-semibold">
              {errors.confirmpassword.message}
            </span>
          )}
          <div className="flex items-center justify-between">
            <input
              type="submit"
              value="Sign Up"
              className="text-white bg-blue-500 w-full rounded-lg py-2 cursor-pointer"
            />
          </div>
          <p>
            Have Any Account ?{" "}
            <Link
              to={"/login"}
              className="text-blue-500 underline cursor-pointer"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

// import React from "react";

// export default function Signup() {
//     return (
//         <div style={{ maxWidth: 400, margin: "0 auto", padding: 24 }}>
//             <form>
//                 <h1>Create A New Account</h1>
//                 <h2>It's Free And Always Will Be</h2>
//                 <div style={{ margin: "16px 0", position: "relative" }}>
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         style={{
//                             width: "100%",
//                             padding: "10px 40px 10px 10px",
//                             fontSize: 16,
//                             borderRadius: 6,
//                             border: "1px solid #ccc"
//                         }}
//                     />
//                     <span style={{
//                         position: "absolute",
//                         right: 10,
//                         top: "50%",
//                         transform: "translateY(-50%)",
//                         fontSize: 20,
//                         color: "#888"
//                     }}>📧</span>
//                 </div>
//                 <div style={{ margin: "16px 0", position: "relative" }}>
//                     <input
//                         type="text"
//                         placeholder="Username"
//                         style={{
//                             width: "100%",
//                             padding: "10px 40px 10px 10px",
//                             fontSize: 16,
//                             borderRadius: 6,
//                             border: "1px solid #ccc"
//                         }}
//                     />
//                     <span style={{
//                         position: "absolute",
//                         right: 10,
//                         top: "50%",
//                         transform: "translateY(-50%)",
//                         fontSize: 20,
//                         color: "#888"
//                     }}>👤</span>
//                 </div>
//                 <div style={{ margin: "16px 0", position: "relative" }}>
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         style={{
//                             width: "100%",
//                             padding: "10px 40px 10px 10px",
//                             fontSize: 16,
//                             borderRadius: 6,
//                             border: "1px solid #ccc"
//                         }}
//                     />
//                     <span style={{
//                         position: "absolute",
//                         right: 10,
//                         top: "50%",
//                         transform: "translateY(-50%)",
//                         fontSize: 20,
//                         color: "#888"
//                     }}>🔒</span>
//                 </div>
//                 <button type="submit" style={{
//                     width: "100%",
//                     padding: "10px",
//                     fontSize: 16,
//                     borderRadius: 6,
//                     border: "none",
//                     background: "#007bff",
//                     color: "#fff",
//                     cursor: "pointer"
//                 }}>
//                     Sign Up
//                 </button>
//             </form>
//         </div>
//     );
// }


































// import React from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { useAuth } from "../context/AuthProvider";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";
// export default function Signup() {
//   const [authUser, setAuthUser] = useAuth();
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const password = watch("password", "");
//   const confirmpassword = watch("confirmpassword", "");
//   const validatePasswordMatch = (value) => {
//     return value === password || "Passwords do not match";
//   };

//   const onSubmit = async (data) => {
//     const userInfo = {
//       name: data.name,
//       email: data.email,
//       password: data.password,
//       confirmpassword: data.confirmpassword,
//     };
//     await axios
//       .post("http://localhost:5002/user/signup", userInfo, { withCredentials: true })
//       .then((response) => {
//         if (response.data) {
//           toast.success("Signup Successful!");
//         }
//         localStorage.setItem("messenger", JSON.stringify(response.data));
//         setAuthUser(response.data);
//       })
//       .catch((error) => {
//         if (error.response) {
//           toast.error("Error:" + error.response.data.error);
//         }
//       });
//   };
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-slate-100 px-2">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-full max-w-md bg-white border border-gray-200 px-6 py-8 rounded-lg shadow-lg space-y-3"
//       >
//         <h1 className="text-4xl text-center text-blue-700 font-bold mb-2">
//           ChatSphere
//         </h1>
//         <h2 className="text-2xl text-center mb-4">
//           Create A New{" "}
//           <span className="text-blue-500 font-semibold">Account</span>
//         </h2>
//         <label className="input input-bordered flex items-center gap-2">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
//             <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
//           </svg>
//           <input
//             type="text"
//             className="grow"
//             placeholder="Username"
//             {...register("name", { required: true })}
//           />
//         </label>
//         {errors.name && (
//           <span className="text-red-600 text-sm font-semibold">
//             This field is required
//           </span>
//         )}

//         <label className="input input-bordered flex items-center gap-2">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
//             <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
//             <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
//           </svg>
//           <input
//             type="text"
//             className="grow"
//             placeholder="Email"
//             {...register("email", { required: true })}
//           />
//         </label>
//         {errors.email && (
//           <span className="text-red-600 text-sm font-semibold">
//             This field is required
//           </span>
//         )}

//         <label className="input input-bordered flex items-center gap-2">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
//             <path
//               fillRule="evenodd"
//               d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//               clipRule="evenodd"
//             />
//           </svg>
//           <input
//             type="password"
//             className="grow"
//             placeholder="Password"
//             {...register("password", { required: true })}
//           />
//         </label>
//         {errors.password && (
//           <span className="text-red-600 text-sm font-semibold">
//             This field is required
//           </span>
//         )}

//         <label className="input input-bordered flex items-center gap-2">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
//             <path
//               fillRule="evenodd"
//               d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//               clipRule="evenodd"
//             />
//           </svg>
//           <input
//             type="password"
//             className="grow"
//             placeholder="Confirm Password"
//             {...register("confirmpassword", {
//               required: true,
//               validate: validatePasswordMatch,
//             })}
//           />
//         </label>
//         {errors.confirmpassword && (
//           <span className="text-red-600 text-sm font-semibold">
//             {errors.confirmpassword.message}
//           </span>
//         )}
//         <div className="flex items-center justify-between">
//           <input
//             type="submit"
//             value="Sign Up"
//             className="text-white bg-blue-500 w-full rounded-lg py-2 cursor-pointer"
//           />
//         </div>
//         <p className="text-center">
//           Have Any Account?{" "}
//           <Link
//             to={"/login"}
//             className="text-blue-500 underline cursor-pointer"
//           >
//             Login
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }