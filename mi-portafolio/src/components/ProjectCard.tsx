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
  techs
}: ProjectCardProps) {
  return (
    <div className="flex rounded-lg space-x-7 bg-[#1c2127] w-full aspect-[2/1] overflow-hidden shadow-lg shadow-gray-300">
      <img
        src={img}
        alt={alt}
        style={{ backgroundColor: bgcolor || "white" }}
        className="aspect-[7/8] object-contain"
      />
      <div className="flex flex-col justify-between p-10">
        <div className="flex flex-col space-y-5 py-5">
          <h2 className="text-white text-xl font-bold">{title}</h2>
          <p className="text-gray-300 text-lg">{description}</p>

          {/* 👇 lista de tecnologías */}
          {techs && techs.length > 0 && (
            <ul className="flex flex-wrap gap-3 mt-3">
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

        <div className="flex space-x-15">
          {link && (
            <button
              onClick={() => window.open(link, "_blank")}
              className="bg-blue-500 hover:bg-blue-600 rounded-lg px-6 py-2"
            >
              Live Demo
            </button>
          )}
          {Github && (
            <a
              href={Github}
              target="_blank"
              className="flex items-center gap-2 text-gray-300 text-lg hover:text-white"
            >
              GitHub <ExternalLink size={20} strokeWidth={2} className="text-gray-300" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
