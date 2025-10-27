import { useState, useEffect } from "react";

export function Navbar() {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("Portafolio");
  const [fade, setFade] = useState(true); 

  // Mostrar navbar después del scroll
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cambio de texto con efecto fade
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFade(false); 
      setTimeout(() => {
        setText((prev) =>
          prev === "Portafolio" ? "Santiago Carbal" : "Portafolio"
        );
        setFade(true); 
      }, 500); // seg de animacion

    },9000); // cada 10 seg
    return () => clearTimeout(timeout);
  }, [text]);

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (!section) return;

  const targetY = section.getBoundingClientRect().top + window.scrollY - 80; 
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = 1200; 
  const startTime = performance.now();

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * easedProgress);

    if (elapsed < duration) requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
};

  return (
    <nav
      className={`flex fixed top-0 left-0 w-full px-40 backdrop-blur-md transition-all duration-500 ${
        visible ? "opacity-100" : "hidden"
      }`}
    >
      <div className="flex flex-row justify-between w-full border-b border-b-[#374151] px-10">
        {/* Logo y texto animado */}
        <div className="flex flex-row gap-5 items-center">
          <div className="w-8 h-8 rounded-full bg-[conic-gradient(from_0deg,_#3b82f6_0deg_270deg,_transparent_270deg_360deg)]"></div>
          <h2
            className={`text-xl text-white font-bold transition-opacity duration-500 ease-in-out ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {text}
          </h2>
        </div>

        {/* Botones del menú */}
        <ul className="text-white flex justify-center gap-10 py-4 font-semibold">
          <li>
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:text-blue-500 transition duration-500"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-blue-500 transition duration-500"
            >
              About me
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-blue-500 transition duration-500"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-blue-500 transition duration-500"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
