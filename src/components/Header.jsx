import React, { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo">
                    Web<span>Agency</span>
                </a>

                <nav className="nav-links">
                    <a href="#accueil" className="nav-link">Accueil</a>
                    <a href="#services" className="nav-link">Services</a>
                    <a href="#valeurs" className="nav-link">Valeurs</a>
                    <a href="#contact" className="nav-link">Contact</a>

                    <a href="#contact" className="btn btn-outline">
                        Demander un devis
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
