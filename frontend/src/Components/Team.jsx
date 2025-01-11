import React from "react";
import { Link } from "react-router-dom";
import tech_team from "../assets/Tech_Team.jpg";
import photo_team from "../assets/Photo_Team.jpg";
import pr_Team from "../assets/PR_Team.jpg";
import content_Team from "../assets/Content_Team.jpg";
import design_Team from "../assets/Design_Team.jpg";

const OurTeam = () => {
  return (
    <div className=" flex flex-col items-center space-y-12 mt-10 mb-12">
      <h1
        className="text-6xl font-bold text-gray-800"
        style={{ fontFamily: "'Host Grotesk', sans-serif" }}
      >
        Our Team
      </h1>
      <section className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 rounded-3xl border-gray-300">
          <div className="bg-white border-black-800 border-2 rounded-lg shadow overflow-hidden">
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              <img
                src={content_Team}
                className="h-full w-full object-cover"
                alt="VIT Bhopal Logo"
              />
            </div>
            <h3
              className="text-2xl flex items-center justify-center font-semibold text-gray-800 p-4"
              style={{ fontFamily: "'Host Grotesk', sans-serif" }}
            >
              Content Team
            </h3>
          </div>
          <div className="bg-white border-black-800 border-2 rounded-lg shadow overflow-hidden">
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              <img
                src={design_Team}
                className="h-full w-full object-cover"
                alt="VIT Bhopal Logo"
              />
            </div>
            <h3
              className="text-2xl flex items-center justify-center font-semibold text-gray-800 p-4"
              style={{ fontFamily: "'Host Grotesk', sans-serif" }}
            >
              Design Team
            </h3>
          </div>
          <div className="bg-white border-black-800 border-2 rounded-lg shadow overflow-hidden">
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              <img
                src={photo_team}
                className="h-full w-full object-cover"
                alt="VIT Bhopal Logo"
              />
            </div>
            <h3
              className="text-2xl flex items-center justify-center font-semibold text-gray-800 p-4"
              style={{ fontFamily: "'Host Grotesk', sans-serif" }}
            >
              Photography Team
            </h3>
          </div>
          <div className="bg-white border-black-800 border-2 rounded-lg shadow overflow-hidden">
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              <img
                src={pr_Team}
                className="h-full w-full object-cover"
                alt="VIT Bhopal Logo"
              />
            </div>
            <h3
              className="text-2xl flex items-center justify-center font-semibold text-gray-800 p-4"
              style={{ fontFamily: "'Host Grotesk', sans-serif" }}
            >
              PR Team
            </h3>
          </div>
          <div className="bg-white border-black-800 border-2 rounded-lg shadow overflow-hidden">
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              <img
                src={tech_team}
                className="h-full w-full object-cover"
                alt="VIT Bhopal Logo"
              />
            </div>
            <h3
              className="text-2xl flex items-center justify-center font-semibold text-gray-800 p-4"
              style={{ fontFamily: "'Host Grotesk', sans-serif" }}
            >
              Technical Team
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
