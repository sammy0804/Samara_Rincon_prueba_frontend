import React from 'react';
import '../../styles/footer.css'; // Make sure this path is correct

const Footer = () => {
  // Click event handler for the link
  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    console.log('Footer link');
  };

  return (
    <div className="footer">
        <div className="grid-footer">
            <div className="footer-section">
                <h1>Lorem ipsum dolor amet</h1>
                <p>consectetur adipiscing elit. Quisque eu consectetur mi.</p>
            </div>
            <div className="footer-section">
                <h1>Lorem ipsum dolor amet</h1>
                <p>consectetur adipiscing elit. Quisque eu consectetur mi.</p>
            </div>
            <div className="footer-section">
                <h1>Lorem ipsum dolor amet</h1>
                <p>consectetur adipiscing elit. Quisque eu consectetur mi.</p>
            </div>
        </div>
        <div className="footer-bottom">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                <a  href="/some-path" onClick={handleLinkClick}> Link here </a> 
            Lorem ipsum</p>
        </div>
    </div>
  );
};

export default Footer;
