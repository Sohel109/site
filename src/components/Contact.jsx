import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        alert('Merci de nous avoir contacté ! Nous reviendrons vers vous sous peu.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="section contact-section container">
            <div className="section-header">
                <h2 className="section-title">Parlons de <span>votre projet</span></h2>
                <p className="section-subtitle">
                    Prêt à transformer votre présence en ligne ? Remplissez le formulaire ci-dessous et on s'occupe du reste.
                </p>
            </div>

            <div className="contact-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Nom</label>
                        <input
                            type="text"
                            name="name"
                            className="form-input"
                            placeholder="Votre nom"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="votre@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Message</label>
                        <textarea
                            name="message"
                            className="form-textarea"
                            placeholder="Décrivez votre projet..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                        Envoyer le message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
