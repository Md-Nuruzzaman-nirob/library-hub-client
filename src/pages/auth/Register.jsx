import { useState } from "react";
import bg from "../../assets/bgGradiant.jpg";
import banner from "../../assets/login.png";
import {
  RiCheckboxBlankCircleLine,
  RiEyeFill,
  RiEyeOffFill,
} from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const [checked, setChecked] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);

  const { loginUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginUser(email, password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto h-screen flex items-center justify-center">
        <div className="flex-1">
          <img className="w-4/6 mx-auto" src={banner} alt="" />
        </div>

        <div className="flex-1 ">
          <h3 className="text-6xl font-bold text-center mb-16">Register Now</h3>
          <form onSubmit={handleSubmit}>
            <div className=" mt-4 flex flex-col">
              <label
                htmlFor="email"
                className="ml-4 text-lg text-gray-600 font-medium"
              >
                Email
              </label>
              <input
                onBlur={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 border rounded-full border-transparent focus:outline-none focus:border-teal-600"
              />
            </div>

            <div className=" mt-4 flex flex-col relative">
              <label
                htmlFor="password"
                className="ml-4 text-lg text-gray-600 font-medium"
              >
                Password
              </label>
              <input
                onBlur={(e) => setPassword(e.target.value)}
                type={showPass ? "text" : "password"}
                id="password"
                name="password"
                autoComplete="current-password"
                required
                placeholder="Enter your password"
                className="w-full mt-2 px-4 py-3 border rounded-full border-transparent focus:outline-none focus:border-teal-600"
              />
              <p
                onClick={() => setShowPass(!showPass)}
                className="absolute right-5 top-12"
              >
                {showPass ? (
                  <RiEyeFill className="w-6 h-6" />
                ) : (
                  <RiEyeOffFill className="w-6 h-6" />
                )}
              </p>
            </div>

            <div className="mx-4 mt-4 flex items-center justify-between">
              <div className="flex">
                <p onClick={() => setChecked(!checked)}>
                  {checked ? (
                    <RiCheckboxCircleFill className="w-8 h-8 text-teal-600" />
                  ) : (
                    <RiCheckboxBlankCircleLine className="w-8 h-8 text-white" />
                  )}
                </p>
                <p
                  className={`ml-2 text-lg font-medium ${
                    checked ? "text-black" : "text-gray-600"
                  }`}
                >
                  Remember Me
                </p>
              </div>
              <p className="text-lg font-medium text-gray-600">
                Forget password?
              </p>
            </div>
            <button
              type="submit"
              className="w-full btn rounded-full mt-10 text-base font-bold font-Montserrat bg-teal-600 hover:bg-teal-700 border-transparent hover:border-transparent  text-white"
            >
              Login
            </button>
          </form>
          <div className="mt-4 flex items-center justify-center gap-2 text-lg font-medium">
            <p>Already have an account? </p>
            <Link
              to={"/login"}
              className="hover:underline underline-offset-[6px] hover:text-teal-700"
            >
              Login
            </Link>
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
