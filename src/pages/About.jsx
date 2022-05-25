import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function About() {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>This is a React app to leave feedback for a product or a service</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to='/' style={{ textDecoration: "none" }}>
            Back to home
          </Link>
        </p>
      </div>
    </Card>
  );
}

export default About;
