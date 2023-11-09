import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin, facebookLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSocialLogin = async (login) => {
    try {
      await login();
      toast.success("Register Successful!");
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      toast.error(error.message.slice(10));
    }
  };
  return (
    <>
      <div className="divider font-medium text-xs lg:text-sm">
        Or Login With
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="flex-1 btn btn-xs md:btn-sm lg:btn-md border-transparent bg-white font-bold font-Montserrat rounded-full"
        >
          <FcGoogle></FcGoogle> Google
        </button>
        <button
          onClick={() => handleSocialLogin(facebookLogin)}
          className="flex-1 btn btn-xs md:btn-sm lg:btn-md border-transparent bg-white font-bold font-Montserrat rounded-full"
        >
          <FaFacebook className="text-blue-500"></FaFacebook>Facebook
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
