import {navMenuList} from "../data/navigationData";

const Navigation = () => {
    return (
        <nav className="py-4 border-b border-zinc-800 shadow-md sticky top-0 z-10 bg-zinc-900/20 backdrop-blur-md">
            <p>Logo</p>
            <div>
                <ul>
                    {navMenuList.map(({title, href}) => (
                        <li key={href}>{title}</li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
