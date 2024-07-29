import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import dodImage from "./dod.JPG";

const App = () => {
  return (
    <section className={"container"}>
      <Card />
    </section>
  );
};

const Card = () => {
  return (
    <div
      className={"card mt-5 bg-light"}
      style={{ width: "100%", maxWidth: "500px", border: "2px solid black" }}
    >
      <Image />
      <div className={"card-body"}>
        <h2 className={"card-title"}>Ahmed Hossam</h2>
        <p>
          A fullstack web developer with React and node.js with express and
          nest.js with both SQL and noSql databases
        </p>
        <Skill name="HTML+CSS" bgColor="#16C7A6" />
        <Skill name="JavaScript" bgColor="#A216C7" />
        <Skill name="React" bgColor="#DDA822" />
        <Skill name="Node.js" bgColor="#57A505" />
        <Skill name="Express.js" bgColor="#50C716" />
        <Skill name="Nest.js" bgColor="#C7166C" />
      </div>
    </div>
  );
};

const Image = () => {
  return (
    <img
      className={"card-img-top img-fluid"}
      src={dodImage}
      alt="dod"
      style={{ height: "auto", maxHeight: "400px", objectFit: "cover" }}
    />
  );
};

const Skill = (props) => {
  return (
    <div
      className={"m-1"}
      style={{
        display: "inline-block",
        borderRadius: "5px",
        padding: "2px 30px",
        backgroundColor: `${props.bgColor}`,
      }}
    >
      <b>{props.name}</b>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);