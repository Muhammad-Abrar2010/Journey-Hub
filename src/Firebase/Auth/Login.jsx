import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Firebaseprovider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const Login = () => {
  const { SigninUser, loginGithub, loginGoogle } = useContext(AuthContext);

  const handleGoogle = () => {
    loginGoogle();
  };

  const handleGithub = () => {
    loginGithub();
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    SigninUser(email, password)
      .then(() => toast.success("login succesfull"))
      .catch((error) => toast.error(error.message));
  };
  return (
    <div>
      <div className="max-w-[800px] mx-auto my-12 p-6 bg-white shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16">
        <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-12">
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
            {/* Left side form */}
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="flex flex-col space-y-4 mb-4">
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                  placeholder="Email"
                  type="email"
                  name="email"
                />
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                  placeholder="Password"
                  type="password"
                  name="password"
                />
              </div>
              <div className="flex items-center space-x-2 mb-6"></div>
              <button type="submit" className="btn inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-red-600 text-white">
                LOG IN
              </button>
            </form>
          </div>
          {/* Right side content */}
          <div className="w-full sm:w-1/2">
            <p className="text-sm mb-6">
              If you don&apos;t already have an account click the button below
              to create your account.
            </p>
            <Link
              to={"/Register"}
              className=" btn inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full mb-2 bg-black text-white"
            >
              CREATE ACCOUNT
            </Link>
            <p className="text-center my-4">OR</p>
            <button
              className=" btn inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full mb-2 bg-blue-600 text-white"
              onClick={handleGoogle}
            >
              <FaGoogle /> SIGN IN WITH Google
            </button>
            <div className="flex gap-12">
              <button
                className=" btn inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-blue-500 text-white"
                onClick={handleGithub}
              >
                <FaGithub />
                SIGN IN WITH Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
