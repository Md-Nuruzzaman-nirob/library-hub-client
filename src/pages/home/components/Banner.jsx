import banner from "../../../assets/image6.png";
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
    >
      <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto h-screen  flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-6 md:gap-0 text-white text-center md:text-start">
        <div className="md:flex-1">
          <h3
            style={{
              color: "#fff",
              textShadow: `
                 -1px -1px 0 #000,  
                  1px -1px 0 #000,
                 -1px  1px 0 #000,
                  1px  1px 0 #000
               `,
            }}
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold"
          >
            Unlock Limitless{" "}
          </h3>
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold  text-orange-500 mt-1">
            Fields of <span className="text-cyan-700">Imagination</span>
          </h3>
          <p className="text-xs md:text-sm lg:text-base xl:text-lg mt-3 mb-5 md:mt-3 lg:mt-5 md:mb-8 font-medium text-gray-700 dark:text-gray-100">
            Dive into a world of infinite creative possibilities as you break
            free from constraints and explore the expansive realms of your own
            imagination.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <button className="btn btn-sm md:btn-md  bg-orange-500 hover:bg-orange-600  text-white text-xs md:text-sm rounded-full border-none">
              Register Now
            </button>
            <button className="btn btn-outline btn-sm md:btn-md hover:bg-transparent hover:text-black text-xs md:text-sm rounded-full dark:border-white dark:text-white">
              Get Started
            </button>
          </div>
        </div>
        <div className="md:flex-1">
          <img className="w-full" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
