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
      giturl:
        "https://docs.google.com/document/d/1J1E0Gx_JktdO6eTGhyuI-QJ0v2QHP5NyPuMCi4n01Y4/edit?usp=sharing",
      website: "https://cranky-sammet-877c33.netlify.app",
    },
    {
      id: 2,
      title: "Amazon Clone",
      image:
        "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2021/08/Amazon-Side-Hustle-Bundle.jpeg",
      desc: "Amazon Clone is a Full stack Application with full E-Commerce functionality & Payment gateway. This Application is the simplified version which clones Amazon's important functionalities. Users can cand checkout with payment option created using Stripe payment gateway.",
      giturl:
        "https://docs.google.com/document/d/1A7r6CXMxvxrwMxiB4aIBNdm2tidd5Bm2FmFo9zmN_m4/edit?usp=sharing",
      website: "https://priceless-einstein-7996ef.netlify.app",
    },
    {
      id: 3,
      title: "Money Manager",
      image:
        "https://media.istockphoto.com/vectors/programming-design-concept-vector-id947663966?b=1&k=20&m=947663966&s=612x612&w=0&h=MrPXhQekXbc4WY-9M3vLghIMEZt6Cis_7HL7GhJzvpA=",
      desc: "Money Manager application is a MERN stack application created in the Hackathon conducted by GUVI. This Application tracks the user income and expenses and maintains a collective record in the MongoDB database.",
      giturl:
        "https://docs.google.com/document/d/1UHIANUNVwRhBMdy9LhArLm4hK8RgCm0m_Iny_Ym2E6Q/edit?usp=sharing",
      website: "https://ecstatic-hamilton-ce64a3.netlify.app",
    },
    {
      id: 4,
      title: "Movies App",
      image:
        "https://verstiuk.com/wp-content/uploads/2019/12/Enterprise-Risks-Video-ProductonIllustration-Equipment.png",
      desc: "Movies app is a MERN stack CRUD Application with movie adding,removing, liking & disliking features. Simple app where one can view the description about their favourite movies and can also add movie to this Movies-App.",
      giturl:
        "https://docs.google.com/document/d/1_CS837ReQFqZzKGx9DQZWNl7XmqanzQ6frYkWbh2_EA/edit?usp=sharing",
      website: "https://happy-benz-6c1b46.netlify.app",
    },
    {
      id: 5,
      title: "User Auth App",
      image:
        "https://elements-cover-images-0.imgix.net/6e855666-1764-4019-be9e-998505bd3fdf?auto=compress&crop=edges&fit=crop&fm=jpeg&h=630&w=1200&s=fffbff5628fab9da0e2697d748790e92",
      desc: "Auth App is a Full Stack Authentication application created using React JS, Node JS,Nodemailer package & MongoDB (Database). Utilizes React functional components, React hooks and Context API, Material UI framework, APIs created using Node.js.",
      giturl:
        "https://docs.google.com/document/d/1YH7Kscj1htFEyiZBc-S_K1GQhX8Fr8h7QG95DQ9CVQ0/edit?usp=sharing",
      website: "https://focused-hopper-3aac6a.netlify.app",
    },
  ];
  return (
    <div className="projects">
      <h2 className="projects-header">My Projects</h2>
      <div className="project-cards">
        {projectDetails.map((item) => (
          <Project
            key={item.id}
            title={item.title}
            desc={item.desc}
            image={item.image}
            giturl={item.giturl}
            website={item.website}
          />
        ))}
      </div>
    </div>
  );
}
