import { PROJECTS } from '../constants';
import { motion } from "framer-motion";

const Projects = () => {

  return (
    <div className='border-b border-natural-900 pb-4'>
        <motion.h1 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100}}
            transition={{ duration: 0.5}}
            className='my-20 text-center text-4xl text-gray-700 dark:text-white'>Projects</motion.h1>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100}}
                    transition={{ duration: 1}}
                    className='w-full lg:w-1/4'>
                    <img 
                        src={project.image} 
                        alt={project.title}
                        width={150} 
                        height={150}
                        className='mb-6 rounded'
                        />
                    </motion.div>
                    <motion.div 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100}}
                        transition={{ duration: 1}}
                        className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold text-slate-600 dark:text-slate-100'>
                            {project.title} - {" "}
                            <a href={project.link} target='_blank'><span className='text-xs p-2 rounded-2xl bg-indigo-800 text-slate-600 dark:bg-sky-800 dark:text-slate-100'>Github</span></a>
                        </h6>
                        <p className='mb-4 text-neutral-400 text-slate-600 dark:text-slate-100'>{project.description}</p>
                            {project.technologies.map((tech, index) => (
                            <span key={index} className='mr-2 mt-4 rounded bg-neutral-500 px-2 py-1 text-sm font-medium text-orange-300 dark:text-purple-700 dark:bg-neutral-900'>
                                {tech}
                            </span>
            ))}
                    </motion.div>
                </div>
            ))}
        </div> 
    </div>
  )
}

export default Projects
