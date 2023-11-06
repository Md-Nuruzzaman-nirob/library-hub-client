import useAuth from "../../hooks/useAuth";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const { googleLogin, facebookLogin } = useAuth();

  const socialLogin = (login) => {
    login();
  };
  return (
    <>
      <div className="divider font-medium text-xs md:text-sm lg:text-base">
        Or Login With
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => socialLogin(googleLogin)}
          className="flex-1 btn btn-xs md:btn-sm lg:btn-md border-transparent bg-white font-bold font-Montserrat rounded-full"
        >
          <FcGoogle></FcGoogle> Google
        </button>
        <button
          onClick={() => socialLogin(facebookLogin)}
          className="flex-1 btn btn-xs md:btn-sm lg:btn-md border-transparent bg-white font-bold font-Montserrat rounded-full"
        >
          <FaFacebook className="text-blue-500"></FaFacebook>Facebook
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
