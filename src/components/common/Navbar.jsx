import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
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
    <nav
      className={`w-full fixed top-0 transition-all duration-300 ${
        scrolled ? "bg-transparent text-white" : ""
      }`}
    >
      <div
        className={`max-w-7xl mx-5 md:mx-10 xl:mx-auto my-6 flex items-center justify-between ${
          scrolled
            ? "bg-white rounded-full px-4 py-2 transition-all duration-300 ease-in-out"
            : "bg-transparent transition-all duration-300 ease-in-out"
        }`}
      >
        <div className="flex items-center gap-2">
          <img className="w-8 h-8 md:w-10 md:h-10" src={logo} alt="" />
          <h3
            style={{
              textShadow:
                "2px 2px 4px rgba(0, 0, 0, 0.5), 2px 2px 4px rgba(255, 255, 255, 0.5)",
            }}
            className={`sm:text-lg md:text-xl font-bold text-orange-600 shadow-white  tracking-widest`}
          >
            Library <span className="text-cyan-800">Hub</span>
          </h3>
        </div>
        <div
          className={`hidden lg:flex items-center gap-8 text-base font-semibold ${
            scrolled
              ? "text-cyan-800 transition-colors duration-300 ease-in-out"
              : "text-white transition-colors duration-300 ease-in-out"
          }`}
        >
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
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline underline-offset-[6px] tracking-widest"
                : ""
            }
          >
            Login
          </NavLink>
        </div>
        <label
          htmlFor="my-drawer-4"
          className="lg:hidden drawer-button btn btn-sm btn-circle"
        >
          <VscMenu></VscMenu>
        </label>
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
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "underline underline-offset-[6px] tracking-widest"
                  : ""
              }
            >
              Login
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
