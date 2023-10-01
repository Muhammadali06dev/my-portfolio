import Project from "../components/Project"
import { projects } from "../helpers/ProjectsList"

function Projects() {
   return (
      <section className="py-16">
         <div className="align-items">
            <h2 className="mb-[30px] text-3xl sm:mb-16 sm:text-[60px] font-bold text-white text-center ">Projects</h2>
            <ul className="flex justify-center flex-wrap gap-x-[30px] gap-y-[30px]">
               {projects.map((project, index) => {
                  return (
                     <Project
                        key={index}
                        title={project.title}
                        img={project.img}
                        index={index}
                     />
                  );
               })}
            </ul>
         </div>
      </section>
   )
}

export default Projects