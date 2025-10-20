
type navProps = {
    titulo: string;
    acercaDe: string;
    proyectos: string;
    ryc: string;
}

const NavBar: React.FC<navProps> = ({ titulo, acercaDe, proyectos, ryc }) =>{
    return(
<div className="flex justify-between bg-gray-500 p-4 s text-white">
    <div>
        <h1>{ titulo }</h1>
    </div>
    <div className="flex space-x-4">
    <button>{ acercaDe }</button>
    <button>{ proyectos }</button>
    <button>{ ryc }</button>
    </div>
</div>
    );
};
export default NavBar