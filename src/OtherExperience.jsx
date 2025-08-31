
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function OtherExperience() {
    const navigate = useNavigate();
    const [activeCard, setActiveCard] = useState(null);

    return (
        <div className="experience-page">
            <div className="top-container">
                <div className="back-link" onClick={() => navigate("../")}>Back</div>
                <div className="top-header">Other Experience</div>
                <div className="spacer"></div>
            </div>
            <div className="experience-container">
                <motion.div
                    className={`experience-box ${activeCard === 'chingu' ? 'expanded' : activeCard ? 'shrunk' : ''}`}
                    onClick={() => setActiveCard(activeCard === 'chingu' ? null : 'chingu')}
                >
                    {activeCard === 'chingu' ? (
                        <div className="box-back">
                            <div className="card-header">
                                <h3>Chingu</h3>
                                <a href="https://v56-tier2-team-25-chingu.vercel.app/" target="_blank" rel="noopener noreferrer">Surgery Status</a>
                            </div>
                            <hr />
                            <div className="card-description">
                                Chingu is a platform that hosts collaborative projects to bolster work experience. In this project, we were tasked with creating an app to display the current status of patients undergoing surgery. Our app, Surgery Status, provides a board showing all current patients by ID, allows guests to search for specific patients, and supports role-based access, allowing admins to update both statuses and information, while surgeons can update statuses only.
                                <ul>
                                    <li>Implemented NoSQL design on Firebase to allow role-based access and store patient information securely</li>
                                    <li>Led developer communication and finalized teammates’ pages to ensure a cohesive app design and a clean, consistent codebase</li>
                                    <li>I do need a third bullet</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="card-technologies-container">
                                <strong>Technologies:</strong><br /> 
                                <div className="card-technologies">React, Javascript, Firebase, Tailwind</div>
                            </div>
                        </div>
                    ) : (
                        <div className="box-front">
                            <div className="company-name">Chingu</div>
                            <img src="/visuals/chingu-logo.png" alt="chingu Logo" />
                            <div className="role-title">Developer</div>
                        </div>
                    )}
                </motion.div>
                <motion.div
                    className={`experience-box ${activeCard === 'workspace' ? 'expanded' : activeCard ? 'shrunk' : ''}`}
                    onClick={() => setActiveCard(activeCard === 'workspace' ? null : 'workspace')}
                >
                    {activeCard === 'workspace' ? (
                        <div className="box-back">
                            <div className="card-header">
                                <h3>Workspace</h3>
                                <a href="https://v56-tier2-team-25-chingu.vercel.app/" target="_blank" rel="noopener noreferrer">Workspace</a>
                            </div>
                            <hr />
                            <div className="card-description">
                                Workspace is a chat-based application powered by Gemini that saves customizable AI-written notes. Users can define object templates, generate objects from these templates, and train specialized model instances to act as experts. The project was inspired by my research on Ramsey numbers; for example, I use it to generate and analyze graphs, then guide the model in exploring patterns too large for humans to process directly.
                                <ul>
                                    <li>Integrated Gemini to enable individualized model instances tailored to user-defined tasks</li>
                                    <li>Built Firebase NoSQL database with authentication to securely store user data, objects, and notes</li>
                                    <li>Developed backend services to manage Gemini usage, enforce security, and maintain a clean codebase</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="card-technologies-container">
                                <strong>Technologies:</strong><br /> 
                                <div className="card-technologies">React, Javascript, Gemini, Firebase</div>
                            </div>
                        </div>
                    ) : (
                        <div className="box-front">
                            <div className="company-name">Workspace</div>
                            <img src="/visuals/workspace-logo.png" alt="Workspace Logo" />
                            <div className="role-title">Creator</div>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

export default OtherExperience;