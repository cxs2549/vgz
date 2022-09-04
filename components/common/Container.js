import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, y: -20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
}

const Container = ({ children, classes }) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear" }}
      className={`max-w-6xl mx-auto p-5 xl:px-0 ${classes}`}
    >
      {children}
    </motion.div>
  )
}
export default Container
