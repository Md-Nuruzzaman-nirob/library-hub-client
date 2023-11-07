import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdModeNight } from "react-icons/md";

const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") === "dark");

  const [showThemeTooltip, setShowThemeTooltip] = useState(false);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className="fixed bottom-5 right-5 lg:bottom-7 lg:right-7 xl:bottom-8 xl:right-8 2xl:bottom-10 2xl:right-10 bg-black dark:bg-white rounded-full w-10 h-10 flex justify-center items-center z-50">
      <button
        onClick={handleTheme}
        onMouseEnter={() => setShowThemeTooltip(true)}
        onMouseLeave={() => setShowThemeTooltip(false)}
        className="relative "
      >
        {theme ? (
          <>
            <MdModeNight className="w-7 h-7 text-black"></MdModeNight>
            <p>
              {showThemeTooltip && (
                <small className="hidden lg:block absolute top-10 left-0 font-Ubuntu font-medium z-[100]">
                  Dark
                </small>
              )}
            </p>
          </>
        ) : (
          <>
            <MdLightMode className="w-7 h-7 text-white"></MdLightMode>
            <p>
              {showThemeTooltip && (
                <small className="hidden lg:block absolute top-10 left-0 font-Ubuntu font-medium z-[100]">
                  Light
                </small>
              )}
            </p>
          </>
        )}
      </button>
    </div>
  );
};

export default Theme;
