import { useState } from "react";
// import waveSvg from "../../assets/wave.svg";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Login() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);

  function checkUsername(e: any) {
    setIsAvailable(false);
    const value = e.target.value;
    // console.log();
    setValue(value);
  }

  function handleLogin(e: any): void {
    setLoading(true);
    e.preventDefault();
    const form = new FormData(e.target);
    console.log(form);
  }

  return (
    <>
      <Helmet>
        <title>Login - Bookmie Devs</title>
        <meta name="description" content="Login to access your account." />
      </Helmet>
      <div
        style={{ backgroundImage: `url(${"/wave.svg"})` }}
        className="h-auto pt-5 items-center bg-slate-800 bg-cover bg-center justify-center flex space-y-5"
      >
        <div className="sm:w-1/3 w-full px-5 py-12 rounded-2xl mb-20 bg-white bg-opacity-15">
          {/* <p className="text-3xl text-center font-extrabold underline">Login</p> */}
          <form action="" onSubmit={handleLogin}>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <label className="text-xl text-white m-1">Username</label>
                <input
                  onInput={checkUsername}
                  name="username"
                  className="bg-slate-100 shadow-md rounded-md text-xl px-7 py-4"
                  placeholder="Username"
                />
                {!isAvailable ? (
                  <p className="bg-red-500 text-white mt-2 text-start px-3 py-0.5 rounded-md">
                    {value} is not available
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col">
                <label className="text-xl text-white m-1">Password</label>
                <input
                  name="password"
                  className="bg-slate-100 rounded-md text-xl px-7 py-4"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="w-full mt-4">
              <button
                className="
              bg-slate-800 flex justify-center  
              items-center hover:outline hover:bg-slate-700
              hover:outline-green-400 text-lg text-white 
              text-center py-3 rounded-md w-full"
              >
                Submit
                <div className="ml-3">
                  <RotatingLines
                    visible={loading}
                    width="25"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                  />
                </div>
              </button>
            </div>
          </form>
          <p className="text-white text-lg pt-3">
            I'm new here &nbsp;
            <Link className="text-green-400 hover:underline" to={"/signup"}>
              Signup
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
