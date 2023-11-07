import { useState } from "react";
import bg from "../../assets/bgGradiant.jpg";
import banner from "../../assets/register.svg";
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
  const [firstName, setFirstName] = useState(false);
  const [lastName, setLastName] = useState(false);
  const [imageUrl, setImageUrl] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUser(email, password);
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
      className="relative"
    >
      <div className="max-w-7xl md:mx-10 xl:mx-auto h-screen flex flex-col md:flex-row items-center justify-center md:gap-16 xl:gap-40">
        <div className="absolute right-0 w-full md:w-4/6 h-full">
          <img className="md:w-10/12 h-full mx-auto" src={banner} alt="" />
        </div>

        <div className="bg-stone-100/90 md:bg-transparent md:flex-[5] lg:flex-[5] z-10 p-6 md:p-0 rounded-xl">
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-center mb-10 2xl:mb-16">
            Register Now
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label
                htmlFor="firstName"
                className="ml-4 lg:text-lg text-gray-800 md:text-gray-600 font-medium"
              >
                First Name
              </label>
              <input
                onBlur={(e) => setFirstName(e.target.value)}
                type="text"
                id="firstName"
                name="firstName"
                autoComplete="firstName"
                required
                placeholder="Enter your first name"
                className="w-full mt-2 px-4 py-1 lg:py-3 border rounded-full border-transparent focus:outline-none focus:border-teal-600"
              />
            </div>
            <div className="mt-2 lg:mt-3 xl:mt-4   flex flex-col">
              <label
                htmlFor="lastName"
                className="ml-4 lg:text-lg text-gray-800 md:text-gray-600 font-medium"
              >
                Last Name
              </label>
              <input
                onBlur={(e) => setLastName(e.target.value)}
                type="text"
                id="lastName"
                name="lastName"
                autoComplete="lastName"
                required
                placeholder="Enter your last name"
                className="w-full mt-2 px-4 py-1 lg:py-3 border rounded-full border-transparent focus:outline-none focus:border-teal-600"
              />
            </div>
            <div className="mt-2 lg:mt-3 xl:mt-4  flex flex-col">
              <label
                htmlFor="url"
                className="ml-4 lg:text-lg text-gray-800 md:text-gray-600 font-medium"
              >
                Photo URL
              </label>
              <input
                onBlur={(e) => setImageUrl(e.target.value)}
                type="url"
                id="url"
                name="url"
                autoComplete="url"
                required
                placeholder="Enter your photo url"
                className="w-full mt-2 px-4 py-1 lg:py-3 border rounded-full border-transparent focus:outline-none focus:border-teal-600"
              />
            </div>
            <div className="mt-2 lg:mt-3 xl:mt-4  flex flex-col">
              <label
                htmlFor="email"
                className="ml-4 lg:text-lg text-gray-800 md:text-gray-600 font-medium"
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
                className="w-full mt-2 px-4 py-1 lg:py-3 border rounded-full border-transparent focus:outline-none focus:border-teal-600"
              />
            </div>

            <div className="mt-2 lg:mt-3 xl:mt-4 flex flex-col relative">
              <label
                htmlFor="password"
                className="ml-4 lg:text-lg text-gray-800 md:text-gray-600 font-medium"
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
                className="w-full mt-2 pl-4 pr-10 py-1 lg:py-3 border rounded-full border-transparent focus:outline-none focus:border-teal-600"
              />
              <p
                onClick={() => setShowPass(!showPass)}
                className="absolute right-4 lg:right-5 top-10 lg:top-12"
              >
                {showPass ? (
                  <RiEyeFill className="lg:w-6 lg:h-6" />
                ) : (
                  <RiEyeOffFill className="lg:w-6 lg:h-6" />
                )}
              </p>
            </div>

            <div className="xl:mx-4 mt-2 lg:mt-3 xl:mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <p onClick={() => setChecked(!checked)}>
                  {checked ? (
                    <RiCheckboxCircleFill className="w-6 h-6 lg:w-8 lg:h-8 text-teal-600" />
                  ) : (
                    <RiCheckboxBlankCircleLine className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  )}
                </p>
                <p
                  className={`ml-2 text-xs md:text-sm xl:text-lg font-medium ${
                    checked ? "text-black" : "text-gray-600"
                  }`}
                >
                  I agree with all
                  <span className="ml-2 hover:underline underline-offset-[6px] hover:text-teal-700">
                    Terms and Conditions
                  </span>
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="w-full btn btn-sm lg:btn-md rounded-full mt-6 lg:mt-10 text-base font-bold font-Montserrat bg-teal-600 hover:bg-teal-700 border-transparent hover:border-transparent  text-white"
            >
              Register
            </button>
          </form>
          <div className="mt-2 lg:mt-3 xl:mt-4 flex items-center justify-center gap-2 text-sm md:text-base lg:text-lg font-medium">
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
        <div className="hidden md:block flex-[6] lg:flex-[7]"></div>
      </div>
    </div>
  );
};
export default Register;
