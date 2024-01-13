"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section>
        <h2>About Me</h2>
        <p className='mb-3'>
            After graduation
        </p>

        <p>
            <span className="italic">When I'm not coding</span>, I enjoy playing
            Badminton, watching movies, and going to gym. I also enjoy{" "}
            <span className="font-medium">learning new things</span>. I am currently
            learning about{" "}
            <span className="font-medium">Next.js</span>. I'm also
            trying my best to enhance my <span className='italic'>problem solving skills</span>
        </p>
    </motion.section>
  )
}
