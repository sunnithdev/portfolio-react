import { Link } from 'react-router-dom';

import mainLogo from '../assets/images/slbbg.png'; 
import Footer from './Footer'; // Update path as necessary

function Home() {
  return (
    <div className="home-page">
      <div className="headings">
        <div className="img">
          <img className="image" src={mainLogo} alt="Sunnith's Logo" />
        </div>
        <div className="left">
          <h2 id="sub-heading">i create things on web...</h2>
        </div>
      </div>
      <div className="links">
        <Link to="/projects" className="link"><span>/</span> projects <span>/</span></Link>
        <Link to="/about" className="link"><span>/</span> about me <span>/</span></Link>
        <Link to="/contact" className="link"><span>/</span> contact <span>/</span></Link>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
