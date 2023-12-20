import { motion } from "framer-motion";
const Project = ({ web, git, img, title, desc }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
      bg-slate-500 z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{desc}</p>
        <div className="flex flex-row mt-3 gap-3">
          <a href={web}>
            <img src="../assets/website.png" alt={title} />
          </a>
          <a href={git}>
            <img src="../assets/github.png" alt={title} />
          </a>
        </div>
      </div>
      <img src={`../assets/${img}`} alt={title} />
    </motion.div>
  );
};

export default Project;
