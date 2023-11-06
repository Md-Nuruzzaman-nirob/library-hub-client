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
    <button
      onClick={handleTheme}
      onMouseEnter={() => setShowThemeTooltip(true)}
      onMouseLeave={() => setShowThemeTooltip(false)}
      className="relative"
    >
      {theme ? (
        <>
          <MdModeNight className="w-7 h-7"></MdModeNight>
          <p>
            {showThemeTooltip && (
              <small className="hidden lg:block absolute top-10 left-0 font-Ubuntu font-medium">
                Dark
              </small>
            )}
          </p>
        </>
      ) : (
        <>
          <MdLightMode className="w-7 h-7"></MdLightMode>
          <p>
            {showThemeTooltip && (
              <small className="hidden lg:block absolute top-10 left-0 font-Ubuntu font-medium">
                Light
              </small>
            )}
          </p>
        </>
      )}
    </button>
  );
};

export default Theme;
