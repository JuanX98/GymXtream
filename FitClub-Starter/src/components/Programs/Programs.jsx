import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="programs" id="programs">
      {/* header */}
      <div className="programs-header">
        <span className="stroke-text">Descubre tus</span>
        <span>programas</span>
        <span className="stroke-text">y transformate</span>
      </div>

      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
