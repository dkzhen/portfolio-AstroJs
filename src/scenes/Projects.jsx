import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { projectData } from "../utils/constant";
import Project from "../components/Project";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          All projects created are based on their own desires and also their own
          innovations in the learning process. as a self-reward and personal
          portfolio.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectData.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              desc={project.desc}
              img={project.img}
              web={project.web}
              git={project.git}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
