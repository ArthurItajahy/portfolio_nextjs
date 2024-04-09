"use client"
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';


import { styles } from "../styles";


import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import  github2  from "./github.png";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden justify-center`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[10.75] bg-gradient-to-br from-green-900 via-green-600 to-green-200  p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>"A hero is not the one who never falls. He is the one who gets up, again and again, never losing sight of his dreams" <br/>- Rock Lee</p>
        <h3 className={styles.sectionHeadText}>Thank you for see this work.</h3>
           <p className={styles.sectionSubText}>Made By DEV.AI</p>
         <div className='gap-3 inset-2  flex justify-left mt-2 card-img_hover'>
            <div
              onClick={() => window.open('https://github.com/ArthurItajahy', "_blank")}
              className='black-gradient w-16 h-16 rounded-full flex justify-center items-center cursor-pointer'
            >
              <Image
                src={github2}
                alt='source code'
                className='w-14 h-16 object-contain'
              />
            </div>
            
            
          </div>
           


    
      </motion.div>

     
    </div>
  );
};

export default SectionWrapper(Contact, "thanks");