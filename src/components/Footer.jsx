import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} WebAgency. Tous droits réservés. <br />
                    Fait avec passion pour les PME.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
