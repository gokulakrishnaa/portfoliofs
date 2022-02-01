import "./Projects.css";
import { Project } from "./Project.js";

export function Projects() {
  const projectDetails = [
    {
      id: 1,
      title: "React Social",
      image:
        "https://elements-cover-images-0.imgix.net/37a16df5-688a-4d87-be17-77674edea0cd?auto=compress%2Cformat&fit=max&w=710&s=95b00303372f5c552fcbe365f9bd042c",
      desc: "Social Media MERN stack Application created using React JS, Node JS, MongoDB (Database) & Socket.io for instant, private Chat feature of this application.",
      gitfront: "https://github.com/gokulakrishnaa/social-app",
      gitback: "https://github.com/gokulakrishnaa/nsocial-app",
      projecttime: "Nov 2021 - Dec 2021",
      website: "https://cranky-sammet-877c33.netlify.app",
    },
    {
      id: 2,
      title: "E-Commerce",
      image:
        "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2021/08/Amazon-Side-Hustle-Bundle.jpeg",
      desc: "E-Commerce (Amazon Clone) is a Full stack Application with full E-Commerce functionalities & Payment gateway. Users can checkout with payment option created using Stripe payment gateway.",
      gitfront: "https://github.com/gokulakrishnaa/amazon-clone-project",
      gitback: "https://github.com/gokulakrishnaa/Money-Manager-Backend",
      projecttime: "Nov 2021 - Jan 2022",
      website: "https://peaceful-kare-99ecd4.netlify.app",
    },
    {
      id: 3,
      title: "Money Manager",
      image:
        "https://media.istockphoto.com/vectors/programming-design-concept-vector-id947663966?b=1&k=20&m=947663966&s=612x612&w=0&h=MrPXhQekXbc4WY-9M3vLghIMEZt6Cis_7HL7GhJzvpA=",
      desc: "Money Manager application is a MERN stack application created in the Hackathon conducted by GUVI. This Application tracks the user income and expenses and maintains a collective record in the MongoDB database.",
      gitfront: "https://github.com/gokulakrishnaa/money-app",
      gitback: "https://github.com/gokulakrishnaa/Money-Manager-Backend",
      projecttime: "Oct 2021 - Nov 2021",
      website: "https://ecstatic-hamilton-ce64a3.netlify.app",
    },
    {
      id: 4,
      title: "Movies App",
      image:
        "https://verstiuk.com/wp-content/uploads/2019/12/Enterprise-Risks-Video-ProductonIllustration-Equipment.png",
      desc: "Movies app is a MERN stack CRUD Application with movie adding,removing, liking & disliking features. Simple app where one can view the description about their favourite movies and can also add movie to this Movies-App.",
      gitfront: "https://github.com/gokulakrishnaa/my-app",
      gitback: "https://github.com/gokulakrishnaa/Nodeclass",
      projecttime: "Oct 2021",
      website: "https://happy-benz-6c1b46.netlify.app",
    },
  ];
  return (
    <div className="projects">
      <h2 className="projects-header">My Projects</h2>
      <div className="project-cred">
        <h4>Test Credentials :</h4>
        <p>User Email : testtest@gmail.com</p>
        <p>Password : test12345</p>
      </div>
      <div className="project-cards">
        {projectDetails.map((item) => (
          <Project
            key={item.id}
            title={item.title}
            desc={item.desc}
            image={item.image}
            gitfront={item.gitfront}
            gitback={item.gitback}
            projecttime={item.projecttime}
            website={item.website}
          />
        ))}
      </div>
    </div>
  );
}
