import React, { useState } from 'react';

const services = [
    {
        icon: '💻',
        title: 'Site Vitrine',
        description: 'Une présence en ligne élégante pour présenter votre activité, vos services et attirer de nouveaux clients.',
        features: ['Design responsive', 'Optimisation SEO', 'Formulaire de contact', 'Intégration réseaux sociaux']
    },
    {
        icon: '🛍️',
        title: 'E-commerce',
        description: 'Vendez vos produits en ligne 24/7 avec une boutique sécurisée, performante et facile à gérer.',
        features: ['Paiement sécurisé', 'Gestion des stocks', 'Panier d\'achat', 'Tableau de bord admin']
    },
    {
        icon: '✨',
        title: 'Sur Mesure',
        description: 'Des solutions web complexes et personnalisées pour répondre aux besoins spécifiques de votre entreprise.',
        features: ['Fonctionnalités avancées', 'API & Intégrations', 'Design unique', 'Performance maximale']
    }
];

const TiltCard = ({ children, className }) => {
    const [transform, setTransform] = useState('');
    const [transition, setTransition] = useState('transform 0.1s ease-out');

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate rotation
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg rotation
        const rotateY = ((x - centerX) / centerX) * 5;

        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
        setTransition('transform 0.1s ease-out');
    };

    const handleMouseLeave = () => {
        setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
        setTransition('transform 0.5s ease-out');
    };

    return (
        <div
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform, transition }}
        >
            {children}
        </div>
    );
};

const Services = () => {
    return (
        <section id="services" className="section services-section container">
            <div className="section-header">
                <h2 className="section-title">Nos <span>Services</span></h2>
                <p className="section-subtitle">
                    Des solutions adaptées à chaque étape de votre croissance numérique.
                </p>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <TiltCard key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-desc">{service.description}</p>
                        <ul className="service-features">
                            {service.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                        <a href="#contact" className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                            En savoir plus
                        </a>
                    </TiltCard>
                ))}
            </div>
        </section>
    );
};

export default Services;
