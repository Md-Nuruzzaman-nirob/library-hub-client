import { useEffect, useState } from "react";
import bg from "../../assets/bg4.jpg";
import bg2 from "../../assets/gradient-bg.svg";
import axios from "axios";
import BookCard from "./BookCard";

const AllBooks = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    axios
      .get(`https://library-hub-server.vercel.app/api/v1/read-book`)
      .then((data) => setData(data.data));
  }, []);
  return (
    <div className="dark:bg-gray-900">
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-[25vh] md:h-[30vh] text-white"
      >
        <div className="h-full flex items-center max-w-7xl mx-5 md:mx-10 xl:mx-auto">
          <h3 className="md:text-2xl xl:text-3xl font-extrabold mt-16 bg-gradient-to-r from-orange-500 to-teal-800 bg-clip-text text-transparent  tracking-widest">
            Library Hub / All Books
          </h3>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-5 md:mx-10 xl:mx-auto py-20">
          {data?.map((card) => (
            <BookCard key={card._id} card={card}></BookCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
