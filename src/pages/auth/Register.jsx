import { useState } from "react";
import bg from "../../assets/bgGradiant.jpg";
import banner from "../../assets/register.svg";
import { PiWarningOctagonFill } from "react-icons/pi";
import {
  RiCheckboxBlankCircleLine,
  RiEyeFill,
  RiEyeOffFill,
} from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import { auth } from "../../config/firebase.config";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {
  const [checked, setChecked] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValidation, setEmailValidation] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");
  const [checkboxValidation, setCheckboxValidation] = useState("");

  const { createUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // email validation
  const handleEmailValidation = (e) => {
    setEmail(e.target.value);
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

  // password validation
  const handlePasswordValidation = (e) => {
    setPassword(e.target.value);
    const password = e.target.value;
    if (password.length < 6 && !password == "") {
      return setPasswordValidation("Password should be at least 6 characters");
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/.test(
        password
      ) &&
      !password == ""
    ) {
      return setPasswordValidation(
        "Password must contain at least one  lowercase letter, one uppercase letter, one digit."
      );
    } else {
      setPasswordValidation("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailValidation("");
    setPasswordValidation("");

    if (!checked) {
      return setCheckboxValidation("Please accept terms & conditions");
    }
    setCheckboxValidation("");
    const toastId = toast.loading("Progress...");

    createUser(email, password)
      .then(() => {
        // update profile
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: imageUrl,
        })
          .then(() => {
            toast.success("Register Successful!", { id: toastId });
            navigate(location?.state ? location.state : "/");
          })
          .catch((error) => {
            console.log(error);
            toast.error(error.message.slice(10), { id: toastId });
          });

        // // verification
        // sendEmailVerification(auth.currentUser)
        // .then(() => {
        //   Swal.fire(
        //     "You successfully create your account. Please check your email for verification."
        //   );
        // });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message.slice(10), { id: toastId });
      });
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
      <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto h-screen flex flex-col md:flex-row md:items-center justify-center md:gap-16 xl:gap-40">
        <div className="absolute right-0 w-full md:w-4/6 h-full">
          <img className="md:w-10/12 h-full mx-auto" src={banner} alt="" />
        </div>

        <div className="bg-stone-100/90 md:bg-transparent md:flex-[5] lg:flex-[5] z-10 p-6 md:p-0 rounded-xl">
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-center mb-10">
            Register Now
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mt-2 lg:mt-3 xl:mt-4 flex flex-col">
              <label
                htmlFor="name"
                className="ml-4 lg:text-lg text-gray-800 md:text-gray-600 font-medium"
              >
                Name
              </label>
              <input
                onBlur={(e) => setName(e)}
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                required
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-1 lg:py-2 border rounded-full border-transparent focus:outline-none focus:border-teal-600"
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
                placeholder="Enter your photo url"
                className="w-full mt-2 px-4 py-1 lg:py-2 border rounded-full border-transparent focus:outline-none focus:border-teal-600"
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
                <p className="flex items-center gap-1 text-[#e83e8c] text-sm mt-1">
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
                className="ml-4 lg:text-lg text-gray-800 md:text-gray-600 font-medium"
              >
                Password
              </label>
              <input
                onBlur={handlePasswordValidation}
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
                className="absolute right-4 lg:right-5 top-10 lg:top-11"
              >
                {showPass ? (
                  <RiEyeFill className="lg:w-6 lg:h-6" />
                ) : (
                  <RiEyeOffFill className="lg:w-6 lg:h-6" />
                )}
              </p>
              {passwordValidation && (
                <p className="flex items-center gap-1 text-[#e83e8c] text-sm mt-1">
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
            {checkboxValidation && (
              <p className="ml-1 flex items-center gap-1 text-[#e83e8c] text-sm">
                <span>
                  {" "}
                  <PiWarningOctagonFill></PiWarningOctagonFill>
                </span>
                {checkboxValidation}
              </p>
            )}
            <button
              type="submit"
              className="w-full btn btn-sm lg:btn-md rounded-full mt-6 lg:mt-8 text-base font-bold font-Montserrat bg-teal-600 hover:bg-teal-700 border-transparent hover:border-transparent  text-white"
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
