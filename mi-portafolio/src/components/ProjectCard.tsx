import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  img: string;
  title: string;
  description: string;
  alt: string;
  link?: string;
  Github?: string;
  bgcolor?: string;
  techs?: string[];
}

export default function ProjectCard({
  img,
  title,
  description,
  alt,
  link,
  Github,
  bgcolor,
  techs,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col md:flex-row rounded-2xl bg-[#1c2127] w-full min-h-[320px] overflow-hidden shadow-lg shadow-gray-800 transition-transform hover:scale-[1.01]">
      {/* Imagen del proyecto */}
      <div className="flex justify-center items-center md:w-1/2 w-full bg-white" style={{ backgroundColor: bgcolor || "white" }}>
        <img
          src={img}
          alt={alt}
          className="object-contain w-3/4 h-3/4 md:w-[80%] md:h-auto"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-between p-8 md:w-1/2 w-full space-y-4">
        <div className="space-y-4">
          <h2 className="text-white text-2xl font-bold">{title}</h2>
          <p className="text-gray-300 text-base leading-relaxed">{description}</p>

          {/* Lista de tecnologías */}
          {techs && techs.length > 0 && (
            <ul className="flex flex-wrap gap-2 mt-2">
              {techs.map((tec) => (
                <li
                  key={tec}
                  className="bg-gray-700 text-white text-sm px-3 py-1 rounded-full"
                >
                  {tec}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Botones */}
        <div className="flex flex-wrap gap-4 mt-4">
          {link && (
            <button
              onClick={() => window.open(link, "_blank")}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-6 py-2 transition-all"
            >
              Live Demo
            </button>
          )}
          {Github && (
            <a
              href={Github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 text-lg hover:text-white transition-all"
            >
              GitHub <ExternalLink size={20} strokeWidth={2} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
