import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>TEDxUTNCórdoba</h4>
                        <p>Un evento con licencia independiente TEDx que opera bajo la filosofía de TED: Ideas Worth Spreading.</p>
                        <p>Organizamos eventos que reúnen a pensadores brillantes de nuestra comunidad para dar charlas cortas y poderosas.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Enlaces Rápidos</h4>
                        <p><i className="fas fa-home"></i> Inicio</p>
                        <p><i className="fas fa-calendar"></i> Ediciones Anteriores</p>
                        <p><i className="fas fa-user-plus"></i> Inscripciones</p>
                        <p><i className="fas fa-info-circle"></i> Acerca de TED</p>
                    </div>
                    <div className="footer-section">
                        <h4>Redes Sociales</h4>
                        <p><i className="fab fa-instagram"></i> @tedxutncordoba</p>
                        <p><i className="fab fa-linkedin"></i> TEDx UTN Córdoba</p>
                        <p><i className="fab fa-facebook"></i> TEDxUTNCórdoba</p>
                        <p><i className="fab fa-twitter"></i> @tedxutncordoba</p>
                    </div>
                    <div className="footer-section">
                        <h4>Contacto</h4>
                        <p><i className="fas fa-envelope"></i> info@tedxutncordoba.com</p>
                        <p><i className="fas fa-phone"></i> +54 11 1234-5678</p>
                        <p><i className="fas fa-map-marker-alt"></i> Universidad Tecnológica Nacional</p>
                        <p><i className="fas fa-map-marker-alt"></i> Facultad Regional Córdoba</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 TEDxUTNCórdoba. Todos los derechos reservados.</p>
                    <p>Este evento independiente TEDx opera bajo licencia de TED.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
