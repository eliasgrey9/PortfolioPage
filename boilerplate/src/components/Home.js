import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="section1">
        <div className="navbar">
          <div className="logo"></div>
          <div className="navLinks">
            <div className="navLink">About</div>
            <div className="navLink">Projects</div>
            <div className="navLink">Contact</div>
          </div>
        </div>
        <div className="homeBody">
          <div className="heading">
            "CREATING AWESOME PROJECTS FOR THIS PERFECT AND ALWAYS EVOLVING
            WEB."
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="about">
          <div>
            <img
              className="profilePic"
              src="https://media-exp1.licdn.com/dms/image/D5603AQH1ZjeXWsK5AQ/profile-displayphoto-shrink_800_800/0/1668450897586?e=1675296000&v=beta&t=8WLZWkF36xY38FYFyETtuvh9R671t6lujszEaZG-2ds"
            ></img>
          </div>
          <div className="aboutText">
            <div>ABOUT</div>
            <p>
              Husband, father, navy veteran, business owner, and junior
              developer. Proudly served my country over the past decade in the
              US Military, I am ready to dive into a deep passion of
              mine...building things! As an enthusiast who enjoys 3d design, 3d
              printing, laser engraving, embroidery, CNC, and electronics.
              Software engineering was a natural next step as an innovator.
            </p>
            <p>
              Technologies I've learned: HTML, CSS, JavaScript, React, Redux,
              Express, Node, PostgreSQL, and Sequelize. Technologies I am
              currently pursuing and have great interest in: Python, React
              Native, AWS, Bootstrap and Remix. I love to build, I love to lead
              and help others succeed.
            </p>
          </div>
        </div>

        <div className="workHeader">
          <div>My Projects</div>
        </div>
        <div className="projectsDiv">
          <div>
            <img
              className="projectTile"
              src="https://img.freepik.com/free-vector/coming-soon-background-with-spot-light-design_1017-25515.jpg?w=2000"
            ></img>
          </div>
          <div>
            <img
              className="projectTile"
              src="https://img.freepik.com/free-vector/coming-soon-background-with-spot-light-design_1017-25515.jpg?w=2000"
            ></img>
          </div>
          <div>
            <img
              className="projectTile"
              src="https://img.freepik.com/free-vector/coming-soon-background-with-spot-light-design_1017-25515.jpg?w=2000"
            ></img>
          </div>

          <div>
            <img
              className="projectTile"
              src="https://img.freepik.com/free-vector/coming-soon-background-with-spot-light-design_1017-25515.jpg?w=2000"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
