import bg from "../../assets/bg4.jpg";

const AllBooks = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="h-[40vh] flex items-end pb-10 justify-center">
        <h3 className="text-5xl font-bold text-white/95">Read all Books</h3>
      </div>
      <div className="h-screen"></div>
    </div>
  );
};

export default AllBooks;
