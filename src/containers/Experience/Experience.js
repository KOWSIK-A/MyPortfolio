import React, {useContext} from "react";
import "./Experience.scss"; // Updated from "WorkExperience.scss" to "Experience.scss"
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {Experiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Experience() {
  // Changed from "WorkExperience" to "Experience"
  const {isDark} = useContext(StyleContext);
  if (Experiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="experience">
            {" "}
            {/* Changed from "workExperience" */}
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {Experiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
