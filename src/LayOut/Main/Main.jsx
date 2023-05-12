import { useEffect, useState } from "react";

const Main = () => {
  const [theme, setTheme] = useState("ligth");
  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handelTheme = ()=>{
    setTheme(theme=="light"?'dark':'light');
  }
  return <div className="w-full h-screen bg-white dark:bg-[#23272F]">
    <button onClick={handelTheme}>btn</button>
  </div>;
};

export default Main;
