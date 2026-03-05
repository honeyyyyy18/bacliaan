import { useState } from "react"; 

function Skills({ skills }) { 
  const [showSkills, setShowSkills] = useState(false); 
  
  return ( 
    <section className="card skills-section">  
    
    <button className="btn" onClick={() => setShowSkills(!showSkills)} 
      > {showSkills ? "Hide Skills" : "Show Skills"} </button> 
    
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
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                    ))
                  }
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