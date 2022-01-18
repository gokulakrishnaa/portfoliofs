import "./App.css";
import { Home } from "./Home.js";
import { About } from "./About.js";
import { Projects } from "./Projects.js";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  return (
    <div className="App">
      <div className="topbar">
        <button onClick={() => history.push("/")} className="buttonclass">
          Home
        </button>
        <button onClick={() => history.push("/about")} className="buttonclass">
          About
        </button>
        <button
          onClick={() => history.push("/projects")}
          className="buttonclass"
        >
          Projects
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://drive.google.com/file/d/1uGP-RCCJTbzH8eu2lD_bv2nXDi5TwPSp/view?usp=sharing",
              "_blank"
            );
          }}
          className="buttonclass"
        >
          Resume
        </button>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
