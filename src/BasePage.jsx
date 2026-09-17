import './App.css';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const MotionLink = motion.create(Link);

function BasePage() {
    const [workExpHover, setWorkExpHover] = useState(false);
    const [otherExpHover, setOtherExpHover] = useState(false);
    const [personalHover, setPersonalHover] = useState(false);
    const [videosLoaded, setVideosLoaded] = useState({ workExp: false, otherExp: false, personal: false });
    const [showResume, setShowResume] = useState(false);

    const resumeDialog = useRef(null);

    useEffect(() => {
        const dialog = resumeDialog.current;
        if (!showResume) return;
        dialog.showModal();
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            dialog.close();
            document.body.style.overflow = previousOverflow;
        };
    }, [showResume]);

    const handleVideoLoad = (videoType) => {
        setVideosLoaded(prev => ({ ...prev, [videoType]: true }));
    };
    
    const handleVideoError = (videoType) => {
        console.warn(`Video ${videoType} failed to load`);
    };

      // Handle touch events for mobile
    const handleTouchStart = (setHover) => {
        setHover(true);
    };

    const handleTouchEnd = (setHover) => {
        setTimeout(() => setHover(false), 100);
    };

    return (
    <div>
        <div className="background"></div>
        <dialog ref={resumeDialog} aria-label="Résumé" onCancel={() => setShowResume(false)} className={`resume-overlay ${showResume ? 'visible' : ''}`}>
            <button aria-label="Close résumé" className="close-btn" onClick={() => setShowResume(false)}>×</button>
            <img src="/resume_1.jpg" alt="Resume Page 1" className="resume-frame" />
            <img src="/resume_2.jpg" alt="Resume Page 2" className="resume-frame" />
        </dialog>
        
        <div className="page">
            <div className="left">
                <div className="top-text">
                    <h1>Dylan Zimmer-Eads</h1>
                    <h2>Software Developer</h2>
                </div>

                <div className="bottom-buttons">
                    <div className="button-layer">
                        <a className="btn" href="https://github.com/DylanZimmer" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <button className="btn" onClick={() => setShowResume(true)}>Résumé</button>
                    </div>
                </div>
            </div>

            <div className="right">
                <MotionLink className={`split-section ${workExpHover ? 'hovered' : ''}`}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    onMouseEnter={() => setWorkExpHover(true)}
                    onMouseLeave={() => setWorkExpHover(false)}
                    onTouchStart={() => handleTouchStart(setWorkExpHover)}
                    onTouchEnd={() => handleTouchEnd(setWorkExpHover)}
                    to="/WorkExperience"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <video className="video" autoPlay muted loop playsInline preload="metadata"
                        onLoadedData={() => handleVideoLoad('workExp')}
                        onError={() => handleVideoError('workExp')}
                        style={{opacity: videosLoaded.workExp ? 1 : 0.7, transition: 'opacity 0.3s ease'}}
                    >
                        <source src="/visuals/work.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="split-title-overlay">
                        <h2 className="split-title">Work Experience</h2>
                    </div>
                </MotionLink>
                <MotionLink className={`split-section ${otherExpHover ? 'hovered' : ''}`}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    onMouseEnter={() => setOtherExpHover(true)}
                    onMouseLeave={() => setOtherExpHover(false)}
                    onTouchStart={() => handleTouchStart(setOtherExpHover)}
                    onTouchEnd={() => handleTouchEnd(setOtherExpHover)}
                    to="/PersonalExperience"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <video className="video" autoPlay muted loop playsInline preload="metadata"
                        onLoadedData={() => handleVideoLoad('otherExp')}
                        onError={() => handleVideoError('otherExp')}
                        style={{opacity: videosLoaded.otherExp ? 1 : 0.7, transition: 'opacity 0.3s ease'}}
                    >
                        <source src="/visuals/other_experience.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="split-title-overlay">
                        <h2 className="split-title">Publically Accessible Code</h2>
                    </div>
                </MotionLink>
                <MotionLink className={`split-section ${personalHover ? 'hovered' : ''}`}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    onMouseEnter={() => setPersonalHover(true)}
                    onMouseLeave={() => setPersonalHover(false)}
                    onTouchStart={() => handleTouchStart(setPersonalHover)}
                    onTouchEnd={() => handleTouchEnd(setPersonalHover)}
                    to="/Personal"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <video className="video" autoPlay muted loop playsInline preload="metadata"
                        onLoadedData={() => handleVideoLoad('personal')}
                        onError={() => handleVideoError('personal')}
                        style={{opacity: videosLoaded.personal ? 1 : 0.7, transition: 'opacity 0.3s ease', objectPosition: 'top'}}
                    >
                        <source src="/visuals/about_me.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="split-title-overlay">
                        <h2 className="split-title">Personal</h2>
                    </div> 
                </MotionLink>
            </div>
        </div>
    </div>
    )
}

export default BasePage;
