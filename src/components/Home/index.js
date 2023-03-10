import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import NameImg from '../../assets/images/name-img.png'
import SplineScene from '../SplineScene'
import './index.scss'
import React from 'react';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = " María".split("")
    const jobArray = "Web developer.".split("")
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        return () => setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])


    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Hi,".split("")}
                    idx={11}
                    />
                    <br /> 
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"I'm".split("")}
                    idx={14}
                    />

                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={17}
                    />
                    <br />
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={jobArray}
                    idx={23}
                    />
                </h1>
                <h2>Web Applications Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

            <div className='canvas-container'>
                {windowSize.current[0] < 768 ? (
                    <img src={NameImg} alt="3D model made with Spline"  />         
              ) : (
                    <SplineScene url={'https://prod.spline.design/G2E5Gp1tTLVz1Ubr/scene.splinecode'} />
                )}
            </div>
            
        </div>
        <Loader type='pacman' />
        </>
    );
}

export default Home