import { useOutlet } from "react-router-dom";
import Header from "../Header/Header";
import Breadcrumb from "../Header/Breadcrumbs";
import { AnimatePresence, motion } from "framer-motion";

export default function Root() {
  const outlet = useOutlet();

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <div className="container w-auto w-12/12 md:w-10/12 mx-auto flex flex-col">
      <section className="mb-8">
        <Header>
          <Breadcrumb />
        </Header>
      </section>
      <AnimatePresence mode={"wait"}>
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          transition={{ duration: 0.125 }} // Set the duration to 0.5 seconds
          variants={pageVariants}
        >
          {outlet}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
