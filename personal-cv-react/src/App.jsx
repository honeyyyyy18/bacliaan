import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  
const skills = [
"HTML",
"CSS",
"JavaScript",
"React"
];

const education = [
  { program: "KINDERGARTEN", school: "Indahag Elementary School", year: "2010" },
  { program: "ELEMENTARY", school: "Indahag Elementary School", year: "2018" },
  { program: "JUNIOR HIGH SCHOOL", school: "Indahag National High School", year: "2021" },
  { program: "SENIOR HIGH SCHOOL", school: "Indahag National High School", year: "2024" },
  { program: "COLLEGE", school: "USTP - CDO Campus", year: "2028" }
];

  return (
    <div className="container">
      <Header />
      <About />
      <Skills skills={skills} />
      <Education education={education} />
      <Contact />
    </div>
  );
}

export default App;
