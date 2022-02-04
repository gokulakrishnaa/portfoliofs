import "./Home.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";

export function Home() {
  return (
    <div className="home">
      <div className="home-left">
        <div className="left-box">
          <h1 className="line-one">Hello!</h1>
          <h2 className="line-two">
            My Name is <span className="name">Gokulakrishnaa Paramasivam</span>
          </h2>
          <h2 className="line-three">I'm a Full Stack Web Developer</h2>
          <div className="react-icons">
            <FaReact size="45px" color="blue" className="react-icons-class" />
            <IoLogoJavascript
              size="45px"
              color="lawngreen"
              className="react-icons-class"
            />
            <FaNodeJs
              size="45px"
              color="limegreen"
              className="react-icons-class"
            />
            <SiMongodb
              size="45px"
              color="green"
              className="react-icons-class"
            />
          </div>
        </div>
      </div>
      <div className="home-right">
        <div className="right-box">
          <img
            className="right-img"
            src="https://devathon.com/wp-content/uploads/2020/03/ReactJS-development-company-devathon.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
