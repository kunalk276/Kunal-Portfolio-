import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Wakefit Furniture (E-Commerce)",
    year: "Oct 2024 – Dec 2024",
    align: "right",
    image: "../../public/images/wakefitbg.png",
    link: "https://github.com/kunalk276/Full-Stack-Wakefit-Furniture-BackEnd",
  },
  {
    name: "GoNow (Cab Booking)",
    year: "Sept 2023 – Nov 2023",
    align: "left",
    image: "../../public/images/gonow.png",
    link: "https://github.com/kunalk276/Go-Now-Car-Rental",
  },
  {
    name: "Restaurant Review Sentiment Analysis",
    year: "Nov 2023 – Mar 2024",
    align: "right",
    image: "../../public/images/sentiment-analysis.png",
    link: "https://github.com/kunalk276/restaurant-review-analysis",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
