import React from "react";
import { useHistory } from "react-router-dom";

const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <h1>Page about information</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil officiis
        recusandae perferendis! Similique maxime quidem voluptate provident
        ipsam earum corrupti.
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Back to ToDo's
      </button>
    </div>
  );
};

export default AboutPage;
