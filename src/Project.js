import "./Project.css";
import { FaGithub } from "react-icons/fa";
import { MdOutlinePageview } from "react-icons/md";

export function Project({ title, desc, image, giturl, website }) {
  const array = ["#react", "#nodejs", "#mongodb", "#html", "#css"];
  return (
    <div className="project">
      <div className="project-container">
        <div className="project-img">
          <img className="imgfile" src={image} alt="" />
        </div>
        <div className="project-details">
          <div className="project-details-header">
            <h4 className="project-title">{title}</h4>
            <div className="project-link">
              <a
                href={website}
                target="_blank"
                rel="noreferrer"
                className="link-icon"
              >
                <MdOutlinePageview size="32px" color="darkslategray" />
              </a>
              <a
                href={giturl}
                target="_blank"
                rel="noreferrer"
                className="link-icon"
              >
                <FaGithub size="30px" color="darkslategray" />
              </a>
            </div>
          </div>
          <p className="project-desc">{desc}</p>
          <div className="tags">
            {array.map((item) => (
              <div className="tagmap">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
