
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
                                <h3>Software Engineering Projects</h3>
                                <a href="https://github.com/DylanZimmer/software-engineering-projects/tree/main" target="_blank" rel="noopener noreferrer">Projects</a>
                            </div>
                            <hr />
                            <div className="card-description">
                                <ul>
                                    <li>Built Workspace, an AI-powered research workspace using Gemini that generates structured objects, stores notes, and supports specialized model instances for domain-specific tasks</li>
                                    <li>Developed Surgery Status in a Chingu collaboration, a hospital dashboard with role-based access allowing guests, surgeons, and admins to manage patient status data</li>
                                    <li>Created Data Exploration, a tool for programmatic dataset inspection and pattern discovery through interactive queries and analysis workflows</li>
                                    <li>Designed a Tableau data visualization dashboard to explore trends in structured datasets, highlighting statistical patterns through interactive visualizations</li>
                                    <li>Implemented Firebase-backed NoSQL schemas, authentication, and modular React components across projects to support secure and scalable applications</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="card-technologies-container">
                                <strong>Technologies:</strong><br /> 
                                <div className="card-technologies">React, Javascript, Firebase, Tailwind, Gemini, Tableau</div>
                            </div>
                        </div>
                    ) : (
                        <div className="box-front">
                            <div className="company-name">Software Engineering Projects</div>
                            <img src="/visuals/swExp.jpg" alt="Software Engineering Experience" />
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
                                <h3>Computational Math Research</h3>
                                <a href="https://github.com/DylanZimmer/math-research" target="_blank" rel="noopener noreferrer">Projects</a>
                            </div>
                            <hr />
                            <div className="card-description">
                                <ul>
                                    <li>Built computational pipelines to explore large combinatorial structures and unknown Ramsey numbers, generating and analyzing massive graph datasets efficiently</li>
                                    <li>Developed a modular knot invariant pipeline integrating databases with automated invariant computations using SageMath</li>
                                    <li>Designed SQLite-based data storage and management systems for graphs and knot invariants to enable reproducible experiments and structured querying</li>
                                    <li>Automated workflow for generating, analyzing, and storing results, reducing manual overhead and allowing scalable computational experimentation</li>
                                    <li>Emphasized clean code architecture, modular functions, and reproducibility, bridging theoretical mathematics with computational tooling</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="card-technologies-container">
                                <strong>Technologies:</strong><br /> 
                                <div className="card-technologies">Python, SQLite, SageMath</div>
                            </div>
                        </div>
                    ) : (
                        <div className="box-front">
                            <div className="company-name">Computational Math Research</div>
                            <img src="/visuals/math_research.png" alt="Math Research" />
                            <div className="role-title">Researcher</div>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

export default PersonalExperience;