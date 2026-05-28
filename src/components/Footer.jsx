import "./Footer.css";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkiden.svg";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-left">
        <p>&copy; 2026 Supersite, Powered by News API</p>
      </div>
      <div className="footer-right">
        <nav className="footer-linkA">
          <a href="/">Home</a>
        </nav>
        <nav className="footer-linkB">
          <a href="/">TripleTen</a>
        </nav>
        <div className="footer-icons">
          <a href="#" aria-label="Icon 1" className="icon-link">
            <img
              className="github-Icon"
              src={githubIcon}
              alt="Reference app A"
            />
          </a>
          <a href="#" aria-label="Icon 2" className="icon-link">
            <img
              className="linkedin-Icon"
              src={linkedinIcon}
              alt="Reference app B"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
