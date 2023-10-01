import { Link } from 'react-router-dom';


const Project = ({ title, img, index }) => {
   return (
      <Link to={`/project/${index}`}>
         <li className="max-w-[370px] bg-white shadow-md rounded-lg ">
            <img src={img} alt={title} className="rounded-lg" width="370" />
            <h3 className="pt-[15px] px-5 pb-[25px] font-bold text-blackpure text-[22px] sm:text-2xl">{title}</h3>
         </li>
      </Link>
   );
};

export default Project;