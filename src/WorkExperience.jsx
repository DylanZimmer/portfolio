import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function WorkExperience() {
    const navigate = useNavigate();
    const [activeCard, setActiveCard] = useState(null);

    return (
        <div className="experience-page">
            <div className="top-container">
                <div className="back-link" onClick={() => navigate("../")}>Back</div>
                <div className="top-header">Work Experience</div>
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
                    className={`experience-box ${activeCard === 'bny' ? 'expanded' : activeCard ? 'shrunk' : ''}`}
                    onClick={() => setActiveCard(activeCard === 'bny' ? null : 'bny')}
                >
                    {activeCard === 'bny' ? (
                        <div className="box-back">
                            <div className="card-header">
                                <h3>BNY</h3>
                                <div className="card-header-right">
                                    <h2>Full-Stack Developer</h2>
                                    <div className="card-header-date">08/2022 - 03/2025</div>
                                </div>
                            </div>
                            <hr />
                            <div className="card-description">
                                <ul>
                                    <li>Advanced from intern to full-time developer, developing and maintaining applications used by 75+ client-facing employees within the Wealth Management department</li>
                                    <li>Developed and maintained applications with Java/Spring Boot backend services and RESTful APIs, alongside Angular/TypeScript frontends, using Maven for build management and OAuth for access control</li>
                                    <li>Diagnosed and resolved production issues by analyzing Splunk logs and tracing application behavior across frontend and backend systems, identifying root causes and implementing fixes</li>
                                    <li>Collaborated with business stakeholders and other developers to translate requirements into maintainable, production-ready features within an Agile environment</li>
                                    <li>Took ownership of feature development from requirements through implementation, testing, deployment, and production support</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="card-technologies-container">
                                <strong>Technologies:</strong><br /> 
                                <div className="card-technologies">Java, Spring Boot, Angular, TypeScript, SQL, Pentaho (PDI), ColdFusion</div>
                            </div>
                        </div>
                    ) : (
                        <div className="box-front">
                            <div className="company-name">BNY</div>
                            <img src="/visuals/bny-logo.png" alt="BNY Logo" />
                            <div className="role-title">Full-Stack Developer</div>
                        </div>
                    )}
                </motion.div>
                <motion.div
                    className={`experience-box ${activeCard === 'mtsinai' ? 'expanded' : activeCard ? 'shrunk' : ''}`}
                    onClick={() => setActiveCard(activeCard === 'mtsinai' ? null : 'mtsinai')}
                >
                    {activeCard === 'mtsinai' ? (
                        <div className="box-back">
                            <div className="card-header">
                                <h3>Mt. Sinai Pinto Labs</h3>
                                <div className="card-header-right">
                                    <h2>Data Intern</h2>
                                    <div className="card-header-date">03/2020 - 02/2021</div>
                                </div>
                            </div>
                            <hr />
                            <div className="card-description">
                                <ul>
                                    <li>Queried and analyzed large research datasets using SQL, ensuring accurate extraction and reporting of key data</li>
                                    <li>Maintained and validated research datasets supporting a large-scale genetics research initiative</li>
                                    <li>Developed R scripts to analyze phenotypic data using Fisher's two-tailed exact tests, supporting accurate statistical processing of research datasets</li>
                                    <li>Investigated research datasets for inconsistencies and trends, improving data quality and usability for research teams</li>
                                    <li>Contributed to an R Shiny application using REDCap to organize and visualize RNA sequencing data, improving data accessibility and consistency</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="card-technologies-container">
                                <strong>Technologies:</strong><br /> 
                                    <div className="card-technologies">SQL, R, R Shiny, REDCap</div>
                            </div>
                        </div>
                    ) : (
                        <div className="box-front">
                            <div className="company-name">Mt. Sinai Pinto Labs</div>
                            <img src="/visuals/mt-sinai-logo.png" alt="Mt Sinai Logo" />
                            <div className="role-title">Data Intern</div>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

export default WorkExperience;