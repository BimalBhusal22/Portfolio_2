import ProjectsSection1 from "./ProjectsSection1";
import ProjectsSection2 from "./ProjectsSection2";
import ProjectsSection3 from "./ProjectsSection3";

const Projects = () => {
  return (
    <div className="">
      <div className=" font-['Monoton'] text-[#640C19] text-[calc(10px+2.5vw)] uppercase text-center pb-10">
        Projects
      </div>
      <div className=" flex flex-wrap justify-evenly items-center">
        <ProjectsSection1/>
        <ProjectsSection2/>
        <ProjectsSection3/>
      </div>
    </div>
  );
};
export default Projects;
