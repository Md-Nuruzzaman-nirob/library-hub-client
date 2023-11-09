import { useRef } from "react";
import bg from "../../assets/bg4.jpg";
import bg2 from "../../assets/gradient-bg.svg";
import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UpdateBook = () => {
  const formRef = useRef(null);

  const { id } = useParams();
  const { title } = useParams();
  const categoryData = useLoaderData() || [];
  const navigate = useNavigate();

  const findCategoryData = categoryData.find((data) => data._id === id);
  const {
    authorName,
    bookTitle,
    category,
    imageUrl,
    content,
    quantity,
    rating,
    _id,
    description,
    date,
  } = findCategoryData || {};

  const handleBookSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const author = form.author.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const url = form.url.value;
    const date = form.date.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const content = form.content.value;

    const toastId = toast.loading("Adding Book in Progress...");
    const updateBook = {
      bookTitle: name,
      authorName: author,
      category: category,
      quantity: quantity,
      imageUrl: url,
      description: description,
      date: date,
      rating: rating,
      content: content,
    };
    console.log(updateBook);
    try {
      await axios
        .patch(
          `http://localhost:5001/api/v1/update-book/all-content/${_id}`,
          updateBook
        )
        .then((data) => {
          console.log(data.data);
          if (data.data.acknowledged) {
            toast.success("Book Update Successfully", { id: toastId });
            formRef.current.reset();
            navigate("/allBooks");
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
            Update Book / {title}
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
            Update Book
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
                  className="w-full px-2 md:px-3 lg:px-4 py-1 lg:py-2 mt-2 rounded-full text-sm outline-none border border-transparent focus:border-teal-600 bg-gray-200 text-black"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Book title"
                  required
                  defaultValue={bookTitle}
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
                  className="w-full px-2 md:px-3 lg:px-4 py-1 lg:py-2 mt-2 rounded-full text-sm outline-none border border-transparent focus:border-teal-600 bg-gray-200 text-black"
                  type="text"
                  name="author"
                  id="author"
                  placeholder="Author name"
                  required
                  defaultValue={authorName}
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
                  className="w-full px-2 md:px-3 lg:px-4 py-1 lg:py-2 mt-2 rounded-full text-sm outline-none border border-transparent focus:border-teal-600 bg-gray-200 text-black"
                  name="category"
                  id="category"
                  required
                  defaultValue={category}
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
                  className="w-full px-2 md:px-3 lg:px-4 py-1 lg:py-2 mt-2 rounded-full text-sm outline-none border border-transparent focus:border-teal-600  bg-gray-200 text-black"
                  name="quantity"
                  id="quantity"
                  required
                  defaultValue={quantity}
                >
                  <option value="Select quantity" disabled selected>
                    Select quantity
                  </option>
                  <option value="1">1</option>
                  <option value="5">5</option>
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
                  className="w-full px-2 md:px-3 lg:px-4 py-1 lg:py-2 mt-2 rounded-full text-sm outline-none border border-transparent focus:border-teal-600  bg-gray-200 text-black"
                  type="url"
                  name="url"
                  id="url"
                  placeholder="Image url"
                  required
                  defaultValue={imageUrl}
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
                  className="w-full px-2 md:px-3 lg:px-4 py-1 lg:py-2 mt-2 rounded-full text-sm outline-none border border-transparent focus:border-teal-600 bg-gray-200 text-black"
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Add description"
                  required
                  defaultValue={description}
                />
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between gap-2 md:gap-10">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="date"
                  className="block ml-2 md:ml-4 font-medium"
                >
                  Publish Date
                </label>
                <input
                  className="w-full px-2 md:px-3 lg:px-4 py-1 lg:py-2 mt-2 rounded-full text-sm outline-none border border-transparent focus:border-teal-600 bg-gray-200 text-black"
                  type="date"
                  name="date"
                  id="date"
                  placeholder="Publish date"
                  required
                  defaultValue={date}
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
                  className="w-full px-2 md:px-3 lg:px-4 py-1 lg:py-2 mt-2 rounded-full text-sm outline-none border border-transparent focus:border-teal-600 bg-gray-200 text-black"
                  name="rating"
                  id="rating"
                  required
                  defaultValue={rating}
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
                name="content"
                id="content"
                className="w-full h-28 md:h-32 lg:h-40 px-2 md:px-3 lg:px-4 py-1 lg:py-2 mt-2 border 
                  border-transparent focus:border-teal-600 bg-gray-200 rounded focus:outline-none text-black"
                placeholder="Add book content"
                required
                // resize-none --advance
                defaultValue={content}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full btn btn-sm lg:btn-md rounded-full mt-6 xl:mt-10 lg:text-base font-bold font-Montserrat bg-teal-600 hover:bg-teal-700 border-transparent hover:border-transparent  text-white"
            >
              Update Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBook;
