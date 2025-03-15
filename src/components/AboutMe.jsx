import pic from '../assets/IMG_20241102_184706_503.jpg'
import {ReactComponent as TG} from "../assets/tg.svg";
import {ReactComponent as GH} from "../assets/github-mark.svg";

export const AboutMe = () => {
    return (
        <div className="about">
            <div className="name">
                <h1>Hello, I'm Alex Mamontov</h1>
                <p>or naku0</p>
                <p><a href="https://itmo.ru/">ITMO</a>&nbsp;CSE '2027</p>
                <p>Russian: native language</p><p>English: upper-intermediate</p>
                <div className="social">
                    <h4>Social links:</h4>
                    <ul>
                        <li>
                            <a href="https://t.me/sniyaq">
                                <TG/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/naku0">
                                <GH/>
                            </a>
                        </li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className="picture">
                <img src={pic} alt="me"/>
            </div>
        </div>
    );
}