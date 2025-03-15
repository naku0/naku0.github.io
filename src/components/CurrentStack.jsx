import {ReactComponent as Rct} from "../assets/react.svg";
import {ReactComponent as Hsk} from "../assets/haskell.svg";

export const CurrentStack = () => {
    return (<main>
            <div className="stack">
                <div className="head stack">
                    <span className="rct"><Rct/></span>
                    <h2>My active stack:</h2>
                </div>
                <ul className="stack-ul">
                <li><p>frontend: HTML, CSS, JavaScript, TypeScript, SASS/SCSS, Tailwind</p></li>
                    <li><p>favorite frameworks are React and Next.js</p></li>
                    <li><p>backend: Java, Node.js</p></li>
                    <li><p>db: PostgreSQL</p></li>
                    <li><p>tools: Docker, Docker Compose, Git, Nginx, WildFly, Vite.js, Figma</p></li>
                </ul>
            </div>
            <div className="interests">
                <div className="head interests">
                    <span className="hsk"><Hsk/></span>
                    <h2>What am I doing right now?</h2>
                </div>
                <ul>
                    <li>learning Haskell</li>
                    <li>learning Angular</li>
                    <li>writing telegram bot in Prolog</li>
                </ul>
            </div>
        </main>
    );
}