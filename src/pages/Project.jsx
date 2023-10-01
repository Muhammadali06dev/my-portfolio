import { useParams } from "react-router-dom";
import { projects } from "../helpers/ProjectsList";
import gitHubIcon from "../assets/gitHub.svg"

const Project = () => {
   const { id } = useParams();
   const project = projects[id];

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

               {project.gitHubLink && (
                  <a href={project.gitHubLink} target="_blank" rel="noreferrer" className="btn btn-primary bg">
                     <img src={gitHubIcon} alt="" />
                     GitHub repo
                  </a>
               )}
            </div>
         </div>
      </section>
   );
}

export default Project;