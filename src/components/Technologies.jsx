import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <motion.div 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100}}
      transition={{ duration: 1.5}}
      >
      <h1 className="my-20 text-center text-4xl text-gray-700 dark:text-white">Technologies</h1>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100}}
        transition={{ duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 dark:border-neutral-800">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVarients(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 dark:border-neutral-800">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div 
          variants={iconVarients(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 dark:border-neutral-800">
          <FaGithub className="text-7xl text-slate-800" />
        </motion.div>
        <motion.div 
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 dark:border-neutral-800">
          <RiTailwindCssFill className="text-7xl text-sky-600" />
        </motion.div>
        <motion.div 
          variants={iconVarients(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 dark:border-neutral-800">
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div 
          variants={iconVarients(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 dark:border-neutral-800">
          <FaDocker className="text-7xl text-sky-700" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Technologies
