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
                                    <div className="card-header-date">10/2025 - Present</div>
                                </div>
                            </div>
                            <hr />
                            <div className="card-description">
                            Collaborated with the company founder and original developer to finalize version one of the updated app in anticipation of increased traffic. Refactored core logic to enhance scalability and simplify ongoing maintenance ahead of hard launch.
                                <ul>
                                    <li>Implemented a NoSQL database to enable flexible data modeling and accelerate iteration on evolving app features</li>
                                    <li>Applied scalable design patterns and refactored core logic to improve maintainability and performance</li>
                                    <li>Resolved critical bugs and optimized workflows ahead of the app’s hard launch</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="card-technologies-container">
                                <strong>Technologies:</strong><br /> 
                                <div className="card-technologies">React, MongoDB, Typescript</div>
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
                            Maintained and expanded legacy code while creating new applications for the Wealth Management team. Worked in an Agile Scrum environment to deliver timely, high-quality solutions that supported critical client-facing systems.
                                <ul>
                                    <li>Built ETL processes to automate data flow</li>
                                    <li>Collaborated on experimental hedge overlay tool that leveraged historical investment data to strengthen portfolio recommendations</li>
                                    <li>Integrated OAuth-based security and Maven dependency management to sustain reliability of RESTful APIs</li>
                                    <li>Developed new landing pages within existing applications, extending functionality and improving usability for client-facing teams</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="card-technologies-container">
                                <strong>Technologies:</strong><br /> 
                                <div className="card-technologies">ColdFusion, Angular, Spring Boot, TypeScript, SQL, Pentaho (PDI), Java</div>
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
                            Contributed to the multi-institutional Autism Genome Project, the world’s largest study identifying genes associated with autism risk. Assisted with data analysis, reporting, and visualization, while supporting staff in database navigation and SQL usage to ensure accurate interpretation of research data.
                                <ul>
                                    <li>Created R scripts to streamline identification of correlating phenotypes by running Fisher's two-tailed exact tests on phenotypic datasets</li>
                                    <li>Developed SQL queries to analyze collected data and summarize trends</li>
                                    <li>Contributed to R Shiny application to leverage REDCap for visualizing RNA sequencing data and organizing large datasets</li>
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