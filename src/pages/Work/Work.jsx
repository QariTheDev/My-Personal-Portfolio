import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import Button from '@mui/material/Button';
import './Work.scss';
import { Fade } from '@mui/material';

const Work = () => {

  const [activeFilter, setActiveFilter] = useState('All');
  const [AnimateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState([]);
  const [works, setWorks] = useState([]);
  const [showCount, setShowCount] = useState(6);

  useEffect(() => {
    const query = '*[_type == "works"] | order(istop desc, _createdAt desc)';

    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
      })
  }, []);


  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  const handleViewMore = () => {
    setShowCount(showCount + (filterWork.length - showCount));
  }

  return (
    <>
      <h2 className='head-text' style={{ marginTop: '-1rem' }}>
        My Creative <span>Portfolio</span> <br />
      </h2>

      <div className="app__work-filter">
        {['All', 'Wix', 'React JS', 'Mobile', 'Discord', 'Games'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={AnimateCard}
        transition={{ duration: 0.5, type: 'tween' }}
        className="app__work-portfolio"
      >
        {(filterWork.slice(0, showCount)).map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className='app__work-hover app__flex'
              >
                <a href={work.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, .9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>

                <a href={work.codeLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, .9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>

              </motion.div>

            </div>

            <div className="app__work-content app__flex">
              {work.isTop && (
                <div className="app__work-top-badge">
                  ⭐
                </div>
              )}

              <h4 className='bold-text' style={{ color: 'black' }}>{work.title}</h4>
              <p className='p-text' style={{ marginTop: 10, color: 'black', textAlign: 'center' }}>{work.description}</p>

              <div className='app__work-tag app__flex'>
                <p className='p-text' style={{ color: 'black' }}>{work.tags[0]}</p>
              </div>
            </div>

          </div>

        ))}

      </motion.div>

      <motion.div
        animate={AnimateCard}
        transition={{ duration: 0.5, type: 'tween' }}
        className="app__work-portfolio"
      >
        {(showCount < filterWork.length && filterWork.length > 6) ?
          <Fade in={true} timeout={1000}>
            <Button className='button' variant="outlined" size="medium" onClick={handleViewMore}> View More </Button>
          </Fade>
          : null}

      </motion.div>

    </>
  )
}

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', 'app__aboutbg');
