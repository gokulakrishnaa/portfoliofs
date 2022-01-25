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
                href={gitfront}
                target="_blank"
                rel="noreferrer"
                className="link-icon"
              >
                <img
                  className="gitscImg"
                  src="https://cdn-icons-png.flaticon.com/512/13/13706.png"
                  alt=""
                  title="frontend source code"
                />
              </a>
              <a
                href={gitback}
                target="_blank"
                rel="noreferrer"
                className="link-icon"
              >
                <img
                  className="gitbscImg"
                  src="https://cdn-icons-png.flaticon.com/512/263/263100.png"
                  alt=""
                  title="backend source code"
                />
              </a>
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
        </div>
      </div>
    </div>
  );
}
