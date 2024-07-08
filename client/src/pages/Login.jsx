import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { login, register } from "../API/Authentication";
<<<<<<< HEAD
import { formToJSON } from "axios";
import { LoginAPI } from "../services/Auth.services";

const Login = () => {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = formToJSON(formData)
    if (username === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }
    LoginAPI(data)
      .then(res => console.log(res))
      .catch(err => console.log(err))

  };
  useEffect(() => {
    user && navigate("/dashboard");
  }, [user]);
=======
import Signup from "./Signup";

const Login = () => {

    const usernamechanger = (username) => {
      setUsername(username);
    }
    const passwordchanger = (password) => {
      setPassword(password);
    }
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {user} = useSelector((state) => state.auth);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const navigate = useNavigate();
      const navigate1 = useNavigate();

      const submitHandler = async (data) => {
        console.log("submit");
      };
      useEffect(() => {
        user && navigate("/dashboard");
      }, [user]);
      
>>>>>>> ef998bf5443c8b44f63395ae3bf793eeaa7c5a51
  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]'>
      <div iv className='w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center'>
        {/* left side */}
        <div className='h-full w-full lg:w-3/4 flex flex-col items-center justify-center'>
          <div className='w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20'>
            <span className='flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base bordergray-300 text-gray-600'>
              ladies and gentelmen , we present our final web project!
            </span>
            <p className='flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-blue-700'>
              <span>  welcome to </span>
              <span>Task Manager</span>
            </p>

            <div className='cell'>
              <div className='circle rotate-in-up-left'></div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className='w-full md:w-1/4 p-4 md:p-1 flex flex-col justify-center items-center'>
          <form onSubmit={onSubmit}
            className='form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14'
          >
            <div className='flex flex-col gap-y-5'>
<<<<<<< HEAD
              <input
=======
              <Textbox
>>>>>>> ef998bf5443c8b44f63395ae3bf793eeaa7c5a51
                placeholder='your email'
                value={username}
                type='email'
                name='email'
                label='email Address'
                className='w-full rounded-full'
                register={register("email", {
                  required: "email Address is required!",
                })}
                error={errors.username ? errors.username.message : ""}
                changer={usernamechanger}
              />
              <Textbox
                placeholder='your password'
                value={password}
                type='password'
                name='password'
                label='Password'
                className='w-full rounded-full'
                register={register("password", {
                  required: "Password is required!",
                })}
                error={errors.password ? errors.password.message : ""}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                changer={passwordchanger}
              />
              <Link to="/Sign-up" className='text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer'>
                Don't have an account yet?
              </Link>

              <Button
                type='submit'
                label='Submit'
                className='w-full h-10 bg-blue-700 text-white rounded-full'
<<<<<<< HEAD
=======
                onClick={(e) => {
                  if (username === "" || password === "") {
                    alert("Please fill in all fields");
                    return;
                  }
                  login(username, password).then((res) => {
                   
                    console.log(res);
                    if (res) {
                      localStorage.setItem("token", res.token);
                      navigate1("/dashboard");
                      
                    } else {
                      alert("Wrong username or password");
                    }
                  });
                }}
>>>>>>> ef998bf5443c8b44f63395ae3bf793eeaa7c5a51
              >
              </Button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login








// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   return (
//     <>
//       <section className="signin--instruction">
//         <h1>Welcome Back!</h1>
//         <p>sign in to your account</p>
//       </section>

//       <section className="signin--information">
//         <input
//           type="text"
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//           placeholder="Enter your email address"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//           placeholder="Enter your password"
//         />
//         <button
//           onClick={(e) => {
//             if (email === "" || password === "") {
//               alert("Please fill in all fields");
//               return;
//             }
//             login(email, password).then((res) => {
//               if (res) {
//                 localStorage.setItem("token", res.token);
//                 window.location.reload();
//               } else {
//                 alert("Wrong email or password");
//               }
//             });
//           }}
//         >
//           Sign in
//         </button>
//       </section>

//       <section className="signin--switch">
//         <p>Dont have an account? Let's</p>
//         <Link to={"/signup"}>Sign up</Link>
//       </section>
//     </>
//   );
// };