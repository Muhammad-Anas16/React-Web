const Login = () => {
  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[35%] max-w-md bg-white shadow-lg border border-gray-200 px-6 md:px-8 py-10 rounded-xl">
        <div className="mb-6 text-center">
          <h1 className="font-bold text-3xl text-gray-800 mb-2">
            Log in to Exclusive
          </h1>
          <p className="text-sm text-gray-500">Enter your details below</p>
        </div>

        <form className="w-full space-y-5">
          <input
            type="email"
            name="email"
            id="email"
            className="w-full py-2.5 px-4 text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-500"
            placeholder="Email address"
            required
          />

          <input
            type="password"
            name="password"
            id="password"
            className="w-full py-2.5 px-4 text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-500"
            placeholder="Password"
            required
          />

          <p className="text-sm text-start text-[#DB4444] hover:underline cursor-pointer">
            Forget Password?
          </p>
          <button
            type="submit"
            className="w-full bg-[#DB4444] text-white font-semibold text-sm py-2.5 rounded-md hover:bg-red-600 transition-colors"
          >
            Log In
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
