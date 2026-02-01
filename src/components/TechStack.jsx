import React from 'react';

const technologies = [
    { name: 'JavaScript', icon: '/assets/logos/js.png', type: 'image' },
    { name: 'HTML5', icon: '/assets/logos/html.png', type: 'image' },
    { name: 'CSS3', icon: '/assets/logos/css.png', type: 'image' },
    { name: 'Figma', icon: '/assets/logos/figma.png', type: 'image' },
    { name: 'Vite', icon: '/assets/logos/vite.png', type: 'image' },
    { name: 'React', icon: '⚛️', type: 'text' },
    { name: 'Node.js', icon: '🟢', type: 'text' },
    { name: 'Git', icon: '📦', type: 'text' }
];

const TechStack = () => {
    return (
        <section className="tech-stack-section">
            <div className="container">
                <p className="tech-stack-title">Technologies que nous maîtrisons</p>
            </div>
            <div className="marquee-container">
                <div className="marquee-track">
                    {/* Double the list for seamless loop */}
                    {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                        <div key={index} className="tech-item">
                            {tech.type === 'image' ? (
                                <img src={tech.icon} alt={tech.name} className="tech-icon-img" />
                            ) : (
                                <span className="tech-icon">{tech.icon}</span>
                            )}
                            <span className="tech-name">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
