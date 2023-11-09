import { useRef, useState } from "react";
import bg from "../../assets/bg4.jpg";
import bg2 from "../../assets/gradient-bg.svg";
import axios from "axios";
import toast from "react-hot-toast";

const AddBook = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState("");
  const [content, setContent] = useState("");

  const formRef = useRef(null);

  const handleBookSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Adding Book in Progress...");
    const addBook = {
      bookTitle,
      authorName,
      category,
      quantity,
      imageUrl,
      description,
      date,
      rating,
      content,
    };
    try {
      await axios
        .post(
          "https://library-hub-server.vercel.app/api/v1/create-book",
          addBook
        )
        .then((data) => {
          if (data.data.acknowledged) {
            toast.success("Book Added Successfully", { id: toastId });
            setBookTitle("");
            setAuthorName("");
            setCategory("");
            setQuantity("");
            setImageUrl("");
            setDescription("");
            setDate("");
            setRating("");
            setContent("");
            formRef.current.reset();
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

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
            Library Hub / Add Book
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
        <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center pt-20 tracking-widest">
            Add New Book
          </h3>
          <p className="text-sm md:text-base font-medium text-center mt-5">
            Expand your library&apos;s collection by adding new books. Fill in
            the details to catalog your latest acquisitions.
          </p>
        </div>
        <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto py-10 md:py-16 xl:py-20">
          <form
            ref={formRef}
            onSubmit={handleBookSubmit}
            className="lg:w-3/4 xl:w-2/3 mx-auto"
          >
            <div className="flex items-center justify-between gap-2 md:gap-10">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="name"
                  className="block ml-2 md:ml-4 font-medium"
                >
                  Book Title
                </label>
                <input
                  onBlur={(e) => setBookTitle(e.target.value)}
                  className="w-full px-2 md:px-3 lg:px-4 py-1 lg:py-2 mt-2 rounded-full text-sm outline-none border border-transparent focus:border-teal-600 bg-gray-200 text-black"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Book title"
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="author"
                  className="block ml-2 md:ml-4 font-medium"
                >
                  Author Name
                </label>
                <input
                  onBlur={(e) => setAuthorName(e.target.value)}
                  className="w-full px-2 md:px-3 lg:px-4 py-1 lg:py-2 mt-2 rounded-full text-sm outline-none border border-transparent focus:border-teal-600 bg-gray-200 text-black"
                  type="text"
                  name="author"
                  id="author"
                  placeholder="Author name"
                  required
                />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-2 md:gap-10">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="category"
                  className="block ml-2 md:ml-4 font-medium"
                >
                  Category
                </label>
                <select
                  onBlur={(e) => setCategory(e.target.value)}
                  className="w-full px-2 md:px-3 lg:px-4 py-1 lg:py-2 mt-2 rounded-full text-sm outline-none border border-transparent focus:border-teal-600 bg-gray-200 text-black"
                  name="category"
                  id="category"
                  required
                  defaultValue={"Select category"}
                >
                  <option value="Select category" disabled selected>
                    Select category
                  </option>
                  <option value="Mystery">Mystery</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Biography">Biography</option>
                  <option value="Romance">Romance</option>
                  <option value="History">History</option>
                  <option value="Drama">Drama</option>
                  <option value="Cooking">Cooking</option>
                  <option value="Travel">Travel</option>
                  <option value="Self-Help">Self-Help</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Non-Fiction">Non-Fiction</option>
                  <option value="Science Fiction">Science Fiction</option>
                </select>
              </div>

              <div className="flex flex-col w-full">
                <label
                  htmlFor="quantity"
                  className="block ml-2 md:ml-4 font-medium"
                >
                  Quantity
                </label>
                <select
                  onBlur={(e) => setQuantity(e.target.value)}
                  className="w-full px-2 md:px-3 lg:px-4 py-1 lg:py-2 mt-2 rounded-full text-sm outline-none border border-transparent focus:border-teal-600  bg-gray-200 text-black"
                  name="quantity"
                  id="quantity"
                  required
                  defaultValue={"Select quantity"}
                >
                  <option value="Select quantity" disabled selected>
                    Select quantity
                  </option>
                  <option value="1">1</option>
                  <option value="5">2</option>
                  <option value="10">3</option>
                  <option value="10">4</option>
                  <option value="10">5</option>
                  <option value="10">6</option>
                  <option value="10">7</option>
                  <option value="10">8</option>
                  <option value="10">9</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                  <option value="60">60</option>
                  <option value="70">70</option>
                  <option value="80">80</option>
                  <option value="90">90</option>
                  <option value="100">100</option>
                  <option value="120">120</option>
                  <option value="150">150</option>
                  <option value="180">180</option>
                  <option value="200">200</option>
                  <option value="250">250</option>
                  <option value="300">300</option>
                </select>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between gap-2 md:gap-10 ">
              <div className="flex flex-col w-full">
                <label htmlFor="url" className="block ml-2 md:ml-4 font-medium">
                  Image URL
                </label>
                <input
                  onBlur={(e) => setImageUrl(e.target.value)}
                  className="w-full px-2 md:px-3 lg:px-4 py-1 lg:py-2 mt-2 rounded-full text-sm outline-none border border-transparent focus:border-teal-600  bg-gray-200 text-black"
                  type="url"
                  name="url"
                  id="url"
                  placeholder="Image url"
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="description"
                  className="block ml-2 md:ml-4 font-medium"
                >
                  Description
                </label>
                <input
                  onBlur={(e) => setDescription(e.target.value)}
                  className="w-full px-2 md:px-3 lg:px-4 py-1 lg:py-2 mt-2 rounded-full text-sm outline-none border border-transparent focus:border-teal-600 bg-gray-200 text-black"
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Add description"
                  required
                />
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between gap-2 md:gap-10">
              <div className="flex flex-col w-full">
                <label htmlFor="url" className="block ml-2 md:ml-4 font-medium">
                  Publish Date
                </label>
                <input
                  onBlur={(e) => setDate(e.target.value)}
                  className="w-full px-2 md:px-3 lg:px-4 py-1 lg:py-2 mt-2 rounded-full text-sm outline-none border border-transparent focus:border-teal-600 bg-gray-200 text-black"
                  type="date"
                  name="url"
                  id="url"
                  placeholder="Publish date"
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="rating"
                  className="block ml-2 md:ml-4 font-medium"
                >
                  Rating
                </label>
                <select
                  onBlur={(e) => setRating(e.target.value)}
                  className="w-full px-2 md:px-3 lg:px-4 py-1 lg:py-2 mt-2 rounded-full text-sm outline-none border border-transparent focus:border-teal-600 bg-gray-200 text-black"
                  name="rating"
                  id="rating"
                  required
                  defaultValue={"Select rating"}
                >
                  <option value="Select rating" disabled selected>
                    Select rating
                  </option>
                  <option value="5">5</option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                  <option value="1">1</option>
                </select>
              </div>
            </div>

            <div className="mt-5 flex flex-col w-full rounded-xl">
              <label
                htmlFor="content"
                className="block ml-2 md:ml-4 font-medium"
              >
                Book Content
              </label>
              <textarea
                onBlur={(e) => setContent(e.target.value)}
                name="content"
                id="content"
                className="w-full h-28 md:h-32 lg:h-40 px-2 md:px-3 lg:px-4 py-1 lg:py-2 mt-2 border 
                border-transparent focus:border-teal-600 bg-gray-200 rounded focus:outline-none text-black"
                placeholder="Add book content"
                required
                // resize-none --advance
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full btn btn-sm lg:btn-md rounded-full mt-6 xl:mt-10 lg:text-base font-bold font-Montserrat bg-teal-600 hover:bg-teal-700 border-transparent hover:border-transparent  text-white"
            >
              Add Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
