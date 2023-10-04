import React from "react";
import Card from "./Card.js";


function Projects() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="text-center">
          <strong className="text-4xl font-semibold">Projects</strong>
          <p className="text-gray-600 text-lg mt-2 text-center">
            Check out our latest projects and contribute to open source on
            GitHub!
          </p>
        </div>

        <div className="flex justify-center flex-wrap mt-8">
          <Card
            image="/GDSC Project img.png"
            alt="Hacktoberfest"
            title="HacktoberFest GDSC JU"
            description="Join us in celebrating Hacktoberfest by contributing to our open source projects on GitHub!"
            link="https://github.com/GDSC-Jadavpur-University/"
            buttonText="GitHub"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
