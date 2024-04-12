import { motion } from "framer-motion";


import { staggerContainer } from "../utils/motion";

const Roller = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                transition={{

                    duration: 0.5,

                    ease: "easeInOut",

                }}

            >
                <span className='hash-span' id={idName}>
                    &nbsp;
                </span>

                <Component />
            </motion.section>
        );
    };

export default Roller;