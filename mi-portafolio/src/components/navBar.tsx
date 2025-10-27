import  { useState, useEffect } from "react";

export function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`flex fixed top-0 left-0 w-full px-40  backdrop-blur-md transition-all duration-500 ${
        visible ? "opacity-100" : "hidden"
      }`}
    >
      <div className="flex flex-row justify-between w-full border-b border-b-[#374151]">
      <div className="flex flex-row gap-5 items-center ">
      <div className="w-10 h-10 rounded-full bg-[conic-gradient(from_0deg,_#3b82f6_0deg_270deg,_transparent_270deg_360deg)]"></div>
      <h2 className="text-xl text-white font-bold">Portafolio</h2>
      </div>
      <ul className="text-white flex justify-center gap-10 py-4 font-semibold">
        <li>
          <button onClick={() => scrollToSection("hero")}>Home</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("about")}>About me</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </li>
      </ul>
      </div>
     
    </nav>
  );
}
export default Navbar