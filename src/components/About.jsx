/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Link } from 'react-router-dom';
import Footer from './Footer';

// Assuming icon CSS from Font Awesome is included globally in your project
function About() {
    return (
        <div className="about-page">
            <div className="heading">
                <h2 className="about">// about me</h2>
                <Link to="/">
                    <i className="fas fa-angle-double-left fa-2x"></i>
                </Link>
            </div>

            <div className="desc">
                <h3 className="summ">profile summary</h3>
                <p className="summ">
                    Hello! I'm Sunnith Kumar Chinthapally, a Software Design Engineer from Toronto with over 2.5 years of experience in web and mobile application development. My technical expertise spans JavaScript, TypeScript, Angular, React, Node, Express, MySQL, PostgreSQL and Ionic, with a strong focus on building dynamic, responsive user interfaces and robust backend solutions using Node.js and Express.
                    <br/>
                    <br/>
                    I've successfully led the development of cross-platform e-commerce applications that significantly increased user engagement and sales. My approach includes using advanced features like feature flags, Jest for effective rollout and testing, ensuring high reliability and user satisfaction.
                    <br/>
                    <br/>
                    Passionate about leveraging technology to solve real-world challenges, I am always exploring new technologies to enhance project outcomes. I'm eager to contribute my skills in a dynamic environment where innovative ideas turn into reality.
                </p>
            </div>

            <div className="border">
                <div className="left">
                    <div className="first">
                        <h2>education</h2>
                    </div>
                    <div className="second">
                        <ul className="gard inner">
                            <li><h3>Postgraduate in Web Development</h3></li>
                            <p>@ Conestoga College</p>
                            <p>2023 - 2024</p>
                        </ul>

                        <ul className="inter inner">
                            <li><h3>Bachelor of Computer Science Engineering</h3></li>
                            <p>@ Bhaskar Engineering College, Moinabad, Hyderabad</p>
                            <p>2016 - 2020</p>
                        </ul>
                    </div>
                </div>

                <div className="techs">
                    <div className="head"><h4>working on technologies...</h4></div>
                    <div className="iconss">
                        <div className="first">
                            <i className="fab fa-js fa-3x icns"></i>
                            <i className="fab fa-angular fa-3x icns"></i>
                            <i className="fab fa-react fa-3x icns"></i>
                            <i className="fab fa-figma fa-3x icns"></i>
                            <i className="fab fa-android fa-3x icns"></i>
                        </div>
                        <div className="second">
                            <i className="fab fa-node fa-3x icns"></i>
                            <i className="fab fa-aws fa-3x icns"></i>
                            <i className="fab fa-python fa-3x icns"></i>
                            <i className="fab fa-github fa-3x icns"></i>
                            <i className="fab fa-jenkins fa-3x icns"></i>

                        </div>
                    </div>
                </div>
            </div>

            <div className="btn">
                <a href="https://drive.google.com/file/d/1PO0lUHgxzAWqqT9P48PZ-t8JSjVy6w9a/view?usp=sharing" target="_blank">
                    <button>
                        <p>see full resume</p>
                        <i className="fas fa-arrow-down"></i>
                    </button>
                </a>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default About;
