
interface SkillsCardProps{
    img: string;
    title: string;
    alt: string;
}
export default function SkillsCard({ img, title, alt }: SkillsCardProps) {

return(
    <div className="flex flex-col items-center justify-center bg-[#1f2937] rounded-lg p-5 space-y-5">
        <img src={ img } alt={ alt } className="w-20 h-20" />
        <p className="text-white">{title}</p>
    </div>
);
}