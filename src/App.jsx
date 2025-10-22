import "./App.css"
import BoxComponent from "./components/dumb/box-component/box-component.jsx";
import BentoGrid from "./components/dumb/bento-grid/bento-grid.jsx";
import pic from "./assets/pic.jpg";
import github from "./assets/github.svg";
import telegram from "./assets/telegram.svg";

function App() {
    return (
        <div className="app">
            <BentoGrid columns={10} rows={3} gap={10}>
                <BoxComponent type="img" width={2} height={2}>
                    <img src={pic} alt="Icon"/>
                </BoxComponent>

                <BoxComponent type="text" width={4} height={1}>
                    <h3>Мамонтов Александр</h3>
                    <p>software engineer</p>
                </BoxComponent>

                <BoxComponent type="o-list" width={4} height={1}>
                    <div className="icon">
                        <h4>About me</h4>
                        <li>Frontend developer;</li>
                        <li>Functional programming fan;</li>
                        <li>Neurotechnologies enjoyer</li>
                    </div>
                </BoxComponent>
                <BoxComponent type="info" width={2} height={1}>
                    <div className="icon">ITMO Bachelor 27' CSE and Neurotechnologies</div>
                </BoxComponent>

                <BoxComponent type="img" width={1} height={1}>
                    <a href="https://github.com/naku0" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="github"/>
                    </a>
                </BoxComponent>

                <BoxComponent type="img" width={1} height={1}>
                    <a href="https://t.me/naku_work" target="_blank" rel="noopener noreferrer">
                        <img src={telegram} alt="telegram"/>
                    </a>
                </BoxComponent>

                <BoxComponent type="text" width={2} height={1}>
                    <h3>Email</h3>
                    <p>sniyaq@gmail.com</p>
                </BoxComponent>

                <BoxComponent type="u-list" width={2} height={2}>
                    <h4>Tech Stack</h4>
                    <li>TypeScript / JavaScript</li>
                    <li>React / Next.js</li>
                    <li>Scala / Haskell</li>
                    <li>Node.js / Java</li>
                    <li>Python / Julia</li>
                    <li>PostgreSQL / MongoDB</li>
                    <li>Docker / Kubernetes</li>
                </BoxComponent>

                <BoxComponent type="task" width={3} height={1}>
                    <h3><strong>Kamyu</strong></h3>
                    <p><strong>Writing Haskell Web Framework</strong></p>
                    <p>
                        <a href="https://github.com/naku0/Kamyu" className="task-link">github project</a>
                    </p>
                    <p>
                        <a href="/" className="task-link">Kamyu website SOON</a>
                    </p>
                </BoxComponent>

                <BoxComponent type="text" width={2} height={1}>
                    <h3>Languages</h3>
                    <p>Russian • English</p>
                </BoxComponent>

                <BoxComponent type="task" width={3} height={1}>
                    <h3><strong>Abyss</strong></h3>
                    <p><strong>Testing framework</strong></p>
                    <p>in development</p>
                </BoxComponent>
            </BentoGrid>
        </div>
    );
}
export default App;