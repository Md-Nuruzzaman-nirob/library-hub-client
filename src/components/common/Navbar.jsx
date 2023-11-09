import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [userProfile, setUserProfile] = useState(false);

  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full fixed top-0 transition-all duration-300 z-50">
      <div
        className={`max-w-7xl mx-5 md:mx-10 xl:mx-auto my-6 flex items-center justify-between ${
          scrolled
            ? "bg-white rounded-full shadow-sm px-4 py-2 transition-all duration-300 ease-in-out dark:text-black"
            : "bg-transparent transition-all duration-300 ease-in-out"
        }`}
      >
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <img className="w-8 h-8 md:w-10 md:h-10" src={logo} alt="" />
            <h3 className="sm:text-lg md:text-xl font-Montserrat font-extrabold text-orange-500 tracking-widest">
              Library <span className="text-cyan-700">Hub</span>
            </h3>
          </div>
        </Link>

        <div
          className={`hidden lg:flex items-center gap-8 text-base font-semibold ${
            scrolled
              ? "text-cyan-700 transition-colors duration-300 ease-in-out"
              : "text-orange-500  transition-colors duration-300 ease-in-out"
          }`}
        >
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? scrolled
                  ? "text-orange-500 underline underline-offset-[6px] "
                  : "text-cyan-700 underline underline-offset-[6px] "
                : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/addBook"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? scrolled
                  ? "text-orange-500 underline underline-offset-[6px] "
                  : "text-cyan-700 underline underline-offset-[6px]"
                : ""
            }
          >
            Add Book
          </NavLink>
          <NavLink
            to="/allBooks"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? scrolled
                  ? "text-orange-500 underline underline-offset-[6px] "
                  : "text-cyan-700 underline underline-offset-[6px] "
                : ""
            }
          >
            All Books
          </NavLink>
          <NavLink
            to="/borrowedBooks"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? scrolled
                  ? "text-orange-500 underline underline-offset-[6px] "
                  : "text-cyan-700 underline underline-offset-[6px] "
                : ""
            }
          >
            Borrowed Books
          </NavLink>
        </div>

        <div className="flex items-center gap-3 md:gap-8 relative">
          {user?.email ? (
            <div className="relative">
              {user.photoURL ? (
                <img
                  onClick={() => setUserProfile(!userProfile)}
                  className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              ) : (
                <img
                  onClick={() => setUserProfile(!userProfile)}
                  alt="tania andrew"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                  className="inline-block h-12 w-12 cursor-pointer rounded-full object-cover object-center"
                />
              )}
              {userProfile && (
                <ul className="absolute right-0 flex min-w-[180px] flex-col gap-2 overflow-auto rounded-md border border-blue-gray-50 bg-[#feffff] p-3 shadow-lg shadow-gray-500/50 focus:outline-none">
                  <button className="btn btn-sm flex justify-start w-full items-center gap-2 rounded-md px-3 outline-none hover:bg-gray-500 hover:bg-opacity-30 text-[#17252a]">
                    <p className="block font-Ubuntu font-bold normal-case text-sm leading-normal text-inherit antialiased">
                      {user?.displayName}
                    </p>
                  </button>

                  <div className="btn btn-sm flex justify-start w-full items-center gap-2 rounded-md px-3 outline-none hover:bg-gray-500 hover:bg-opacity-30 text-[#17252a]">
                    <p className="block font-Ubuntu font-bold normal-case text-sm leading-normal text-inherit antialiased">
                      {user?.email}
                    </p>
                  </div>
                  <hr className="border-blue-gray-50" />
                  <button
                    onClick={() => {
                      const email = user.email;
                      logout();
                      axios
                        .post(
                          "https://library-hub-server.vercel.app/api/v1/jwt/logout",
                          { email },
                          {
                            withCredentials: true,
                          }
                        )
                        .then((data) => {
                          console.log("remove cookie", data.data);
                        });
                    }}
                    className="btn btn-sm flex justify-start w-full items-center gap-2 rounded-md px-3 outline-none hover:bg-gray-500 hover:bg-opacity-30 text-[#17252a]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                      ></path>
                    </svg>
                    <p className="block font-Ubuntu font-bold normal-case text-sm leading-normal text-inherit antialiased">
                      Log Out
                    </p>
                  </button>
                </ul>
              )}
            </div>
          ) : (
            <Link to={"/login"}>
              <button
                className={
                  scrolled
                    ? "btn btn-xs md:btn-sm text-white bg-cyan-700 hover:bg-cyan-800 border-none transition duration-300 ease-in-out rounded-full"
                    : " btn btn-xs md:btn-sm text-white bg-orange-500 hover:bg-orange-600 border-none transition duration-300 ease-in-out rounded-full"
                }
              >
                Login
              </button>
            </Link>
          )}
          <label
            htmlFor="my-drawer-4"
            className="lg:hidden drawer-button btn btn-sm btn-circle"
          >
            <VscMenu></VscMenu>
          </label>
        </div>
      </div>

      {/* ------------------------------------ */}

      <div className="drawer drawer-end lg:hidden dark:bg-gray-900 ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul
            className={`menu flex flex-col gap-5 px-8 py-16 w-60 sm:w-72 min-h-full bg-base-100 dark:bg-gray-900 dark:border-l dark:border-t text-base font-semibold ${
              scrolled
                ? "text-cyan-700 transition-colors duration-300 ease-in-out"
                : "text-orange-500  transition-colors duration-300 ease-in-out"
            }`}
          >
            <div className="border-2 border-gray-800 dark:border-gray-300"></div>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? scrolled
                    ? "text-orange-500 underline underline-offset-[6px] "
                    : "text-cyan-700 underline underline-offset-[6px] "
                  : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/addBook"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? scrolled
                    ? "text-orange-500 underline underline-offset-[6px] "
                    : "text-cyan-700 underline underline-offset-[6px]"
                  : ""
              }
            >
              Add Book
            </NavLink>
            <NavLink
              to="/allBooks"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? scrolled
                    ? "text-orange-500 underline underline-offset-[6px] "
                    : "text-cyan-700 underline underline-offset-[6px] "
                  : ""
              }
            >
              All Books
            </NavLink>
            <NavLink
              to="/borrowedBooks"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? scrolled
                    ? "text-orange-500 underline underline-offset-[6px] "
                    : "text-cyan-700 underline underline-offset-[6px] "
                  : ""
              }
            >
              Borrowed Books
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
