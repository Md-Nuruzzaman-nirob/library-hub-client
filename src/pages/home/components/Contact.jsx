import { useState } from "react";
import toast from "react-hot-toast";
import { PiWarningOctagonFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Contact = () => {
  const [emailValidation, setEmailValidation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const toastId = toast.loading("Progress...");

    const email = form.get("email");
    // const phone = form.get("phone");

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return setEmailValidation("Please enter a valid email address.");
    }
    setEmailValidation("");

    toast.success("Your message sent successfully.", { id: toastId });
    e.currentTarget.reset();
  };

  return (
    <div className="bg-[#feffff] dark:bg-gray-900">
      <h4 className="text-[#e83e8c] text-center pt-28 pb-2">
        Have Any Question?
      </h4>
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-12">
        Contact With Us
      </h1>
      <div className="flex justify-center items-center pb-16 md:pb-28 lg:pb-40 max-w-7xl mx-5 md:mx-10 xl:mx-auto font-medium">
        <div className="flex w-full flex-col-reverse md:flex-row-reverse gap-6">
          <div className="flex flex-col justify-center  m-0 md:w-2/5 space-y-10 md:text-end">
            <div>
              <p className="opacity-80">Address:</p>
              <h3 className="font-medium">Dhaka-1204 Bangladesh</h3>
            </div>
            <div>
              <p className="opacity-80">Phone:</p>
              <h3 className="font-medium hover:underline">+8801919191991</h3>
            </div>
            <div>
              <p className="opacity-80">Email:</p>
              <h3 className="font-medium">nmd28573@gmail.com</h3>
            </div>
            <div>
              <p className="opacity-80">Website:</p>
              <Link
                target="_blank"
                to={"https://brand-shop-61d84.web.app/"}
                className="font-medium hover:underline"
              >
                https://brand-shop-61d84.web.app/
              </Link>
            </div>
          </div>

          <div className="flex-1">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <label htmlFor="first_name" className="block mb-2 ml-4">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    className="w-full px-4 py-2 border focus:outline-none text-black focus:border-[#17252a] rounded-full text-xs md:text-sm"
                    placeholder="Enter first Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last_name" className="block mb-2 ml-4">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    className="w-full px-4 py-2 border rounded-full focus:outline-none text-black focus:border-[#17252a] text-xs md:text-sm"
                    placeholder="Enter last Name"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-2">
                <div>
                  <label htmlFor="email" className="block mb-2 ml-4">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-full focus:outline-none text-black focus:border-[#17252a] text-xs md:text-sm"
                    placeholder="Enter email Address"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block  mb-2 ml-4">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border rounded-full focus:outline-none text-black focus:border-[#17252a] text-xs md:text-sm"
                    placeholder="Enter phone Number"
                    required
                  />
                </div>
              </div>
              <div className="mb-5">
                {emailValidation && (
                  <p className="flex items-center gap-1 text-sm mt-1">
                    <span>
                      {" "}
                      <PiWarningOctagonFill></PiWarningOctagonFill>
                    </span>
                    {emailValidation}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 ml-4">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  className="w-full px-4 py-2 border rounded-lg  focus:outline-none text-black focus:border-[#17252a] text-xs md:text-sm"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                className="btn btn-sm lg:btn-md  bg-orange-500 hover:bg-orange-600  text-white rounded-full border-none w-full"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
