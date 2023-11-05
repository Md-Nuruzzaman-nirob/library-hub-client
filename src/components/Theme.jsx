import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdModeNight } from "react-icons/md";

const Theme = () => {
  const [theme, setTheme] = useState(false);
  const [showThemeTooltip, setShowThemeTooltip] = useState(false);
  // theme mode
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);
  return (
    <button
      onClick={() => setTheme(!theme)}
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
