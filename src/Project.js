import "./Project.css";
import { GrView } from "react-icons/gr";

export function Project({
  title,
  desc,
  image,
  gitfront,
  gitback,
  projecttime,
  website,
}) {
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
                <GrView size="26px" title="view app" />
              </a>
            </div>
          </div>
          <p className="projecttime">{projecttime}</p>
          <p className="project-desc">{desc}</p>
          <div className="tags">
            {array.map((item) => (
              <div className="tagmap">{item}</div>
            ))}
          </div>
          <div className="class-button">
            <button title="frontend source code" className="code-button">
              <a href={gitfront} target="_blank" rel="noreferrer">
                Frontend
              </a>
            </button>
            <button title="backend source code" className="code-button">
              <a href={gitback} target="_blank" rel="noreferrer">
                Backend
              </a>
            </button>
            <button title="view app" className="code-button">
              <a href={website} target="_blank" rel="noreferrer">
                App
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
