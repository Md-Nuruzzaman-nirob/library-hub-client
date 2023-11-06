import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
        <div className="flex items-center gap-2">
          <img className="w-8 h-8 md:w-10 md:h-10" src={logo} alt="" />
          <h3
            style={{
              textShadow:
                "2px 2px 4px rgba(0, 0, 0, 0.4), 2px 2px 4px rgba(255, 255, 255, 0.4)",
            }}
            className="sm:text-lg md:text-xl font-bold text-orange-500 shadow-white  tracking-widest"
          >
            Library <span className="text-cyan-700">Hub</span>
          </h3>
        </div>

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
          <label
            htmlFor="my-drawer-4"
            className="lg:hidden drawer-button btn btn-sm btn-circle"
          >
            <VscMenu></VscMenu>
          </label>
        </div>
      </div>

      {/* ------------------------------------ */}

      <div className="drawer drawer-end lg:hidden">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu flex flex-col gap-5 px-8 py-10 w-56 sm:w-64 min-h-full bg-base-200 text-base-content sm:text-base font-semibold">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "underline underline-offset-[6px] tracking-widest "
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
                  ? "underline underline-offset-[6px] tracking-widest"
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
                  ? "underline underline-offset-[6px] tracking-widest"
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
                  ? "underline underline-offset-[6px] tracking-widest"
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
