import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {

  return (
    <div className="app__social">
        <div> 
          <a href="https://twitter.com/wrhgye_bhai" target='_blank' rel="noreferrer">
            <BsTwitter />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/talha.iqbal.3511" target='_blank' rel="noreferrer">
            <FaFacebookF />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/talha_iq777/?hl=en" target='_blank' rel="noreferrer">
            <BsInstagram />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/muhammad-talha-iqbal-944839262/" target='_blank' rel="noreferrer"> 
            <BsLinkedin />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia;