const SignUp = () => {
  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[35%] max-w-md bg-white shadow-lg border border-gray-200 px-6 md:px-8 py-10 rounded-xl">
        <div className="mb-6 text-center">
          <h1 className="font-bold text-3xl text-gray-800 mb-2">Create an account</h1>
          <p className="text-sm text-gray-500">Enter your details below</p>
        </div>

        <form className="w-full space-y-5">
          <input
            type="text"
            name="name"
            id="name"
            className="w-full py-2.5 px-4 text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-500"
            placeholder="Name"
            required
          />

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

          <button
            type="submit"
            className="w-full bg-[#DB4444] text-white font-semibold text-sm py-2.5 rounded-md hover:bg-red-600 transition-colors"
          >
            Create Account
          </button>

          <button
            type="button"
            className="w-full border border-black text-sm font-medium text-black py-2.5 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
          >
            <img
              className="w-5 h-5"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/1200px-Google_Favicon_2025.svg.png"
              alt="Google Icon"
            />
            Sign up with Google
          </button>

          <p className="text-sm text-center pt-2">
            Already have an account?{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">Log in</span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
