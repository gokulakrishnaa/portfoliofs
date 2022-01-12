import "./Projects.css";
import { Project } from "./Project.js";

export function Projects() {
  const projectDetails = [
    {
      id: 1,
      title: "React Social",
      desc: "Social Media MERN stack Application created using React JS, Node JS, MongoDB (Database) & Socket.io for instant, private Chat feature of this application.",
    },
    {
      id: 2,
      title: "Amazon Clone",
      desc: "Amazon Clone is a Full stack Application with full E-Commerce functionality & Payment gateway. This Application is the simplified version which clones Amazon's important functionalities. Users can cand checkout with payment option created using Stripe payment gateway.",
    },
    {
      id: 3,
      title: "Money Manager",
      desc: "Money Manager application is a MERN stack application created in the Hackathon conducted by GUVI. This Application tracks the user income and expenses and maintains a collective record in the MongoDB database.",
    },
    {
      id: 4,
      title: "Book Club App",
      desc: "Book Club app is a MERN stack CRUD Application with book adding, like & dislike features. Simple app where one can view the description about their favourite books and can also add books to this Book Club App.",
    },
  ];
  return (
    <div className="projects">
      <h2 className="projects-header">My Projects</h2>
      <div className="project-cards">
        {projectDetails.map((item) => (
          <Project key={item.id} title={item.title} desc={item.desc} />
        ))}
      </div>
    </div>
  );
}
