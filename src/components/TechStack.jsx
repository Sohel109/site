import React from 'react';

const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Vite', icon: '⚡' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Git', icon: '📦' },
    { name: 'Figma', icon: '🖌️' }
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
                            <span className="tech-icon">{tech.icon}</span>
                            <span className="tech-name">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
