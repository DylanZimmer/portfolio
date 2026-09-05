
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function PersonalExperience() {
    const navigate = useNavigate();
    const [activeCard, setActiveCard] = useState(null);

    return (
        <div className="experience-page">
            <div className="top-container">
                <div classNamex="back-link" onClick={() => navigate("../")}>Back</div>
                <div className="top-header">Personal Experience</div>
                <div className="spacer"></div>
            </div>
            <div className="experience-container">
                <motion.div
                    className={`experience-box ${activeCard === 'swExp' ? 'expanded' : activeCard ? 'shrunk' : ''}`}
                    onClick={() => setActiveCard(activeCard === 'swExp' ? null : 'swExp')}
                >
                    {activeCard === 'swExp' ? (
                        <div className="box-back">
                            <div className="card-header">
                                <h3>Previous Projects</h3>
                                <a href="https://github.com/DylanZimmer/previous_projects" target="_blank" rel="noopener noreferrer">Projects</a>
                            </div>
                            <hr />
                            <div className="card-description">
                                <ul>
                                    <li>Developed a primitive AI-powered research workspace called TrackedSpace using Gemini, with structured data objects, notes, and specialized model instances</li>
                                    <li>Developed Surgery Status in a Chingu collaboration, a hospital dashboard with role-based access for managing patient status data</li>
                                    <li>Created an interactive Tableau dashboard for exploring trends and patterns in reported UFO sightings</li>
                                    <li>Developed React-based interfaces and integrated third-party services such as Gemini, Firebase, and Tableau across personal software projects</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="card-technologies-container">
                                <strong>Technologies:</strong><br /> 
                                <div className="card-technologies">React, JavaScript, Firebase, Gemini, Tableau</div>
                            </div>
                        </div>
                    ) : (
                        <div className="box-front">
                            <div className="company-name">Previous Projects</div>
                            <img src="/visuals/swExp.jpg" alt="Previous Experience" />
                            <div className="role-title">Developer</div>
                        </div>
                    )}
                </motion.div>
                <motion.div
                    className={`experience-box ${activeCard === 'knotresearch' ? 'expanded' : activeCard ? 'shrunk' : ''}`}
                    onClick={() => setActiveCard(activeCard === 'knotresearch' ? null : 'knotresearch')}
                >
                    {activeCard === 'knotresearch' ? (
                        <div className="box-back">
                            <div className="card-header">
                                <h3>KnotResearch</h3>
                                <a href="https://knotresearch.netlify.app/" target="_blank" rel="noopener noreferrer">KnotResearch</a>
                            </div>
                            <hr />
                            <div className="card-description">
                                <ul>
                                    <li>Building KnotResearch, a full-stack research application using React and TypeScript, Spring Boot, SageMath, and PostgreSQL that allows mathematical researchers to create and analyze datasets generated through sets of knot transformations called "experiments"</li>
                                    <li>Managed PostgreSQL infrastructure through Supabase, deployed the React frontend to Netlify and the Spring Boot backend to Render, and containerized SageMath with Docker for use by the backend</li>
                                    <li>Developed Spring Boot REST APIs to manage knot data, diagram transformations, experiments, and invariant calculations, integrating PostgreSQL persistence with SageMath-based mathematical computations</li>
                                    <li>Designed and debugged algorithms for mathematically correct knot representations, accounting for edge cases and invalid user inputs</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="card-technologies-container">
                                <strong>Technologies:</strong><br /> 
                                <div className="card-technologies">React, TypeScript, Spring Boot, PostgreSQL, SageMath, Docker, Supabase</div>
                            </div>
                        </div>
                    ) : (
                        <div className="box-front">
                            <div className="company-name">KnotResearch</div>
                            <img src="/visuals/knot_research.png" alt="KnotResearch" />
                            <div className="role-title">Developer</div>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

export default PersonalExperience;