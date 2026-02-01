import React from 'react';

const Hero = () => {
    return (
        <section id="accueil" className="hero">
            <div className="hero-bg"></div>
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title fade-in-up">
                        Propulsez votre PME avec un <span className="hero-highlight">site web d'exception</span>
                    </h1>
                    <p className="hero-subtitle fade-in-up delay-1">
                        Nous créons des sites web performants, modernes et sur-mesure pour aider les petites et moyennes entreprises à se démarquer et à grandir.
                    </p>
                    <div className="hero-actions fade-in-up delay-2">
                        <a href="#contact" className="btn btn-primary">
                            Commencer un projet
                        </a>
                        <a href="#services" className="btn btn-outline">
                            Découvrir nos services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
