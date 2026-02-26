import { useState } from "react";

function Skills() {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <section className="card skills-section">

      {/* Toggle Button */}
      <button
        className="btn"
        onClick={() => setShowSkills(!showSkills)}
      >
        {showSkills ? "Hide Skills" : "Show Skills"}
      </button>

      {/* Only show skills if true */}
      {showSkills && (
        <>
          <h1>SKILLS</h1>

          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>

            <li>
              Web Development
              <ul>
                <li>
                  Frontend
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                </li>
                <li>Backend</li>
              </ul>
            </li>
          </ul>
        </>
      )}

    </section>
  );
}

export default Skills;
