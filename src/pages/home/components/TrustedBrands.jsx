import bg from "../../../assets/bg3.jpg";
import brand1 from "../../../assets/icon1.jpg";
import brand2 from "../../../assets/icon2.jpg";
import brand3 from "../../../assets/icon3.jpg";
import brand4 from "../../../assets/icon4.png";
import brand5 from "../../../assets/icon5.gif";
import brand6 from "../../../assets/icon6.jpg";
import brand7 from "../../../assets/icon8.jpg";
import brand8 from "../../../assets/icon9.jpg";
import brand9 from "../../../assets/icon10.jpg";
import brand10 from "../../../assets/icon11.png";

const TrustedBrands = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="h-80 lg:h-96 w-full flex items-center"
    >
      <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto">
        <h3 className="w-full lg:text-xl font-semibold text-center pb-10 border-b-4 dark:text-gray-800">
          Specially designed for{" "}
          <span className="text-lg lg:text-2xl font-bold">Schools</span>,{" "}
          <span className="text-lg lg:text-2xl font-bold"></span>,{" "}
          <span className="text-lg lg:text-2xl font-bold">Organizations</span>,
          and <span className="text-lg lg:text-2xl font-bold">Home</span>{" "}
          libraries including{" "}
          <span className="text-lg lg:text-2xl font-bold">Personal</span>{" "}
          collections & loved by the{" "}
          <span className="text-lg lg:text-2xl font-bold">Librarians</span>{" "}
          across the world.
        </h3>
        <h3 className="lg:text-xl font-semibold text-center mt-3 dark:text-gray-800">
          Trusted By
        </h3>
        <div className="flex items-center justify-around mt-8 mx-auto">
          <img
            className="w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full"
            src={brand1}
            alt=""
          />
          <img
            className="w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full"
            src={brand2}
            alt=""
          />
          <img
            className="w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full"
            src={brand3}
            alt=""
          />
          <img
            className="w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full"
            src={brand4}
            alt=""
          />
          <img
            className="w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full"
            src={brand5}
            alt=""
          />
          <img
            className="w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full"
            src={brand6}
            alt=""
          />
          <img
            className="w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full"
            src={brand7}
            alt=""
          />
          <img
            className="w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full"
            src={brand8}
            alt=""
          />
          <img
            className="w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full"
            src={brand9}
            alt=""
          />
          <img
            className="w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full"
            src={brand10}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
