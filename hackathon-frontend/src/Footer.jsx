import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>Hackathon Platform</h3>
          <p>Join hackathons, build teams and innovate together.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>Hackathons</p>
          <p>Teams</p>
          <p>Blog</p>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: ayushsa043@gmail.com</p>
          <p>Phone: 9280000001</p>
          <p>New Delhi, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Hackathon Platform. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;