import banner from "../../../assets/image5.png";
import bg from "../../../assets/gradient-bg.svg";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className=" bg-cover bg-no-repeat"
    >
      <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto h-screen  flex justify-between items-center text-white">
        <div className="flex-1">
          <h3 className="text-5xl font-extrabold">
            Unlock Limitless{" "}
            <span className="block bg-orange-500  text-transparent bg-clip-text">
              Fields of Imagination
            </span>
          </h3>
          <p className="text-lg mt-5 mb-8 font-medium">
            Dive into a world of infinite creative possibilities as you break
            free from constraints and explore the expansive realms of your own
            imagination.
          </p>
          <div className="flex items-center gap-3">
            <button className="btn  bg-white rounded-full">Register Now</button>
            <button className="btn outline-white bg-transparent hover:bg-transparent text-white rounded-full">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img className="w-full" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
