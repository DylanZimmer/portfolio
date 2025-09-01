import './App.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


function BasePage() {
    const navigate = useNavigate();
    const [workExpHover, setWorkExpHover] = useState(false);
    const [otherExpHover, setOtherExpHover] = useState(false);
    const [personalHover, setPersonalHover] = useState(false);
    const [videosLoaded, setVideosLoaded] = useState({ workExp: false, otherExp: false, personal: false });
    const [showResume, setShowResume] = useState(false);

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
        <div className={`resume-overlay ${showResume ? 'visible' : ''}`}>
            <button className="close-btn" onClick={() => setShowResume(false)}>×</button>
            <img src="/resume_1.png" alt="Resume Page 1" className="resume-frame" />
            <img src="/resume_2.png" alt="Resume Page 2" className="resume-frame" />
        </div>
        
        <div className="page">
            <div className="left">
                <div className="top-text" style={{ marginTop:"15%", marginLeft:"6%" }}>
                    <h1>Dylan Zimmer-Eads</h1>
                    <h2>Software Developer</h2>
                </div>

                <div className="bottom-buttons">
                    <a className="btn" href="https://github.com/DylanZimmer" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <div className="btn" onClick={() => setShowResume(true)}>Résumé</div>
                </div>
            </div>

            <div className="right">
                <motion.div className={`split-section ${workExpHover ? 'hovered' : ''}`}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    onMouseEnter={() => setWorkExpHover(true)}
                    onMouseLeave={() => setWorkExpHover(false)}
                    onTouchStart={() => handleTouchStart(setWorkExpHover)}
                    onTouchEnd={() => handleTouchEnd(setWorkExpHover)}
                    onClick={() => navigate('./WorkExperience')}
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
                </motion.div>
                <motion.div className={`split-section ${otherExpHover ? 'hovered' : ''}`}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    onMouseEnter={() => setOtherExpHover(true)}
                    onMouseLeave={() => setOtherExpHover(false)}
                    onTouchStart={() => handleTouchStart(setOtherExpHover)}
                    onTouchEnd={() => handleTouchEnd(setOtherExpHover)}
                    onClick={() => navigate('./OtherExperience')}
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
                        <h2 className="split-title">Other Experience</h2>
                    </div>
                </motion.div>
                <motion.div className={`split-section ${personalHover ? 'hovered' : ''}`}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    onMouseEnter={() => setPersonalHover(true)}
                    onMouseLeave={() => setPersonalHover(false)}
                    onTouchStart={() => handleTouchStart(setPersonalHover)}
                    onTouchEnd={() => handleTouchEnd(setPersonalHover)}
                    onClick={() => navigate('./Personal')}
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
                </motion.div>
            </div>
        </div>
    </div>
    )
}

export default BasePage;