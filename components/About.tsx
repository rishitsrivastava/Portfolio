"use client"

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function About() {

  const { ref, inView } = useInView();
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if(inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);


  return (
    <motion.section
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      ref={ref}
      initial = {{ opacity: 0, y: 100}}
      animate= {{ opacity: 1, y: 0}}
      transition= {{ delay: 0.175 }} 
      id= "about" >
        <SectionHeading>About Me</SectionHeading>
        <p className='mb-3'>
            During graduation my interest in programming was developed out of pure curiosity and also because of my peers.
            This kick-started my exploration in this field and eventually led me to dive deep into frontend development, especially React.
            Although I stated with Angular but as I realised the market trend was supporting React to a whole other level, therefore i too started exploring the <span className="font-medium">React.js</span> library/framework.
            I had developed couple of cool and dynamic applications, refining my skills and developin a genuine passion for coding.
        </p>

        <p>
          Gradually, I transitioned from a frontend developer to a full-stack enthusiast, exploring the parts of the MERN stack [MongoDB, Express.js, React, Node.js].
        </p>
           
        <p>
            <span className="italic">When I'm not coding</span>, I enjoy playing
            Badminton, watching movies, and going to gym. I also enjoy{" "}
            <span className="font-medium">learning new things</span>. I am currently
            learning about{" "}
            <span className="font-medium">Next.js</span>. I'm also
            trying my best to enhance my <span className='italic'>problem solving skills.</span>
        </p>

        <p>
          Currently, I'm exploring the world of <span className="font-medium">Next.js</span> and also diving deeper into <span className='font-medium'>javascript and typescript</span>. This alligns perfectly with my commintment to continuous learning and
          keeping myself up-to-date in the ever evloving programming landscape.
        </p>
    </motion.section>
  )
}
