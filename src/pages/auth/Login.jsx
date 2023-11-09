import { useState } from "react";
import bg from "../../assets/bgGradiant.jpg";
import bg2 from "../../assets/bg4.jpg";
import banner from "../../assets/login.svg";
import { PiWarningOctagonFill } from "react-icons/pi";
import {
  RiCheckboxBlankCircleLine,
  RiEyeFill,
  RiEyeOffFill,
} from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useScrollTop from "../../hooks/useScrollTop";

const Login = () => {
  const [checked, setChecked] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [emailValidation, setEmailValidation] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");

  const { loginUser } = useAuth();
  useScrollTop();

  // email validation
  const handleEmailValidation = (e) => {
    const email = e.target.value;
    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) &&
      !email == ""
    ) {
      setEmailValidation("Please enter a valid email address.");
    } else {
      setEmailValidation("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setEmailValidation("");
    setPasswordValidation("");

    const toastId = toast.loading("Progress...");

    loginUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message.slice(10), { id: toastId });
      });
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-[20vh] text-white"
      >
        <div className="h-full flex items-center max-w-7xl mx-5 md:mx-10 xl:mx-auto">
          <h3 className="text-xl md:text-2xl xl:text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-teal-800 bg-clip-text text-transparent  tracking-widest">
            Library Hub / Login
          </h3>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="relative"
      >
        <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto h-screen flex flex-col md:flex-row md:items-center justify-center md:gap-9 xl:gap-40">
          <div className="absolute left-0 right-0 md:left-0 lg:left-6 xl:left-12 2xl:left-0 w-full md:w-4/6">
            <img className="md:w-10/12" src={banner} alt="" />
          </div>

          <div className="hidden md:block flex-[6] lg:flex-[7]"></div>
          <div className="bg-stone-100/90 md:bg-transparent md:flex-[5] lg:flex-[5] z-10 p-5 md:p-0 rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-3 md:mb-5 bg-gradient-to-r from-orange-500 to-teal-800 bg-clip-text text-transparent h-10 lg:h-12 xl:h-16">
              Login Now
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="ml-4 text-gray-800 font-medium"
                >
                  Email
                </label>
                <input
                  onBlur={handleEmailValidation}
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="Enter your email"
                  className="w-full mt-2 px-4 py-1 lg:py-2 border rounded-full border-transparent focus:outline-none focus:border-teal-600"
                />
                {emailValidation && (
                  <p className="flex items-center gap-1 text-[#e83e8c] text-sm mt-1 text-justify">
                    <span>
                      {" "}
                      <PiWarningOctagonFill></PiWarningOctagonFill>
                    </span>
                    {emailValidation}
                  </p>
                )}
              </div>

              <div className="mt-2 lg:mt-3 xl:mt-4 flex flex-col relative">
                <label
                  htmlFor="password"
                  className="ml-4 text-gray-800 font-medium"
                >
                  Password
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  placeholder="Enter your password"
                  className="w-full mt-2 pl-4 pr-10 py-1 lg:py-2 border rounded-full border-transparent focus:outline-none focus:border-teal-600"
                />
                <p
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 bottom-2 lg:bottom-3"
                >
                  {showPass ? (
                    <RiEyeFill className="lg:w-5 lg:h-5" />
                  ) : (
                    <RiEyeOffFill className="lg:w-5 lg:h-5" />
                  )}
                </p>
                {passwordValidation && (
                  <p className="flex items-center gap-1 text-[#e83e8c] text-sm mt-1 text-justify">
                    <span>
                      {" "}
                      <PiWarningOctagonFill></PiWarningOctagonFill>
                    </span>
                    {passwordValidation}
                  </p>
                )}
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
                    className={`ml-2 text-xs md:text-base font-medium ${
                      checked ? "text-black" : "text-gray-500"
                    }`}
                  >
                    Remember Me
                  </p>
                </div>
                <p className="text-xs md:text-base font-medium text-gray-800">
                  Forget password?
                </p>
              </div>
              <button
                type="submit"
                className="w-full btn btn-sm lg:btn-md rounded-full mt-6 font-bold font-Montserrat bg-teal-600 hover:bg-teal-700 border-transparent hover:border-transparent  text-white"
              >
                Login
              </button>
            </form>
            <div className="mt-2 lg:mt-3 xl:mt-4 flex items-center justify-center gap-2 text-sm lg:text-base font-medium">
              <p>Don&apos;t have an account? </p>
              <Link
                to={"/register"}
                className="hover:underline underline-offset-[6px] hover:text-teal-700"
              >
                Register
              </Link>
            </div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
