import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Azure Intern",
    company: "Microsoft Azure",
    date: "Dec 2023 - Apr 2024",
    responsibilities: [
      "Developed cloud-based Java applications.",
      "Implemented APIs using Spring Boot.",
      "Optimized application performance.",
      "Deployed & managed services on Azure.",
    ],
  },
  {
    job: "Full-Stack Developer (Training)",
    company: "Anudip Foundation",
    date: "Feb 2024 - Aug 2024",
    responsibilities: [
      "Built an e-commerce app using Java & Angular.",
      "Integrated authentication & RESTful APIs.",
      "Managed MySQL database operations.",
      "Implemented user-friendly UI/UX.",
    ],
  },
  {
    job: " Java Developer",
    company: "Self-Employed",
    date: "2024 - Present",
    responsibilities: [
      "Developed Java applications ",
      "Created REST APIs using Spring Boot.",
      "Built responsive UI with Angular.",
      "Deployed apps on Azure cloud.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => (
        <>
          <SingleExperience key={index} experience={experience} />
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
            </motion.div>
          )}
        </>
      ))}
    </div>
  );
};

export default AllExperiences;
