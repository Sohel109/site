import React from 'react';

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

const Services = () => {
    return (
        <section id="services" className="section services-section container">
            <div className="section-header">
                <h2 className="section-title">Nos Services</h2>
                <p className="section-subtitle">
                    Des solutions adaptées à chaque étape de votre croissance numérique.
                </p>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
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
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
