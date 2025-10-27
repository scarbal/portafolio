import NavBar from "./components/navBar";
import ProjectCard from "./components/ProjectCard";
import SkillsCard from "./components/skillsCard";
import { useRef, useState, useEffect } from "react";
import { Download, Mail, Check, Phone } from "lucide-react";

export default function App() {
  const workSection = useRef<HTMLElement | null>(null);
  const [bgColor, setBgColor] = useState("#101922");

  const scrollToWork = () => {
    workSection.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!workSection.current) return;

      const sectionTop = workSection.current.offsetTop;
      const sectionHeight = workSection.current.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (
        scrollY + windowHeight / 2 >= sectionTop &&
        scrollY < sectionTop + sectionHeight
      ) {
        setBgColor("#121212");
      } else {
        setBgColor("#101922");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = async (text: string, setState: (v: boolean) => void) => {
    try {
      await navigator.clipboard.writeText(text);
      setState(true);
      setTimeout(() => setState(false), 2000);
      console.log("Copiado:", text);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };


  return (
    <div
      className="min-h-screen transition-colors duration-1000 ease-in-out text-white"
      style={{ backgroundColor: bgColor }}
    >
      {/*Sección Hero */}
      <section id="hero" className="flex flex-col items-center justify-center px-6 py-16 md:px-20 lg:px-40 space-y-8 text-center">
        <img
          src="./assets/PHOTO.jpeg"
          alt="porfile-photo"
          className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover border-4 border-[#1173d4]"
        />
        <h1 className="text-3xl md:text-5xl font-bold">
          Santiago Carbal Full-Stack Developer
        </h1>
        <h2 className="text-gray-300 max-w-xl md:max-w-2xl text-base md:text-lg">
          A passionate full-stack developer with a focus on creating beautiful
          and functional web applications.
        </h2>
        <button
          onClick={scrollToWork}
          className="bg-[#1173d4] text-white rounded-lg px-6 py-2 font-bold hover:bg-[#5486ed] transition"
        >
          View my work
        </button>

        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/santiago-carbal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <img src="/assets/linkedin-logo.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/scarbal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <img src="/assets/github-mark-white.svg" alt="GitHub" className="w-6 h-6" />
          </a>
          <button
            onClick={() => copyToClipboard("santiago-carbal@hotmail.com", setCopiedEmail)}
            className="relative text-gray-400 hover:text-white transition-colors"
          >
            {copiedEmail ? (
              <Check size={22} className="text-green-400" />
            ) : (
              <Mail size={22} />
            )}
            {copiedEmail && (
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-green-400">
                Copied!
              </span>
            )}
          </button>
          <button
            onClick={() => copyToClipboard("+57 3024561901", setCopiedPhone)}
            className="relative text-gray-400 hover:text-white transition-colors"
          >
            {copiedPhone ? (
              <Check size={22} className="text-green-400" />
            ) : (
              <Phone size={22} />
            )}
            {copiedPhone && (
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-green-400">
                Copied!
              </span>
            )}
          </button>

        </div>

        <p className="text-gray-400 text-sm md:text-base">
          © 2025 Santiago Carbal. All rights reserved.
        </p>
      </section>

      <NavBar />

      {/* About Section */}
      <section
        ref={workSection}
        id="about"
        className="min-h-screen flex flex-col px-6 md:px-20 lg:px-40 py-16 md:py-24 space-y-16"
      >
        {/* Perfil + Botón CV */}
        <div className="flex flex-col md:flex-row h-full w-full justify-between items-center space-y-8 md:space-y-0 md:space-x-10">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5 text-center sm:text-left">
            <img
              src="./assets/PHOTO.jpeg"
              alt="photo"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
            />
            <div className="flex flex-col space-y-2">
              <h3 className="text-white font-bold text-lg md:text-xl">
                Santiago Carbal Martínez
              </h3>
              <p className="text-gray-300 text-base md:text-lg">
                Full Stack Developer
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/SANTIAGO_JOSE_CARBAL_MARTINEZ_CV(ING).pdf";
              link.download = "SantiagoCarbalCV.pdf";
              link.click();
            }}
            className="flex flex-row gap-2 bg-green-400 text-white text-base px-5 font-bold py-2 rounded-lg hover:bg-green-500">
            <Download size={18} /> Download My Resume
          </button>
        </div>

        {/* About Me */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl text-white font-bold">
            About Me
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Systems and Computer Science Engineer with a solid background in
            software development, cross-platform programming and 3D modeling.
            Hands-on experience in mobile, web, and virtual reality environments,
            with mastery of multiple modern frameworks. Oriented to problem
            solving, innovation and applying technology to improve processes.
          </p>
        </div>

        {/* Skills */}
        <div className="flex flex-col space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <SkillsCard img="/assets/dart-svgrepo-com.svg" title="Dart" alt="dart-logo" />
            <SkillsCard img="/assets/java-svgrepo-com.svg" title="Java" alt="java-logo" />
            <SkillsCard img="/assets/react.svg" title="React" alt="react-logo" />
            <SkillsCard img="/assets/tailwindcss-logotype-white.svg" title="Tailwind" alt="tailwind-logo" />
            <SkillsCard img="/assets/js-svgrepo-com.svg" title="JavaScript" alt="js-logo" />
            <SkillsCard img="/assets/unity-svgrepo-com.svg" title="Unity" alt="Unity-logo" />
            <SkillsCard img="/assets/firebase-svgrepo-com.svg" title="Firebase" alt="firebase-logo" />
            <SkillsCard img="/assets/typescript-official-svgrepo-com.svg" title="TypeScript" alt="typescript-logo" />
            
            <SkillsCard img="/assets/flutter-svgrepo-com.svg" title="Flutter" alt="Flutter" />
            <SkillsCard img="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" title="Node Js" alt="Node-logo" />
            <SkillsCard img="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg" title="MySQL" alt="MySQL-logo" />
            <SkillsCard img="/assets/ubuntu-svgrepo-com.svg" title="Linux Ubuntu" alt="Linux-logo" />

          </div>
        </div>

        {/* Education */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>

          <div className="space-y-2">
            <h3 className="text-white font-bold text-lg md:text-xl">
              Systems Engineering and Computer Science
            </h3>
            <p className="text-gray-300 text-base md:text-lg">
              Universidad del Norte 2020 - 2025
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-white font-bold text-lg md:text-xl">
              Occupational Health Technician
            </h3>
            <p className="text-gray-300 text-base md:text-lg">
              ITSA University Institution 2018 - 2019
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="min-h-screen flex flex-col px-6 md:px-20 lg:px-40 py-16 md:py-24 space-y-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold">My Projects</h2>
        <p className="text-gray-300 text-base md:text-lg max-w-2xl">
          A showcase of my key projects with descriptions, technologies used, and
          links to live demos or GitHub repositories.
        </p>

        <div className="flex flex-col gap-10">
          <ProjectCard
            img="/assets/ProcessVR.png"
            alt="VrImageProject"
            title="Process VR – (Unity + Blender)"
            description="Development of an interactive virtual environment of the university campus using 3D modeling in Blender and programming in Unity, allowing users to freely explore digital representations of campus buildings, classrooms, and outdoor areas. The project integrates realistic textures, lighting, and animations to enhance immersion, while Unity’s scripting tools enable interactive features such as navigation controls, information panels, and guided tours. This virtual environment serves as an educational and promotional tool, providing students, visitors, and staff with an engaging and accessible way to experience the university campus virtually."
            link=""
            Github="https://github.com/openlabun/UNT-VR"
            techs={["Unity", "XrToolkit", "Blender", "MetaQuest 2", "Oculus"]}
          />
          <ProjectCard
            img="/assets/OpenLab.png"
            alt="OpenlabImage"
            title="Mi Open Lab - React+Vite, FireBase & TailWind"
            description='Design and implementation of the frontend for the web platform "Mi Open" Lab of the Universidad del Norte, focused on creating an intuitive and responsive user interface that enhances the interaction between students, professors, and research projects. The development process involved using modern web technologies and frameworks to ensure optimal performance, accessibility, and scalability. The platform allows users to manage projects, collaborate in real time, and visualize data effectively, contributing to a more dynamic and efficient research environment within the university.'
            link=""
            Github="https://github.com/scarbal/Parcial2-FrontEnd"
            techs={["React", "Firebase", "TailWind"]}
          />
          <ProjectCard
            img="/assets/way2go.png"
            alt="Way2goImage"
            title="Mobile Ordering App"
            description="Complete mobile ordering app development, using Flutter for business logic and FlutterFlow for interface design, integrating a smooth and efficient user experience for both customers and delivery personnel. The application includes key functionalities such as user authentication, order creation and tracking, real-time status updates, and delivery management. Firebase was used for backend services, including authentication, cloud storage, and database synchronization. This project demonstrates the integration of low-code design tools with custom Flutter logic to deliver a scalable, cross-platform mobile solution."
            link="https://domicilios-uninorte-rvh65d.flutterflow.app/clientPageOriginal"
            Github=""
            techs={["Flutter", "Fluterrflow", "Firebase", "Android Studio"]}
          />
          <ProjectCard
            img="/assets/registroCreditos.png"
            alt="registroCreditosImage"
            title="Credit Management Dashboard"
            description="This page provides an interface for registering and managing credit records within the system. At the top, users can fill out a form to register new credits, entering details such as the credit name, amount, interest rate, term (in months), and the associated company.
Below the form, a filter and sorting section allows users to search credits by ID, name, or company, and organize them using different criteria.
The data table displays all registered credits with key information including the client’s name, credit amount, term duration, interest rate, company name, and registration date.
The design follows a dark theme with yellow highlights, providing a clean and modern user experience focused on readability and functionality."
            link="https://creditos-fy-a.vercel.app/"
            Github="https://github.com/scarbal/CreditosFyA.git"
            bgcolor="#101828"
            techs={["React+vite", "Express", "NodeJs", "MySQL", "TailWind"]}

          />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="w-full border-t border-gray-700 mt-20 py-10 bg-[#0f172a]">
        <div className="flex flex-col md:flex-row justify-between items-center px-10 md:px-40 space-y-5 md:space-y-0">

          <p className="text-gray-400 text-sm md:text-base">
            © {new Date().getFullYear()} <span className="text-white font-semibold">Santiago Carbal</span>. All rights reserved.
          </p>

          <div className="flex space-x-6 items-center">
            <a
              href="https://github.com/scarbal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <img src="/assets/github-mark-white.svg" alt="GitHub" className="w-6 h-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/santiago-carbal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <img src="/assets/linkedin-logo.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>

            <button
              onClick={() => copyToClipboard("santiago-carbal@hotmail.com", setCopiedEmail)}
              className="relative text-gray-400 hover:text-white transition-colors"
            >
              {copiedEmail ? (
                <Check size={22} className="text-green-400" />
              ) : (
                <Mail size={22} />
              )}
              {copiedEmail && (
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-green-400">
                  Copied!
                </span>
              )}
            </button>
            <button
              onClick={() => copyToClipboard("+57 3024561901", setCopiedPhone)}
              className="relative text-gray-400 hover:text-white transition-colors"
            >
              {copiedPhone ? (
                <Check size={22} className="text-green-400" />
              ) : (
                <Phone size={22} />
              )}
              {copiedPhone && (
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-green-400">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
