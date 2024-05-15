import './style.css';

export const SideBar = () => {
    return (
        <aside className="sideBar">
            <div className="linkList">
                <a href="">Aktivní</a>
                <a href="">Neaktivní</a>
                <a href="">Čisti</a>
                STOPS
                <a href="">Newstop</a>
                <a href="">Station</a>
                <a href="">Čisti stop</a>
                LINKY
                <a href="">Analýza fresh</a>
                <a href="">Analýza regen</a>
                <a href="">Analýza new</a>
                TRASY
                <a href="">Chybějící trasy</a>
                <a href="">Chybějící koleje</a>
                <a href="">Detail úseku</a>
                <a href="">Čisti úseky</a>
                <a href="">Network analýza</a>
                EXPORT
                <a href="">Test export </a>
                <a href="">Výsledek kontroly</a>
            </div>
        </aside>
    );
};
