import { useEffect, useState } from "react";
import Navigation from "../../Pages/Shared/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";

const Main = () => {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return <div className="w-full bg-white dark:bg-[#23272F] dark:text-white">
    <Navigation  theme={theme} setTheme={setTheme}></Navigation>
    <Outlet></Outlet>
    <Footer></Footer>
  </div>;
};

export default Main;
