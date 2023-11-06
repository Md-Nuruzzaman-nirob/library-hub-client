import bg from "../../assets/bg4.jpg";
import bg2 from "../../assets/g1.jpg";

const AddBook = () => {
  return (
    <div className="h-screen">
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-[40vh] flex items-end pb-10 justify-center"
      >
        <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white/95">
          Add Your Book Now
        </h3>
      </div>
      <div
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="max-w-7xl mx-5 md:mx-10 xl:mx-auto"
      >
        <form>
          <div className="flex items-center justify-between gap-10">
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="block ml-4 font-medium">
                Book Name
              </label>
              <input
                className="w-full px-4 py-2 mt-2 rounded-full text-sm outline-none border border-transparent focus:border-orange-500 text-black"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="author" className="block ml-4 font-medium">
                Author Name
              </label>
              <input
                className="w-full px-4 py-2 mt-2 rounded-full text-sm outline-none border border-transparent focus:border-orange-500 text-black"
                type="text"
                name="author"
                id="author"
                placeholder="Author name"
                required
              />
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between gap-10">
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="block ml-4 font-medium">
                Book Name
              </label>
              <input
                className="w-full px-4 py-2 mt-2 rounded-full text-sm outline-none border border-transparent focus:border-orange-500 text-black"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="block ml-4 font-medium">
                Author Name
              </label>
              <input
                className="w-full px-4 py-2 mt-2 rounded-full text-sm outline-none border border-transparent focus:border-orange-500 text-black"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between gap-10">
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="block ml-4 font-medium">
                Book Name
              </label>
              <input
                className="w-full px-4 py-2 mt-2 rounded-full text-sm outline-none border border-transparent focus:border-orange-500 text-black"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="block ml-4 font-medium">
                Author Name
              </label>
              <input
                className="w-full px-4 py-2 mt-2 rounded-full text-sm outline-none border border-transparent focus:border-orange-500 text-black"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
