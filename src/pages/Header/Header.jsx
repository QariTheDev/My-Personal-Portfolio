import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import './Header.scss'
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import Button from '@mui/material/Button';

const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
}

const Header = () => {

  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 0.5}}
        className='app__header-info'
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{marginLeft: 20}}>
              <p className='p-text' style={{color: 'black'}}>Hello, I am </p>
              <h1 className='head-text-name' style={{fontSize: '2.5rem'}}>Qari</h1>
              <p className='p-text' style={{color: 'black'}}>aka <strong style={{fontSize: '120%'}}>Talha</strong></p>
            </div>
          </div>

          <div className="tag-cmp app__flex">
          <h1 style={{fontSize: '1rem', color: 'var(--black-color)'}}>    
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "I'm a Web Developer💻",
                  1000,
                  "I'm a Bot Developer🤖",
                  1000,
                  "I'm a FreeLancer👩‍💻",
                  1000,
                  "I'm a Gamer🎮",
                  1000,
                  "I'm a PhotoGrapher📷",
                  1000
                ]}
                wrapper="span"
                speed={20}
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </h1>
          </div>
          
          <a href={images.cv} download="MyCV">
            <Button className='button' variant="outlined" size="medium"> Download CV </Button>
          </a>

        </div>
      </motion.div>

      <motion.div
        whileInView={{opacity: [0, 1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className='app__header-img'
      >
        <img src={images.profile} alt="profile_bg" />

      <motion.img
          whileInView={{scale: [0, 1]}}
          transition={{duration: 0.7, ease: 'easeInOut'}} 
          src={images.circle}
          alt="circle"
          className='overlay_circle'
          />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.node, images.react, images.valorant].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}

      </motion.div>
    </div>
  )
}

export default AppWrap( MotionWrap(Header, 'app__header'), 'home')
