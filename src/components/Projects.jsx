/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Projects() {
    return (
        <div className="project-page">
            <div className="heading">
                <h2>// projects</h2>
                <Link to="/">
                    <i className="fas fa-angle-double-left fa-2x"></i>
                </Link>
            </div>

            <div className="projects">
                <div className="proj1">
                    <a href="https://outputs.kalgudi.com/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/images/kalgudi-outputs-store.png"
                            alt="website"
                        />
                    </a>
                    <div className="paras">
                        <p>E-commerce web and mobile application for Kalgudi Digital</p>
                        <p>I used Angular, In-house library using angular, Serverless, Amazon web services, Node, Jenkins, PostgreSQL</p>
                    </div>
                </div>
                <hr />
                <div className="proj2">
                    <div className="paras">
                        <p>Part-time Job posting Application </p>
                        <p>I used React, Node, Express, MongoDB, FireBase Authentication, Mongoose, vercel</p>
                    </div>
                    <a href="https://github.com/sunnithdev/konnecthru" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/images/konnecthru.png"
                            alt="website"
                        />
                    </a>
                </div>
                <hr />
                <div className="proj1">
                    <a href="https://store.kalgudi.com/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/images/kalgudi-store.png"
                            alt="website"
                        />
                    </a>
                    <div className="paras">
                        <p>E-commerce Web and mobile application for Kalgudi Digital</p>
                        <p>I used Angular, Node, PostgreSQL, Google Analytics, Jenkins, Serverless, AWS S3, AWS</p>
                    </div>
                </div>
                <hr />
                <div className="proj2">
                    <div className="paras">
                        <p>E-commerce mobile app for AgBSE</p>
                        <p>I used Ionic, Node, express, MySQL, Prisma, Github Actions, Netlify</p>
                    </div>
                    <a href="https://play.google.com/store/apps/details?id=com.agbse.agbse&hl=en_CA" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/images/agbse.png"
                            alt="website"
                        />
                    </a>
                </div>
                <hr />
                <div className="proj1">
                    <a href="https://www.thebreadessentials.com/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/images/shopify.png"
                            alt="website"
                        />
                    </a>
                    <div className="paras">
                        <p>E-commerce application for BreadEssentials company</p>
                        <p>I used Shopify tools, Zapier for delivery, google analytics</p>
                    </div>
                </div>
                <hr />
                <div className="proj2">
                    <div className="paras">
                        <p>Website for Rajyatantra non-profit organization</p>
                        <p>I used HTML, CSS, Bootstrap, Firebase Hosting</p>
                    </div>
                    <a href="https://rajyatantra.com/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/images/rajyatantra.png"
                            alt="website"
                        />
                    </a>
                </div>
                <hr />
                <div className="proj1">
                    <a href="http://tsadelhi.in/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/images/tsa-delhi.png"
                            alt="website"
                        />
                    </a>
                    <div className="paras">
                        <p>website for a Telugu student's organisation-Delhi</p>
                        <p>I used HTML, SCSS & JavaScript</p>
                    </div>
                </div>
                <hr />
                <div className="proj2">
                    <div className="paras">
                        <p>Wordpress website for Friendsfries</p>
                        <p>I used Wordpress, Google analytics.</p>
                    </div>
                    <a href="https://friendsfries.ca/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/images/friendsfries.png"
                            alt="website"
                        />
                    </a>
                </div>
                <hr />
                <div className="proj1">
                    <div className="paras">
                        <p>Checkout my github for more projects  <a href="https://friendsfries.ca/" target="_blank" rel="noopener noreferrer">Github</a></p>
                        
                        <p>I worked on Typescript, D3.js, SCSS, Figma, AdobeXD, Three.js etc</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Projects;
