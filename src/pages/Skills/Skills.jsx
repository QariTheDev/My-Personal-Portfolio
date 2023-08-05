import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import CircularProgressBar2 from './CircularProgressBar2'
import './Skills.scss';


const Skills = () => {

  const [ skills, setSkills ] = useState([]);
  const [ qualities, setQualities ] = useState([]);
  // eslint-disable-next-line
  const [ progress, setProgress ] = useState(0);

  // function timer(percentage) {
  //   setInterval(() => {
  //     setProgress((prevProgress) => (prevProgress >= percentage ? percentage : prevProgress + 1));
  //   }, 60);
  // }

  useEffect(() => {

    const skillsQuery = '*[_type == "skills"]';
    const qualitiesQuery = '*[_type == "qualities"]';

    client.fetch(skillsQuery)
    .then((data) => {
      setSkills(data);
    })

    client.fetch(qualitiesQuery)
    .then((data) => {
      setQualities(data);
    })

    // const timer = setInterval(() => {
    //   setProgress((prevProgress) => (prevProgress >= 80 ? 80 : prevProgress + 1));
    // }, 60);

  }, []);

  return (
  <>
    <h2 className='head-text'>Skills & <span>Qualities</span></h2>

    <div className="app__skills-container">
      <motion.div className='app__skills-list'>
        {skills.map((skill) => (
          <motion.div
          whileInView={{opacity: [0, 1]}}
          transition={{ duration: 0.5 }}
          className='app__skills-item app__flex'
          key={skill.name}
          >
            <div className="app__flex" style={{ backgroundColor: 'white'}}>
              <img src={urlFor(skill.icon)} alt={skill.name} />
            </div>
            <p className="p-text">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className='app__skills-qualities'>
        {qualities.map((quality) => (
          <motion.div 
           className='app__skills-qualities-item'
           key={quality.name}>
            <h3>{quality.name}</h3>
            <CircularProgressBar2 className="bar" value={quality.percent} style={{marginTop: '.5rem'}}/>
            <div/>
          </motion.div>
        ))}
      </motion.div>
      </div>  
  </>
  )
}

export default AppWrap (MotionWrap(Skills, 'app__skills'), 'skills');