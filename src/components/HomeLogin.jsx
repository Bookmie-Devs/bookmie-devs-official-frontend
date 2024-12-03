// import React from 'react'
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

function HomeLogin() {
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    setLoading(true);
    console.log(e);
    const form = new FormData(e.target);
    console.log(form);
    e.preventDefault();
    // const result = await fetch(url, );
  }

  return (
    <div>
      <form
        onSubmit={handleLogin}
        id="loginForm"
        className="px-20 flex flex-col sm:flex-row space-x-5 mb-12 items-center justify-center"
        method="POST"
        action=""
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="bg-white outline outline-green-800 rounded-lg text-lg px-5 py-2"
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          className="bg-white outline outline-green-800 rounded-lg text-lg px-5 py-2"
        />
        <button
          type="submit"
          className="
          flex flex-row
          justify-between items-center
            bg-blue-100 text-lg shadow-md outline 
            outline-emerald-500
            shadow-emerald-100 
            hover:outline-emerald-400 hover:shadow-lg 
            hover:shadow-emerald-200 rounded-lg  m-2 px-20 py-2"
        >
          Login
          {loading ? (
            <ThreeDots
              visible={true}
              height="20"
              width="20"
              color="#4fa94d"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : null}
        </button>
      </form>
    </div>
  );
}

export default HomeLogin;
