
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
                <button className="back-link" onClick={() => navigate("../")}>Back</button>
                <div className="top-header">Personal Experience</div>
                <div className="spacer"></div>
            </div>
            <div className="experience-container">
                <motion.div
                    className={`experience-box ${activeCard === 'ogi' ? 'expanded' : activeCard ? 'shrunk' : ''}`}
                    onClick={() => setActiveCard(activeCard === 'ogi' ? null : 'ogi')}
                >
                    {activeCard === 'ogi' ? (
                        <div className="box-back">
                            <div className="card-header">
                                <h3>OGI</h3>
                                <div className="card-header-right">
                                    <h2>Full-Stack Developer</h2>
                                    <div className="card-header-date">10/2025 - 02/2026</div>
                                </div>
                                <a href="https://www.ortongillinghaminternational.org/" target="_blank" rel="noopener noreferrer">OGI</a>
                            </div>
                            <hr />
                            <div className="card-description">
                                <ul>
                                    <li>Developed a React/JavaScript application using Firebase to manage class registrations and registration history for teachers learning the Orton-Gillingham methodology</li>
                                    <li>Collaborated with the Product Owner to clarify ambiguous requirements, define application workflows, and translate them into implementable software features</li>
                                    <li>Designed Firestore data structures to support registration and historical workflows, adapting the data model as application requirements evolved</li>
                                    <li>Implemented automated tests to verify application behavior and detect regressions across releases</li>
                                    <li>Performed integration testing and QA across application workflows, identifying edge cases and tracing unexpected or incorrect behavior to its root cause</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="card-technologies-container">
                                <strong>Technologies:</strong><br /> 
                                <div className="card-technologies">React, JavaScript, Firebase, Firestore</div>
                            </div>
                        </div>
                    ) : (
                        <div className="box-front">
                            <div className="company-name">Orton Gillingham International</div>
                            <img src="/visuals/ogi-logo.png" alt="OGI Logo" />
                            <div className="role-title">Full-Stack Developer</div>
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