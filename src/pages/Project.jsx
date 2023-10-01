import { useParams } from "react-router-dom";
import { projects } from "../helper/projectList";
import gitHubIcon from "../assets/gitHub.svg"

const Project = () => {
   const { id } = useParams();
   const project = projects[id];
   console.log(project)

   return (
      <section className="py-10 sm:py-16">
         <div className="align-items">
            <div className="mx-auto max-w-[865px] flex flex-col items-center text-center">
               <h1 className="mb-[30px] text-[40px] sm:mb-[60px] sm:text-[60px] font-bold text-white text-center">{project.title}</h1>

               <img
                  src={project.img}
                  alt={project.title}
                  className="max-w-full mb-10 shadow-lg rounded-lg"
                  width="970"
               />

               <div className="mb-5 text-[22px] sm:mb-[30px] font-bold sm:text-xl ">
                  <p>Skills: {project.skills}</p>
               </div>

               <div className="flex gap-x-5 flex-col gap-y-4 sm:flex-row">

                  <a href={project.gitHubLink} target="_blank" rel="noreferrer" className="btn btn-primary">
                     <img src={gitHubIcon} alt="" />
                     GitHub repo
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-secondary px-14">
                     Demo
                  </a>
               </div>

            </div>
         </div>
      </section>
   );
}

export default Project;