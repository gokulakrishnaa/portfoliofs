import "./About.css";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { SiMongodb, SiFirebase, SiNetlify, SiHeroku } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { BsFillTelephoneFill, BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export function About() {
  return (
    <div className="about">
      <div className="about-top">
        <h2>About : </h2>
        <p className="intro-para">
          Hello! I'm Gokulakrishnaa Paramasivam, Software Engineer who loves to
          transform ideas into reality using code. Full-Stack Web Developer with
          experience creating custom websites with ReactJs, Node.js, Express &
          MongoDB. Having a great passion in both back-end and front-end
          development, I can create API's and UI's. I have worked on many real
          life projects and find myself capable enough to handle the project
          requirements and situation well. I love to learn new things and
          experiment with new technologies. Determined hardworker and quick
          learner describes me really well. Apart from all this I love reading
          Books & listening to Music. I play Keyboard & Guitar.
        </p>
      </div>
      <div className="about-bottom">
        <h2>Technical Skills : </h2>
        <p className="intro-bot">
          These are some of the major languages, technologies, tools and
          platforms I have worked with:
        </p>
        <div className="icon-container">
          <div className="icon">
            <div className="ilogo">
              <IoLogoJavascript size="60px" color="lawngreen" />
            </div>
            <div className="iname">Javascript</div>
          </div>
          <div className="icon">
            <div className="ilogo">
              <FaReact size="60px" color="blue" />
            </div>
            <div className="iname">React</div>
          </div>
          <div className="icon">
            <div className="ilogo">
              <FaNodeJs size="60px" color="limegreen" />
            </div>
            <div className="iname">NodeJS</div>
          </div>
          <div className="icon">
            <div className="ilogo">
              <SiMongodb size="60px" color="green" />
            </div>
            <div className="iname">MongoDB</div>
          </div>
          <div className="icon">
            <div className="ilogo">
              <AiFillHtml5 size="60px" color="red" />
            </div>
            <div className="iname">HTML</div>
          </div>
          <div className="icon">
            <div className="ilogo">
              <IoLogoCss3 size="60px" color="blue" />
            </div>
            <div className="iname">CSS</div>
          </div>
          <div className="icon">
            <div className="ilogo">
              <FaAws size="60px" />
            </div>
            <div className="iname">AWS</div>
          </div>
          <div className="icon">
            <div className="ilogo">
              <BsGithub size="60px" color="darkslategray" />
            </div>
            <div className="iname">Github</div>
          </div>
          <div className="icon">
            <div className="ilogo">
              <SiNetlify size="60px" color="blueviolet" />
            </div>
            <div className="iname">Netlify</div>
          </div>
          <div className="icon">
            <div className="ilogo">
              <SiHeroku size="60px" color="darkslateblue" />
            </div>
            <div className="iname">Heroku</div>
          </div>
          <div className="icon">
            <div className="ilogo">
              <SiFirebase size="60px" color="orange" />
            </div>
            <div className="iname">Firebase</div>
          </div>
        </div>
      </div>
      <div className="contact">
        <h2>Contact : </h2>
        <div className="cont-container">
          <div className="contact-details">
            <div className="clogo">
              <BsFillTelephoneFill size="30px" />
            </div>
            <div className="cname">9944340865</div>
          </div>
          <div className="contact-details">
            <div className="clogo">
              <FiMail size="30px" />
            </div>
            <div className="cname">gokulakrishnaapsivam@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
