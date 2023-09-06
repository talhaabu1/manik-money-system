import { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";

// eslint-disable-next-line react/prop-types
const Login = ({ setId }) => {
  const [hide, setHide] = useState(true);

  const { register, handleSubmit } = useForm();

  const onSubmit = ({ username, password }) => {
    if (username === "1" && password === "1") {
      sessionStorage.setItem("user", true);
      setId(sessionStorage.getItem("user"));
    }
  };

  return (
    <div className=" flex justify-center items-center h-[100vh] containerBg">
      <div
        id="maindiv"
        className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg "
      >
        <div className="px-6 py-10">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-12 xl:h-14 "
              src="https://cdn-icons-png.flaticon.com/128/9165/9165762.png"
              alt=""
            />
          </div>

          <h3 className="mt-3 text-2xl font-semibold text-center text-gray-600">
            Tilakpur-Travalse
          </h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-5">
              <input
                className="input1"
                {...register("username")}
                placeholder="UserName"
                type="search"
              />
            </div>

            <div className="mt-5 flex">
              <input
                className="input1"
                {...register("password")}
                placeholder="Password"
                type={hide === true ? "password" : "text"}
              />
              <button
                onClick={() => setHide(!hide)}
                className=" bg-[#f5f5f5] hide rounded-r-[4px] px-2"
              >
                {hide === true ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path
                      fillRule="evenodd"
                      d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z"
                      clipRule="evenodd"
                    />
                    <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
                  </svg>
                )}
              </button>
            </div>

            <div className="flex items-center justify-between mt-4">
              <button
                type="submit"
                className="btn w-full text-lg rounded-xl buttonsh"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
