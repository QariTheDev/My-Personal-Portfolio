import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Photography.scss';
import { urlFor, client } from '../../client';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { images } from '../../constants';
import Modal from 'react-modal';

const Photography = () => {

  const [photography, setPhotography] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [autoNext, setAutoNext] = useState(true);
  const [previewImage, setPreviewImage] = useState(null);
  const allImages = {
    beach: `${images.beach}`,
    fire: `${images.fire}`,
    mcdonalds: `${images.mcdonalds}`,
    wood: `${images.wood}`,
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex === photography.length - 1) ? 0 : currentIndex + 1);
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex === 0) ? photography.length - 1 : currentIndex - 1);
  }

  const openModal = (Image) => {
    setPreviewImage(Image);
  };

  const closeModal = () => {
    setPreviewImage(null);
  };

  useEffect (() => {
    const query = '*[_type == "photography"]';

    client.fetch(query)
    .then((data) => {
      setPhotography(data);
    })
  }, []);

  return (
    <>
    {photography.length && (
      <>
      <h2 className='head-text' style={{marginBottom: '1.5rem'}}>Some of my <span>Clicks</span></h2>  

      <div className="app__photography">
        
        <div className="app__photography-item app__flex">

          <div className="app__photography-shade left-shade">
            <HiChevronLeft onClick={prevSlide} className='arrow arrow-left'/>
          </div>

            {photography.map((photo, index) => (
              <>
                <motion.div className="app__photography-pics" 
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, type: 'tween' }}
                key={photo._id}
                >
                  {console.log(currentIndex + " " + index)}
                  <img src={urlFor(photo.imgUrl)} alt={photo.name} key={index} className={currentIndex === index ? 'slide' : 'slide-hidden'}/>
                  <h4 className={currentIndex === index ? 'text bold-text' : 'text-hidden'} style={{position: 'absolute'}}>{photo.name}</h4>
                </motion.div>
              </>
            ))}
          
          <div className="app__photography-shade right-shade">
            <HiChevronRight onClick={nextSlide} className='arrow arrow-right'/>
          </div>

        </div>

      <div className="app__photography-gallery">

        {Object.entries(allImages).map(([key, imageUrl]) => (
            <div
              className="app__photography-gallery-item"
              key={key}
              onClick={() => openModal(imageUrl)}
            >
              <img src={imageUrl} alt={key} width="600" height="400" />
            </div>
          ))}

        <Modal
            isOpen={previewImage !== null}
            onRequestClose={closeModal}
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
              },
              content: {
                maxWidth: '80%',
                maxHeight: '80%',
                margin: 'auto',
              },
            }}
          >
          <img
            className='app__photography-gallery-preview-img'
            src={previewImage}
            alt="Preview"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
          <button className="app__photography-gallery-btn" style={{display: 'flex'}} onClick={closeModal}>Close</button>
        </Modal>
        
      </div>

        <div className="btn">
            <p className="p-text" style={{textAlign: 'center', marginTop: '15px'}}>Like these? Visit my Photography Exclusive Page <br/> By clicking the button below</p>
            <a target="_blank" rel="noreferrer" href="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGdicW9vMWhsam1lejJ2Y2I2djR3dndqeGpkaXFzZTUwbHA0YTBieSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/iHD88spVFkL7mZakwa/giphy.gif">
              <button button style={{marginTop: '1rem'}}>View More</button>
            </a>
        </div>

      </div>

      </>
    )}
    </>
  )
}

export default AppWrap(MotionWrap(Photography, 'app__photography'), 'photography');