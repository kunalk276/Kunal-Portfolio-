import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2024
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="6" text="Months" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="5+" text="Projects" />
      </div>
      <p className="text-center">
        Gaining hands-on experience in Java, Spring Boot, Angular, and Microsoft Azure 
        through real-world projects and an internship.
      </p>
      <ExperienceInfo number="Azure" text="Internship" />
    </div>
  );
};

export default ExperienceTopLeft;
